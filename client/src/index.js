import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Calculator from "./Calculator";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Calculator />
  </StrictMode>
);
