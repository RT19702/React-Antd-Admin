import { Navigate, createBrowserRouter } from 'react-router-dom';
import Login from "@/pages/login/index";

const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />
  },
  {
    path: "/login",
    element: <Login />,
  },
])

export default rootRouter