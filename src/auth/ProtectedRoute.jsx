// AuthRoutes.jsx
import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";
import LoadingAnimation from "../components/LoadingPage";

export const CustomerRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth('customer');

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen"><LoadingAnimation/></div>;
  }

  return isAuthenticated ? children : <Navigate to="/customer/login" replace />;
};

export const CarrierRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth('vendor');

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen"><LoadingAnimation/></div>;
  }

  return isAuthenticated ? children : <Navigate to="/customer/login" replace />;
};
