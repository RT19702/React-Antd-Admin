import React from "react";
import LayoutIndex from "@/layouts";
import lazyLoad from "../utils/lazyLoad";

// 首页模块
const homeRouter = [
  {
    element: <LayoutIndex />,
    children: [
      {
        path: "/home/index",
        element: lazyLoad(React.lazy(() => import("@/pages/home/index"))),
        meta: {
          requiresAuth: true,
          title: "首页",
          key: "home"
        }
      },
      {
        path: "/assembly/guide",
        element: lazyLoad(React.lazy(() => import("@/pages/assembly/guide/index"))),
        meta: {
          requiresAuth: true,
          title: "引导页",
          key: "guide"
        }
      },
    ]
  }
]

export default homeRouter;
