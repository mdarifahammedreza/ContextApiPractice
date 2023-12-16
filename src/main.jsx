import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { getAuth } from "firebase/auth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Registration from "./Component/Registration/Registration.jsx";
import Login from "./Component/Login/Login.jsx";
import AuthContext from "./assets/Context/AuthContext.jsx";
import Profile from "./Component/Profile/Profile.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </React.StrictMode>
);
