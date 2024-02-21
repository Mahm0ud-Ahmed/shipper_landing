import React from "react";
import ReactDOM from "react-dom/client";
import ShipperApp from "./ShipperApp.jsx";

import "./sass/vendors/normalize.css";
import "./sass/shipper.css";
import I18n from "./i18n/I18n.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18n>
      <ShipperApp />
    </I18n>
  </React.StrictMode>
);
