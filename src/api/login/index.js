import http from '@/api'
import { PORT1 } from "@/api/config/servicePort";

// 用户登录接口
export const loginApi = (data) => http.post(`${PORT1}/login`, data)

// 获取菜单列表
export const getMenuList = () => http.get(`${PORT1}/menu/list`)