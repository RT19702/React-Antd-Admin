import Router from "./router"
import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";

const App = () => {
  return (
    <ConfigProvider>
      <RouterProvider router={Router} />
    </ConfigProvider>
  )
}

export default App
