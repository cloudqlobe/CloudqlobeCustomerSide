import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import {
  User,
  Building2,
  MapPin,
  Mail,
  TrendingUp,
  CheckCircle,
  Bell,
} from "lucide-react";
import Navbar from "../../public/Components/Navbar";

export default function TroubleTicketDashboard() {
  const tickets = [
    {
      id: "TT-1001",
      customerId: "TEL123456",
      category: "Network Issue",
      followUpMethod: "Email",
      accountManager: "John Doe",
      supportEngineer: "Jane Smith",
      estimatedTime: "2 Days",
      status: "Progress",
      issue: "Call drop issue",
      priority: "High",
    },
    {
      id: "TT-1002",
      customerId: "TEL123457",
      category: "Billing",
      followUpMethod: "Call",
      accountManager: "Michael Lee",
      supportEngineer: "Alice Brown",
      estimatedTime: "1 Day",
      status: "In Progress",
      issue: "Billing mismatch",
      priority: "Medium",
    },
    {
      id: "TT-1003",
      customerId: "TEL123458",
      category: "SIP Registration",
      followUpMethod: "Email",
      accountManager: "Sara White",
      supportEngineer: "Bob Green",
      estimatedTime: "4 Hours",
      status: "Resolved",
      issue: "SIP not registering",
      priority: "Low",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen px-8 py-6 mt-[100px] w-full">
      <Navbar />
      {/* ===== FULL WIDTH CONTAINER ===== */}
      <div className="space-y-8 w-full">

        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-6 gap-6 w-full">

          {/* -------- LEFT CUSTOMER DATA -------- */}
          <div className="col-span-3 bg-white rounded-2xl shadow-md p-6 space-y-4">

            {/* Company Name */}
            <div className="flex items-center justify-between bg-purple-100 rounded-xl px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="bg-purple-500 p-2 rounded-lg text-white">
                  <Building2 size={20} />
                </div>
                <span className="text-gray-700 font-medium">Company Name</span>
              </div>

              {/* Fixed-width white tab */}
              <div className="bg-purple-90 w-[320px] px-4 py-2 shadow-xl text-gray-800 font-medium truncate text-left">
                Technomagic Solutions
              </div>
            </div>

            {/* Customer ID */}
            <div className="flex items-center justify-between bg-blue-100 rounded-xl px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-500 p-2 rounded-lg text-white">
                  <User size={20} />
                </div>
                <span className="text-gray-700 font-medium">Customer ID</span>
              </div>

              {/* Same fixed-width white tab */}
              <div className="bg-blue-90 w-[320px] px-4 py-2 shadow-xl text-gray-800 font-medium truncate text-left">
                TEL123456
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-green-100 rounded-xl p-4">
                <div className="bg-green-500 p-2 rounded-lg text-white">
                  <MapPin size={18} />
                </div>
                <p className="font-semibold text-gray-700">Delhi, IN</p>
              </div>

              <div className="flex items-center justify-between bg-orange-100 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-500 p-2 rounded-lg text-white">
                    <Mail size={18} />
                  </div>
                  <p className="font-semibold text-gray-700">Email</p>
                </div>
                <span className="bg-green-200 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Verified
                </span>
              </div>
            </div>
          </div>

          {/* -------- RIGHT TABS (5 TOTAL) -------- */}
          <div className="col-span-3 space-y-4">
            {/* CREATE TICKET */}
            <div className="bg-green-200 text-black rounded-xl px-6 py-4 flex items-center gap-4 h-[60px] cursor-pointer hover:shadow-md justify-between">
              <span className="font-default text-lg">Create Ticket</span>
              <IoMdAddCircle size={36} className="text-green-600" />
            </div>


            {/* LIVE + TOTAL */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-100 rounded-xl px-6 py-4 flex items-center justify-between h-[90px] cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 p-3 rounded-full text-white">
                    <TrendingUp size={20} />
                  </div>
                  <span className="font-semibold text-gray-800">Live Tickets</span>
                </div>
                <span className="text-2xl font-default text-gray-800">
                  {tickets.filter(t => t.status === "In Progress").length}
                </span>
              </div>

              {/* TOTAL TICKETS TAB */}
              <div className="bg-green-100 rounded-xl px-6 py-4 flex items-center justify-between h-[90px] cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="bg-green-500 p-3 rounded-full text-white">
                    <CheckCircle size={20} />
                  </div>
                  <span className="font-semibold text-gray-800">Total Tickets</span>
                </div>
                <span className="text-2xl font-default text-gray-800">
                  {tickets.length}
                </span>
              </div>
            </div>
            {/* EMAIL + NOTIFICATIONS (LIGHTER COLOR) */}
            <div className="grid grid-cols-2 gap-4">
              {/* Emails Tab */}
              <div className="bg-red-100 rounded-xl shadow-md px-6 py-4 flex items-center justify-between h-[90px] cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="bg-red-500 p-3 rounded-full text-white">
                    <Bell size={20} />
                  </div>
                  <span className="font-semibold text-gray-800">Notifcations</span>
                </div>
                {/* Email count on the right */}
                <span className="text-2xl font-default text-gray-800">
                  15
                </span>
              </div>

              {/* Notifications Tab */}
              <div className="bg-indigo-100 rounded-xl shadow-md px-6 py-4 flex items-center justify-between h-[90px] cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-500 p-3 rounded-full text-white">
                    <Mail size={20} />
                  </div>
                  <span className="font-semibold text-gray-800">Emails</span>
                </div>
                {/* Notification count on the right */}
                <span className="text-2xl font-default text-gray-800">
                  8
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ================= NEW TABLE (FULL WIDTH) ================= */}
        <div className="bg-white squared-2xl shadow-md overflow-hidden w-full mt-8">
          <table className="w-full">
            <thead>
              <tr className="bg-[#0a2463]">
                <th className="px-6 py-6 text-center font-default text-white text-[17px] font-normal">Customer ID</th>
                <th className="px-6 py-6 text-center font-default text-white text-[17px] font-normal">Category</th>
                <th className="px-6 py-6 text-center font-default text-white text-[17px] font-normal">Follow Up Method</th>
                <th className="px-6 py-6 text-center font-default text-white text-[17px] font-normal">Account Manager</th>
                <th className="px-6 py-6 text-center font-default text-white text-[17px] font-normal">Support Engineer</th>
                <th className="px-6 py-6 text-center font-default text-white text-[17px] font-normal">Estimated Time</th>
                <th className="px-6 py-6 text-center font-default text-white text-[17px] font-normal">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {Array.from({ length: 10 }).map((_, i) => {
                const ticket = tickets[i % tickets.length]; // reuse example data
                return (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-default text-gray-600">{ticket.customerId}</td>
                    <td className="px-6 py-4 text-gray-700">{ticket.category}</td>
                    <td className="px-6 py-4 text-gray-700">{ticket.followUpMethod}</td>
                    <td className="px-6 py-4 text-gray-700">{ticket.accountManager}</td>
                    <td className="px-6 py-4 text-gray-700">{ticket.supportEngineer}</td>
                    <td className="px-6 py-4 text-gray-700">{ticket.estimatedTime}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 font-semibold ${ticket.status === "Open" ? "text-red-500" :
                          ticket.status === "In Progress" ? "text-yellow-500" :
                            "text-green-500"
                        }`}>
                        {ticket.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>


          {/* Pagination */}
          <div className="flex justify-end px-6 py-3 bg-slate-50">
            {Array.from({ length: 5 }).map((_, i) => (
              <button
                key={i}
                className="mx-1 px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100"
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

