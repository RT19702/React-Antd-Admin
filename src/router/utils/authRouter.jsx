import { AxiosCanceler } from "@/api/helper/axiosCancel";
import { Navigate, useLocation } from "react-router-dom";
import { store } from "@/redux/index";
import { rootRouter } from "@/router/index";
import { searchRoute } from "@/utils/utils";

const axiosCanceler = new AxiosCanceler();

/**
 * @description 路由守卫组件
 * */
const AuthRouter = ({ children }) => {
  const { pathname } = useLocation();
  const route = searchRoute(pathname, rootRouter);
  // * 在跳转路由之前，清除所有的请求
  axiosCanceler.removeAllPending();
  // * 判断当前路由是否需要访问权限(不需要权限直接放行)
  if (!route?.meta?.requiresAuth) return children;
  // * 判断是否有Token
  const { token } = store.getState().global
  if (!token) return <Navigate to="/login" replace />
  
  return children
}

export default AuthRouter
