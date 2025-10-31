import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import ErrorPage from "./Error/ErrorPage";
import Home from "../pages/Home/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("booksData.json"),
        path: "/",
        Component: Home,
      },
    ],
  },
]);
