import React, { useEffect, useState } from "react";

const VendorDashboard = () => {
  const [data, setData] = useState(null);


  return (
    <div className="dashboard">
      <h2>Vendor Dashboard</h2>

      {/* Stats Cards */}
      <div className="cards">
          <h3>Total Vendors</h3>
      </div>

      {/* Recent Vendors */}
      <div className="table-container">
        <h3>Recent Vendors</h3>
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Email</th>
              <th>Joined</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default VendorDashboard;
