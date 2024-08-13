import React from "react";
import lazyLoad from "@/router/utils/lazyLoad";
import LayoutIndex from "@/layouts";

// 错误页面模块
const errorRouter = [
	{
		element: <LayoutIndex />,
    children:[
			{
				path: "/403",
				element: lazyLoad(React.lazy(() => import("@/components/ErrorMessage/403")))
			},
			{
				path: "/404",
				element: lazyLoad(React.lazy(() => import("@/components/ErrorMessage/404")))
			},
			{
				path: "/500",
				element: lazyLoad(React.lazy(() => import("@/components/ErrorMessage/500")))
			}
		]
	}
];

export default errorRouter;
