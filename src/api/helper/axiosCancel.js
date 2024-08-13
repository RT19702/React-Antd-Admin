import axios from "axios";
import qs from "qs";

/**
 * 用于存储每个请求的标识符和取消功能的映射
 * @type {Map}
 */
let pendingMap = new Map();

/**
 * 序列化请求的参数
 * @param {Object} config - 请求配置
 * @returns {string} - 序列化参数
 */
export const getPendingUrl = (config) => [config.method, config.url, qs.stringify(config.data), qs.stringify(config.params)].join("&");

/**
 * 一个处理Axios请求取消的类
 */
export class AxiosCanceler {
  /**
   * 将请求添加到待处理请求映射中
   * @param {Object} config - 请求配置
   */
  addPending(config) {
    // 在开始新请求之前，检查并取消任何以前的请求
    this.removePending(config);
    // 生成请求标识符
    const url = getPendingUrl(config);
    // 创建取消功能
    config.cancelToken = config.cancelToken || new axios.CancelToken((cancel) => {
      if (!pendingMap.has(url)) {
        pendingMap.set(url, cancel);
      }
    });
  }
  /**
   * 从待处理请求映射中移除请求
   * @param {Object} config - 请求配置
   */
  removePending(config) {
    // 生成请求标识符
    const url = getPendingUrl(config);
    // 如果请求标识符存在，则取消请求 
    if (pendingMap.has(url)) {
      // 获取取消功能
      const cancel = pendingMap.get(url);
      // 执行取消功能
      cancel && cancel();
      // 移除请求标识符
      pendingMap.delete(url);
    }
  }
  /**
	 * @description: 清空所有pending
	 */
	removeAllPending() {
		pendingMap.forEach(cancel => {
			cancel && cancel();
		});
		pendingMap.clear();
	}
}