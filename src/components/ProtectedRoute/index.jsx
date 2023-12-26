import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ element: Element }) => {
  const { pathname } = useLocation();
  const route1 = localStorage.getItem("Route1");

  if (
    !route1 &&
    [
      "/registerpagefour",
      "/registerpagetwo",
      "/registerpage",
      "/registerpagefive",
    ].includes(pathname)
  ) {
    return <Navigate to="/" />;
  }
  return <Element />;
};
