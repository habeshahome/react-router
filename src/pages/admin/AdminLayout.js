import React from "react";
import { Link, Outlet } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";

export function AdminLayout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"> Admin 1 </Link>{" "}
          </li>
          <li>
            <Link to="profile"> Admin 2</Link>{" "}
          </li>
          <li>
            <Link to="profile"> Profile </Link>{" "}
          </li>
        </ul>
      </nav>
      <AdminRoutes />
      <Outlet context={{ zone: "Admin" }} />
    </>
  );
}
