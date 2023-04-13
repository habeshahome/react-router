import React from "react";
import { useLocation } from "react-router-dom";

export function Dashboard() {
  // const {} = useContext
  const location = useLocation();
  console.log(location);
  return "Admin Dashboard Protected";
}
