import axios from "axios";
import { AxiosCanceler } from "./helper/axiosCancel";
import { ResultEnum } from "@/api/config/servicePort";
import NProgress from "@/config/nprogress";
import { message } from "antd";
import { checkStatus } from "./helper/checkStatus";
import { store } from "@/redux";

// 创建axios取消功能实例
const axiosCanceler = new AxiosCanceler();

const config = {
	// 默认地址请求地址，可在 .env 开头文件中修改
	baseURL: import.meta.env.VITE_API_URL,
	// 设置超时时间（10s）
	timeout: 10000,
	// 跨域时候允许携带凭证
	withCredentials: true
};

class RequestHttp {
	constructor(config) {
		// 实例化axios
		this.service = axios.create(config);
		/**
		 * @description 请求拦截器
		 * 客户端发送请求 -> [请求拦截器] -> 服务器
		 * token校验(JWT) : 接受服务器返回的token,存储到redux/本地储存当中
		 */
		this.service.interceptors.request.use(
			(config) => {
				NProgress.start();
				// * 将当前请求添加到 pending 中
				axiosCanceler.addPending(config);
				const token = store.getState().global.token;
				return { ...config, headers: { ...config.headers,"x-access-token": token } };
			},
			(error) => {
				return Promise.reject(error);
			}
		)
		/**
	 * @description 响应拦截器
	 *  服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
	 */
		this.service.interceptors.response.use(
			(response) => {
				const { data } = response;
				NProgress.done();
				// * 在请求结束后，移除本次请求(关闭loading)
				axiosCanceler.removePending(config);
				// * 全局错误信息拦截（防止下载文件得时候返回数据流，没有code，直接报错）
				if (data.code && data.code !== ResultEnum.SUCCESS) {
					message.error(data.msg);
					return Promise.reject(data);
				}
				// * 成功请求（在页面上除非特殊情况，否则不用处理失败逻辑）
				return data;
			},
			(error) => {
				const { response } = error;
				NProgress.done();
				// 请求超时单独判断，请求超时没有 response
				if (error.message.indexOf("timeout") !== -1) message.error("请求超时，请稍后再试");
				// 根据响应的错误状态码，做不同的处理
				if (response) checkStatus(response.status);
				return Promise.reject(error);
			});
	}

	// 常用请求方法封装
	get(url, params, _object = {}) {
		return this.service.get(url, { params, ..._object });
	}

	post(url, params, _object = {}) {
		return this.service.post(url, params, _object);
	}

	put(url, params, _object = {}) {
		return this.service.put(url, params, _object);
	}

	delete(url, params, _object = {}) {
		return this.service.delete(url, { params, ..._object });
	}
}

export default new RequestHttp(config);