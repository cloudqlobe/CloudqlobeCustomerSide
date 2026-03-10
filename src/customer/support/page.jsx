import React, { useContext, useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import {
  User,
  Building2,
  MapPin,
  Mail,
  TrendingUp,
  CheckCircle,
  Clock,
  Loader2
} from "lucide-react";
import Navbar from "../../public/Components/Navbar";
import CustomerAuthContext from "../../context/customer/CustomerAuthContext";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosinstance";

export default function TroubleTicketDashboard() {
  const { customerDetails } = useContext(CustomerAuthContext);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const ticketsPerPage = 10;
  const [ticketDetails, setTicketDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const customerId = customerDetails?.id;

  /* ================= FETCH ================= */
  useEffect(() => {
    if (!customerId) return; // ✅ prevent empty API call

    const fetchData = async () => {
      try {
        const ticketResponse = await axiosInstance.get(
          `api/troubleticket?customerId=${customerId}`
        );

        setTicketDetails(ticketResponse.data.troubletickets || []);
        setCurrentPage(1);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [customerId]);

  /* ================= COUNTS ================= */

  const liveTickets = ticketDetails.filter(
    (t) => t.status === "In Progress"
  ).length;

  const pendingTickets = ticketDetails.filter(
    (t) => t.status === "Pending"
  ).length;

  const completedTickets = ticketDetails.filter(
    (t) => t.status === "Completed"
  ).length;

  const totalTickets = ticketDetails.length;

  /* ================= PAGINATION ================= */

  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;

  const currentTickets = ticketDetails.slice(
    indexOfFirstTicket,
    indexOfLastTicket
  );

  const totalPages = Math.ceil(ticketDetails.length / ticketsPerPage);

  return (
    <div className="bg-slate-50 min-h-screen px-8 py-6 mt-[100px] w-full">
      <Navbar />

      <div className="space-y-8 w-full">

        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-6 gap-6 w-full">

          {/* -------- LEFT CUSTOMER DATA -------- */}
          <div className="col-span-3 bg-white rounded-2xl shadow-md p-6 space-y-4">

            <div className="flex items-center justify-between bg-purple-100 rounded-xl px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="bg-purple-500 p-2 rounded-lg text-white">
                  <Building2 size={20} />
                </div>
                <span className="text-gray-700 font-medium">Company Name</span>
              </div>

              <div className="bg-purple-90 w-[320px] px-4 py-2 shadow-xl text-gray-800 font-medium truncate text-left">
                Technomagic Solutions
              </div>
            </div>

            <div className="flex items-center justify-between bg-blue-100 rounded-xl px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-500 p-2 rounded-lg text-white">
                  <User size={20} />
                </div>
                <span className="text-gray-700 font-medium">Customer ID</span>
              </div>

              <div className="bg-blue-90 w-[320px] px-4 py-2 shadow-xl text-gray-800 font-medium truncate text-left">
                {customerDetails?.customerId}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-green-100 rounded-xl p-4">
                <div className="bg-green-500 p-2 rounded-lg text-white">
                  <MapPin size={18} />
                </div>
                <p className="font-semibold text-gray-700">
                  {customerDetails?.address}
                </p>
              </div>

              <div className="flex items-center justify-between bg-orange-100 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-500 p-2 rounded-lg text-white">
                    <Mail size={18} />
                  </div>
                  <p className="font-semibold text-gray-700">
                    {customerDetails?.companyEmail}
                  </p>
                </div>

                <span className="bg-green-200 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Verified
                </span>
              </div>
            </div>
          </div>

          {/* -------- RIGHT TABS -------- */}
          <div className="col-span-3 space-y-4">

            <div
              onClick={() => navigate("/customer/add-ticket")}
              className="bg-green-200 text-black rounded-xl px-6 py-4 flex items-center gap-4 h-[60px] cursor-pointer hover:shadow-md justify-between"
            >
              <span className="font-default text-lg">Create Ticket</span>
              <IoMdAddCircle size={36} className="text-green-600" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-100 rounded-xl px-6 py-4 flex items-center justify-between h-[90px]">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 p-3 rounded-full text-white">
                    <TrendingUp size={20} />
                  </div>
                  <span className="font-semibold text-gray-800">Live Tickets</span>
                </div>
                <span className="text-2xl font-default text-gray-800">
                  {liveTickets}
                </span>
              </div>

              {/* ✅ FIXED TOTAL */}
              <div className="bg-orange-100 rounded-xl px-6 py-4 flex items-center justify-between h-[90px]">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-500 p-3 rounded-full text-white">
                    <Clock size={20} />
                  </div>
                  <span className="font-semibold text-gray-800">Pending Tickets</span>
                </div>
                <span className="text-2xl font-default text-gray-800">
                  {pendingTickets}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* Emails Tab */}
              <div className="bg-yellow-100 rounded-xl shadow-md px-6 py-4 flex items-center justify-between h-[90px] cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-500 p-3 rounded-full text-white">
                    <Loader2 size={20} className="animate-spin" />
                  </div>
                  <span className="font-semibold text-gray-800">In Progress</span>
                </div>
                <span className="text-2xl font-default text-gray-800">
                  {liveTickets}
                </span>
              </div>

              {/* Notifications Tab */}
              <div className="bg-green-100 rounded-xl shadow-md px-6 py-4 flex items-center justify-between h-[90px] cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="bg-green-500 p-3 rounded-full text-white">
                    <CheckCircle size={20} />
                  </div>
                  <span className="font-semibold text-gray-800">Completed</span>
                </div>
                <span className="text-2xl font-default text-gray-800">
                  {completedTickets}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= TABLE ================= */}
        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-10 h-10 animate-spin text-gray-600" />
          </div>
        ) : (
          <div className="bg-white squared-2xl shadow-md overflow-hidden w-full mt-8">
            <table className="w-full">
              <thead>
                <tr className="bg-[#0a2463]">
                  <th className="px-6 py-6 text-center text-white">Customer ID</th>
                  <th className="px-6 py-6 text-center text-white">Category</th>
                  <th className="px-6 py-6 text-center text-white">Follow Up Method</th>
                  <th className="px-6 py-6 text-center text-white">Account Manager</th>
                  <th className="px-6 py-6 text-center text-white">Support Engineer</th>
                  <th className="px-6 py-6 text-center text-white">Estimated Time</th>
                  <th className="px-6 py-6 text-center text-white">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {ticketDetails.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-10 text-gray-500">
                      No Tickets Found
                    </td>
                  </tr>
                ) : (
                  currentTickets.map((ticket) => (
                    <tr key={ticket.id} className="hover:bg-slate-50">
                      <td className="px-6 py-4">{ticket.customerId}</td>
                      <td className="px-6 py-4">{ticket.ticketCategory}</td>
                      <td className="px-6 py-4">{ticket.followUpMethod}</td>
                      <td className="px-6 py-4">{ticket.accountManager}</td>
                      <td className="px-6 py-4">{ticket.supportEngineer}</td>
                      <td className="px-6 py-4">
                        {new Date(ticket.ticketTime).toLocaleString()}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 font-semibold ${ticket.status === "Pending"
                            ? "text-red-500"
                            : ticket.status === "In Progress"
                              ? "text-yellow-500"
                              : "text-green-500"
                            }`}
                        >
                          {ticket.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <div className="flex justify-end px-6 py-4 bg-slate-50">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`mx-1 px-3 py-1 rounded-md border ${currentPage === i + 1
                    ? "bg-[#0a2463] text-white"
                    : "border-gray-300 hover:bg-gray-100"
                    }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}