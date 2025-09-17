import { createBrowserRouter } from "react-router";

import Root from "../Layout/Root/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Components/Login";
import Register from "../Pages/Components/Register";
import User from "../Pages/Components/User";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "user",
        Component: User,
      },
    ],
  },
]);

export default router;
