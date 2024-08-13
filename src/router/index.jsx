import { Navigate, createHashRouter } from 'react-router-dom';
import Login from "@/pages/login/index";

const metaRouters = import.meta.glob('./**/*.jsx', { eager: true });

export const routerArray = []

Object.keys(metaRouters).forEach(item => {
  Object.keys(metaRouters[item]).forEach((key) => {
    routerArray.push(...Object.values(metaRouters[item][key]));
  });
});

const rootRouter = createHashRouter([
  {
    path: "/",
    element: <Navigate to="/login" />
  },
  {
    path: "/login",
    element: <Login />,
  },
  ...routerArray,
  {
		path: "*",
		element: <Navigate to="/404" />
	}
])

export default rootRouter
