import LayoutIndex from "@/layouts";
import Home from "@/pages/home/index";

// 首页模块
const homeRouter = [
  {
    element: <LayoutIndex />,
    children: [
      {
        path: "/home/index",
        element: <Home />,
        meta: {
          requiresAuth: true,
          title: "首页",
          key: "home"
        }
      }
    ]
  }
]

export default homeRouter;
