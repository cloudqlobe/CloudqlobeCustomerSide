import { useState } from "react";
import VendorAuthContext from "./VendorAuthContext";
import { jwtDecode } from "jwt-decode";

const VendorAuthProvider = ({ children }) => {
  const [vendorDetails, setVendorDetails] = useState(() => {
    const savedToken = sessionStorage.getItem("Ven-Au-To");

    if (savedToken) {
      try {
        const decoded = jwtDecode(savedToken);
        return {
          id: decoded.id || "",
          companyEmail: decoded.companyEmail || "",
          customerId: decoded.customerId || "",
          companyName: decoded.companyName || "",
          name: decoded.name || "",
          address: decoded.address || "",
        };
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }

    return {
      id: "",
      companyEmail: "",
      customerId: "",
      companyName: "",
      name: "",
      address: "",
    };
  });

  const updateVendorDetails = (token) => {
    try {
      const decoded = jwtDecode(token);
      setVendorDetails({
        id: decoded.id || "",
        companyEmail: decoded.companyEmail || "",
        customerId: decoded.customerId || "",
        companyName: decoded.companyName || "",
        name: decoded.name || "",
        address: decoded.address || "",
      });
      sessionStorage.setItem("Ven-Au-To", token); // ✅ Save token
    } catch (error) {
      console.error("Invalid token:", error);
    }
  };

  const clearVendorDetails = () => {
    setVendorDetails({
      id: "",
      companyEmail: "",
      customerId: "",
      companyName: "",
      name: "",
      address: "",
    });
    sessionStorage.removeItem("Ven-Au-To"); // ✅ Remove token
  };

  return (
    <VendorAuthContext.Provider
      value={{ vendorDetails, updateVendorDetails, clearVendorDetails }}
    >
      {children}
    </VendorAuthContext.Provider>
  );
};

export default VendorAuthProvider;
