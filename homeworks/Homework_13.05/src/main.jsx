import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainPage from "./Pages/MainPage/MainPage.jsx";
import AboutPage from "./Pages/AboutPage/AboutPage.jsx";
import ModalPage from "./Pages/ModalPage/ModalPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "modal",
        element: <ModalPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
