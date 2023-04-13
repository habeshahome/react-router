import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Home, About, AdminLayout, PublicLayout } from "./pages";

function App() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const unblock = navigate.block((location, action) => {
  //     if (action === "pop") {
  //       return false; // block navigation
  //     }

  //     return true; // allow navigation
  //   });

  //   return () => {
  //     unblock(); // remove the block when the component unmounts
  //   };
  // }, [navigate]);
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">About </Link>
          </li>
          <li>
            <Link to="/admin">Dashboard </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={"Public Layout"}>
          <Route path="/about" element={<Home />} />
        </Route>
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="*" element={"Page Not Found"} />
      </Routes>
    </>
  );
}

export default App;
