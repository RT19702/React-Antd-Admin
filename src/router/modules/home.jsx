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
        element: lazyLoad(React.lazy(() => import("@/pages/home/index")))
      }
    ]
  }
]

export default homeRouter;
