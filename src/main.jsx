
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { UseContextProvider } from "./Context.jsx";
import "leaflet/dist/leaflet.css";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <UseContextProvider>
          <App />
        </UseContextProvider>
      </HelmetProvider>
    </BrowserRouter>

  </React.StrictMode>
);
