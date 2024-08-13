import Router from "@/router"
import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import { HashRouter } from "react-router-dom";
import AuthRouter from "@/router/utils/authRouter";

const App = () => {
  return (
    <HashRouter>
      <ConfigProvider>
        <AuthRouter>
          <Router />
        </AuthRouter>
      </ConfigProvider>
    </HashRouter>
  )
}

export default App
