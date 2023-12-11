import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout.jsx";
import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import ContactMe from "./ContactMe.jsx";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/about-me",
        element: <AboutMe></AboutMe>,
      },
      {
        path: "/contact-me",
        element: <ContactMe></ContactMe>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster position="top-center" reverseOrder={false} />
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
