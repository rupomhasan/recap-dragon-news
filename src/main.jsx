import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MycreatedRouter from "./Components/Router/MycreatedRouter.jsx";
import AuthProvider from "./Components/AuthProvider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={MycreatedRouter} />
    </React.StrictMode>
  </AuthProvider>
);
