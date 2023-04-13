import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/admin");
    }, 1000);
  }, [navigate]);
  return "Page Not Found Public";
}
