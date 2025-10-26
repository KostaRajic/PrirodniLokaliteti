/* eslint-disable react-refresh/only-export-components */

import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { UseContextProvider } from "./Context.jsx";
import "leaflet/dist/leaflet.css";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Spinner from "./Spinner.jsx";
// import CommentForm from "./components/Comments/CommentForm.jsx";

const App = React.lazy(() => import("./App.jsx"));


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <UseContextProvider>
          <Suspense fallback={<Spinner/>}>
            <App />
          </Suspense>
        </UseContextProvider>
      </HelmetProvider>
    </BrowserRouter>
    {/* <CommentForm/> */}
  </React.StrictMode>
);
