import { Navigate, useRoutes } from 'react-router-dom';
import Login from "@/pages/login/index";

const metaRouters = import.meta.glob('./**/*.jsx', { eager: true });

export const routerArray = []

Object.keys(metaRouters).forEach(item => {
  Object.keys(metaRouters[item]).forEach((key) => {
    routerArray.push(...Object.values(metaRouters[item][key]));
  });
});

export const rootRouter = [
  {
    path: "/",
    element: <Navigate to="/login" />
  },
  {
    path: "/login",
    element: <Login />,
    meta: {
			requiresAuth: false,
			title: "登录页",
			key: "login"
		}
  },
  ...routerArray,
  {
		path: "*",
		element: <Navigate to="/404" />
	}
]

const Router = () => useRoutes(rootRouter)

export default Router
