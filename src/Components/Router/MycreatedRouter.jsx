import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../../Pages/Home/Home";
import NewsDetails from "../../Pages/NewsDetails/NewsDetails";
import Login from "../../Pages/Authentication/Login";
import Register from "../../Pages/Authentication/Register";

const MycreatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        loader: () => fetch("news.json"),
        element: <Home></Home>,
      },
      {
        path: "/newsDetails/:id",
        element: <NewsDetails></NewsDetails>,
        loader: () => fetch("news.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default MycreatedRouter;
