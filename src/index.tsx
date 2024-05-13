import React from "react";

import ReactGA from "react-ga4";

import ReactDOM from "react-dom/client";

import App from "./App";

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_KEY || "");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
