import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes.jsx";
import CustomerRoutes from "./routes/CustomerRoutes.jsx";
import ScrollToTop from "./ScrollToTop.js";
import { useEffect } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalLoader from "./components/GlobalLoader.jsx";

function App() {

  useEffect(() => {
    const hideGoogleTranslate = () => {
      const style = document.createElement("style");
      style.innerHTML = `
      .goog-te-banner-frame.skiptranslate { display: none !important; }
      body { top: 0px !important; }
    `;
      document.head.appendChild(style);
    };
    hideGoogleTranslate();
  }, []);

  return (
    <>
      <GlobalLoader />

      <Router>
        <ToastContainer position="top-right" autoClose={3000} theme="colored" />
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/*" element={<PublicRoutes />} />

          {/* Customer Routes */}
          <Route path="/customer/*" element={<CustomerRoutes />} />

        </Routes>

      </Router>
    </>

  );
}

export default App;