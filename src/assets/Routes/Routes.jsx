import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
  },
]);
