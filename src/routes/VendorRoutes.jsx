import React from "react";
import { Routes, Route } from "react-router-dom";
import { CarrierRoute } from "../auth/ProtectedRoute.jsx";
import VendorVerifyTokenPage from "../auth/login/Token/vendorToken.jsx";
import VendorDashboard from "../vendor/page.jsx";
import VendorForgotPasswordPage from "../auth/ForgotPassword/VendorForgotPassword.jsx";
import VendorResetPasswordPage from "../auth/ResetPassword/VendorResetPassword.jsx";


const VendorRoutes = () => {
  return (
    <Routes>
      <Route path="/verify-token" element={<VendorVerifyTokenPage />} />
      <Route path="/reset-password" element={<VendorResetPasswordPage />} />
      <Route path="/forgot-password" element={<VendorForgotPasswordPage />} />
        <Route path="/*" element={
          // <CarrierRoute>
            <Routes>
              <Route path="/dashboard" element={<VendorDashboard />} />
            </Routes>
          // </CarrierRoute>
        }
        />
    </Routes>
  );
};

export default VendorRoutes;