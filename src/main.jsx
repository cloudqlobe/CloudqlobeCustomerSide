import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import CustomerAuthProvider from "./context/customer/CustomerAuthProvider";
import { LanguageProvider } from "./context/LanguageContext";
import { LoaderProvider } from "./context/LoaderContext/page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoaderProvider>
      <CustomerAuthProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </CustomerAuthProvider>
    </LoaderProvider>
  </React.StrictMode>
);

reportWebVitals();
