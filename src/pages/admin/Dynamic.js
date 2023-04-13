import React from "react";
import { useParams } from "react-router-dom";

export function Dynamic() {
  const { id } = useParams();
  return "Dynamic Public" + id;
}
