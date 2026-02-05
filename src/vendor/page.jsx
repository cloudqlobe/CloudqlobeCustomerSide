import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosinstance";
import VendorAuthContext from "../context/vendor/VendorAuthContext";
import Navbar from "../public/Components/Navbar";

export default function Home() {
  const navigate = useNavigate();
  const { vendorDetails } = useContext(VendorAuthContext);
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = sessionStorage.getItem("Ven-Au-To");

useEffect(() => {
  if (!token) {
    navigate("/customer/login");
    return;
  }

  if (!vendorDetails?.id) return;

  const fetchVendorData = async () => {
    try {
      const response = await axiosInstance.get(
        `api/vendor/vendorData/${vendorDetails.id}`
      );
      setCustomer(response.data.vendor);
    } catch (error) {
      console.error("Error fetching profile data", error);
    } finally {
      setLoading(false);
    }
  };

  fetchVendorData();
}, [vendorDetails?.id, token, navigate]);


  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Navbar/>
      {/* Header */}
      <div style={{marginTop:"90px"}} className="flex justify-between items-center bg-white p-4 rounded-xl shadow">
        <h1 className="text-xl font-semibold">
          Welcome, {customer.companyName}
        </h1>
      </div>

      {/* Customer Details */}
      <div className="mt-6 bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Customer Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Detail label="Customer ID" value={customer.customerId} />
          <Detail label="Username" value={customer.username} />
          <Detail label="Company Email" value={customer.companyEmail} />
          <Detail label="User Email" value={customer.userEmail} />
          <Detail label="Status" value={customer.customerStatus} />
        </div>
      </div>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
