import { Routes, Route, Outlet } from "react-router-dom";
import { AdminLayout } from "./AdminLayout";
import { Dashboard } from "./Dashboard";
import { Dynamic } from "./Dynamic";
import { Profile } from "./Profile";

export default function AdminRoutes() {
  return (
    <>
      <Routes element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path=":id" element={<Dynamic />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/settings" element={<> Settings </>} />
      </Routes>
      <Outlet context={{ zone: "Admin" }} />
    </>
  );
}
