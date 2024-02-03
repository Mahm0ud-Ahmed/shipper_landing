import React from "react";
import ReactDOM from "react-dom/client";
import ShipperApp from "./ShipperApp.jsx";
import "./sass/vendors/normalize.css";
import "./sass/shipper.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShipperApp />
  </React.StrictMode>
);
