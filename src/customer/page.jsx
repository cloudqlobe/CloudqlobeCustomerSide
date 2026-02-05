import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GrSettingsOption } from "react-icons/gr";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdOutlineAttachEmail } from "react-icons/md";
import { SiMoneygram } from "react-icons/si";
import { LuTicketsPlane } from "react-icons/lu";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

import {
    CheckCircle,
    User, Mail, Building, MapPin,
    Signal, Globe,
    Smartphone, Network,
    Settings, DollarSign, LogOut,
    Activity, Zap,
    TrendingUp, Shield, ChevronDown,
    AlertTriangle, Info,
    FileText,
    ChevronLeft,
    ChevronRight,
    Star,
    CheckCircle2,
} from "lucide-react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import Navbar from "../public/Components/Navbar";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    const navigate = useNavigate();
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const trafficData = [
        { time: "00", value: 12, trend: "down" },
        { time: "02", value: 18, trend: "up" },
        { time: "04", value: 40, trend: "up" },
        { time: "06", value: 22, trend: "down" },
        { time: "08", value: 8, trend: "down" },
        { time: "10", value: 20, trend: "up" },
        { time: "12", value: 24, trend: "up" },
        { time: "14", value: 6, trend: "down" },
        { time: "16", value: 22, trend: "up" },
        { time: "18", value: 18, trend: "down" },
        { time: "20", value: 10, trend: "down" },
        { time: "22", value: 20, trend: "up" },
    ];


    const liveUpdates = [
        {
            icon: TrendingUp,
            title: "Free Credit for Testing",
            text: "Try our platform risk-free with complimentary credits",
            color: "text-green-700",
            bg: "bg-gradient-to-br from-green-50 to-emerald-50",
            borderColor: "border-green-200",
            iconBg: "bg-green-500",
            rating: 5,
        },
        {
            icon: DollarSign,
            title: "Special Rate Discount",
            text: "Get 20% off on all international routes this month",
            color: "text-blue-700",
            bg: "bg-gradient-to-br from-blue-50 to-sky-50",
            borderColor: "border-blue-200",
            iconBg: "bg-blue-500",
            rating: 5,
        },
        {
            icon: Shield,
            title: "Enhanced Security Features",
            text: "New firewall protection now active on all networks",
            color: "text-purple-700",
            bg: "bg-gradient-to-br from-purple-50 to-violet-50",
            borderColor: "border-purple-200",
            iconBg: "bg-purple-500",
            rating: 5,
        },
        {
            icon: Network,
            title: "Network Expansion",
            text: "Added 15 new server locations across Asia-Pacific",
            color: "text-orange-700",
            bg: "bg-gradient-to-br from-orange-50 to-amber-50",
            borderColor: "border-orange-200",
            iconBg: "bg-orange-500",
            rating: 5,
        },
        {
            icon: Activity,
            title: "Performance Boost",
            text: "Experience 40% faster connection speeds globally",
            color: "text-cyan-700",
            bg: "bg-gradient-to-br from-cyan-50 to-teal-50",
            borderColor: "border-cyan-200",
            iconBg: "bg-cyan-500",
            rating: 5,
        },
        {
            icon: AlertTriangle,
            title: "Priority Support Available",
            text: "Get instant 24/7 technical assistance for all plans",
            color: "text-red-700",
            bg: "bg-gradient-to-br from-red-50 to-pink-50",
            borderColor: "border-red-200",
            iconBg: "bg-red-500",
            rating: 5,
        },
    ];

    const quickActions = [
        {
            icon: Signal,
            title: "Connectivity",
            percentage: 90,
            color: "from-pink-400 to-pink-600",
            bgColor: "bg-pink-50",
            textColor: "text-pink-600"
        },
        {
            icon: Zap,
            title: "Speed",
            percentage: 20,
            color: "from-purple-400 to-purple-600",
            bgColor: "bg-purple-50",
            textColor: "text-purple-600"
        },
        {
            icon: TrendingUp,
            title: "Performance",
            percentage: 100,
            color: "from-orange-400 to-orange-600",
            bgColor: "bg-orange-50",
            textColor: "text-orange-600"
        },
        {
            icon: Activity,
            title: "Latency",
            percentage: 40,
            color: "from-teal-400 to-teal-600",
            bgColor: "bg-teal-50",
            textColor: "text-teal-600"
        },
        {
            icon: Shield,
            title: "Security",
            percentage: 80,
            color: "from-blue-400 to-blue-600",
            bgColor: "bg-blue-50",
            textColor: "text-blue-600"
        },
        {
            icon: Network,
            title: "Bandwidth",
            percentage: 65,
            color: "from-cyan-400 to-cyan-600",
            bgColor: "bg-cyan-50",
            textColor: "text-cyan-600"
        },
    ];

    const recentActivity = [
        {
            title: " Emails",
            icon: MdOutlineAttachEmail,
            bg: "bg-blue-300",
            text: "text-blue-900",
            link: "View",
        },
        {
            title: "Rates Notifications",
            icon: SiMoneygram,
            bg: "bg-green-300",
            text: "text-green-900",
            link: "open",
        },
        {
            title: "Trouble Tickets",
            icon: LuTicketsPlane,
            bg: "bg-yellow-300",
            text: "text-yellow-900",
            link: "Open",
        },
        {
            title: "Live Destinations",
            icon: FileText,
            bg: "bg-purple-300",
            text: "text-purple-900",
            link: "View",
        },
        {
            title: "Payment Notifications",
            icon: RiMoneyDollarBoxLine,
            bg: "bg-red-300",
            text: "text-red-900",
            link: "View",
        },
    ];

    const userMenuItems = [
        { icon: User, label: "My Account", color: "text-blue-600" },
        { icon: Settings, label: "Settings", color: "text-gray-600" },
        { icon: LogOut, label: "Logout", color: "text-red-600" },
    ];

    const actionTabs = [
        {
            label: "Payment Center",
            icon: RiSecurePaymentFill,
            gradient: "from-emerald-400 to-green-500",
            bgGradient: "from-emerald-200 to-green-200",
            description: "Manage billing & payments",
            delay: 0.4,
            path: "/customer/payments",
        },
        {
            label: "My Rates",
            icon: DollarSign,
            gradient: "from-blue-400 to-cyan-500",
            bgGradient: "from-blue-200 to-cyan-200",
            description: "View & upgrade plans",
            delay: 0.5,
            path: "/customer/my-rates",
        },
        {
            label: "24/7 Support",
            icon: GrSettingsOption,
            gradient: "from-purple-400 to-indigo-500",
            bgGradient: "from-purple-200 to-indigo-200",
            description: "Get instant help",
            delay: 0.6,
            path: "/customer/support",
        },
        {
            label: "Profile Settings",
            icon: Settings,
            gradient: "from-orange-400 to-amber-500",
            bgGradient: "from-orange-200 to-amber-200",
            description: "Account preferences",
            delay: 0.7,
            path: "/customer/profile",
        },
    ];


    const scrollContainer = (direction) => {
        const container = document.getElementById('live-updates-scroll');
        const scrollAmount = 420;
        if (direction === 'left') {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="p-6 space-y-8 mt-[100px]">
                {/* Enhanced Welcome & Contact Information Section */}
                <motion.div
                    className="bg-white/80 backdrop-blur-sm p-8 squared-3xl shadow-2xl border border-white/50 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        {/* Left Side - Modern Card Design with Split Layout */}
                        <motion.div
                            className="lg:col-span-2 bg-white border-2 border-gray-200 rounded-2xl relative overflow-hidden shadow-xl h-[250px]"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            {/* Top Header Bar with User Menu & Notifications */}
                            <div className="absolute top-4 right-4 flex items-center space-x-3 z-20">
                                {/* Notifications */}


                                {/* User Menu */}
                                <div className="relative">



                                    <AnimatePresence>
                                        {userMenuOpen && (
                                            <motion.div
                                                className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-2xl border border-gray-200 py-3"
                                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {userMenuItems.map((item, i) => (
                                                    <motion.button
                                                        key={i}
                                                        className="w-full flex items-center space-x-3 px-5 py-2 hover:bg-gray-50 transition-all duration-200 rounded-lg"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.05 }}
                                                        whileHover={{ x: 5 }}
                                                    >
                                                        <div className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center">
                                                            <item.icon className={`w-4 h-4 ${item.color}`} />
                                                        </div>
                                                        <span className="text-sm font-medium text-gray-700">
                                                            {item.label}
                                                        </span>
                                                    </motion.button>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Main Content - Split Design */}
                            <div className="flex h-full">
                                {/* Left Section - Colorful Gradient */}


                                {/* Right Section - Info Cards */}
                                <div className="flex-1 p-6 flex flex-col justify-center">

                                    <div className="space-y-3">
                                        <motion.div
                                            className="flex items-center gap-3 p-3 bg-blue-100 border border-blue-200 rounded-xl"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <User className="w-4 h-4 text-white" />
                                            </div>
                                            <p className="text-sm font-semibold text-gray-800 truncate">
                                                <span className="text-gray-500 font-medium">Customer ID :</span>{" "}
                                                TEL123456
                                            </p>
                                        </motion.div>

                                        <motion.div
                                            className="flex items-center gap-3 p-3 bg-purple-100 border border-purple-200 rounded-xl"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            <div className="w-8 h-8 bg-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <Building className="w-4 h-4 text-white" />
                                            </div>
                                            <p className="text-sm font-semibold text-gray-800 truncate">
                                                <span className="text-gray-500 font-medium">Company Name :</span>{" "}
                                                TeleConnect Solutions
                                            </p>
                                        </motion.div>


                                        <div className="grid grid-cols-2 gap-3">
                                            <motion.div
                                                className="flex items-center gap-2 p-2.5 bg-green-100 border border-green-200 rounded-xl"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.6 }}
                                            >
                                                <div className="w-7 h-7 bg-green-400 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <MapPin className="w-4 h-4 text-white" />
                                                </div>

                                                <p className="text-xs font-semibold text-gray-800 truncate">
                                                    <span className="text-gray-500 font-medium">Location :</span>{" "}
                                                    Delhi, IN
                                                </p>
                                            </motion.div>

                                            <motion.div
                                                className="flex items-center justify-between gap-2 p-2.5 bg-orange-100 border border-orange-200 rounded-xl"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.7 }}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <div className="w-7 h-7 bg-orange-400 rounded-lg flex items-center justify-center flex-shrink-0">
                                                        <Mail className="w-4 h-4 text-white" />
                                                    </div>

                                                    <p className="text-xs font-semibold text-gray-800">
                                                        <span className="text-gray-500 font-medium">Email</span>
                                                    </p>
                                                </div>

                                                {/* VERIFIED TAB */}
                                                <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold text-green-700 bg-green-200 rounded-full">
                                                    <CheckCircle className="w-3 h-3" />
                                                    Verified
                                                </span>
                                            </motion.div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side - Wider & Shorter Action Tabs */}
                        <div className="lg:col-span-3 grid grid-cols-2 gap-8">
                            {actionTabs.map((tab, i) => (
                                <motion.div
                                    key={i}
                                    onClick={() => navigate(tab.path)}
                                    className={`bg-gradient-to-br ${tab.bgGradient} border border-white/50 p-4 rounded-xl
      group hover:shadow-lg transition-all duration-300 cursor-pointer
      relative overflow-hidden h-[110px]`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: tab.delay }}
                                    whileHover={{ scale: 1.03, y: -2 }}
                                >
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500"></div>

                                    <div className="relative z-10 flex items-center space-x-3 h-full">
                                        <motion.div
                                            className={`w-[60px] h-[60px] bg-gradient-to-r ${tab.gradient} rounded-full flex items-center justify-center shadow-md`}
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <tab.icon className="w-8 h-8 text-white" />
                                        </motion.div>

                                        <div className="flex-1">
                                            <h3 className="font-bold text-gray-800 text-sm mb-1">{tab.label}</h3>
                                            <p className="text-xs text-gray-600">{tab.description}</p>
                                        </div>

                                        <motion.div
                                            className="w-6 h-6 bg-white/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            whileHover={{ scale: 1.2 }}
                                        >
                                            <ChevronDown className="w-3 h-3 text-gray-700 rotate-[-90deg]" />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* LEFT SECTION - Network Performance */}
                    <motion.div
                        className="lg:col-span-2 flex flex-col"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >


                        {/* Container with flex-grow to match right side height */}
                        <div className="flex-1 flex flex-col gap-6">
                            {/* Simplified Traffic Chart */}
                            <motion.div
                                className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {/* Simple Header */}
                                <div className="mb-5">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                                                <TrendingUp className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-base font-bold text-gray-800">Traffic Analytics</h3>

                                            </div>
                                        </div>

                                        {/* Simple Stats */}

                                    </div>
                                </div>

                                {/* Clean Chart - Increased Height */}
                                <div className="w-full h-[320px] bg-gray-50 rounded-xl p-4">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={trafficData}>
                                            <defs>
                                                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                                                    <stop offset="0%" stopColor="#3b82f6" />
                                                    <stop offset="50%" stopColor="#8b5cf6" />
                                                    <stop offset="100%" stopColor="#ec4899" />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                                            <XAxis
                                                dataKey="time"
                                                tick={{ fontSize: 11, fill: '#6b7280' }}
                                                stroke="#d1d5db"
                                            />
                                            <YAxis
                                                domain={[0, 50]}
                                                tick={{ fontSize: 11, fill: '#6b7280' }}
                                                stroke="#d1d5db"
                                            />
                                            <Tooltip
                                                contentStyle={{
                                                    backgroundColor: '#ffffff',
                                                    border: '1px solid #e5e7eb',
                                                    borderRadius: '8px',
                                                    fontSize: '12px'
                                                }}
                                            />
                                            <Line
                                                type="monotone"
                                                dataKey="value"
                                                stroke="url(#lineGradient)"
                                                strokeWidth={3}
                                                dot={{ fill: '#3b82f6', r: 4 }}
                                                activeDot={{ r: 6, fill: '#3b82f6' }}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>

                                {/* Simple Stats Grid */}

                            </motion.div>

                            {/* Compact Performance Dashboard */}
                            <motion.div
                                className="bg-gradient-to-br from-slate-50 to-gray-100 border border-gray-200 rounded-2xl shadow-md p-5 flex-1 flex flex-col"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-sm font-bold text-gray-800">Real-Time Metrics</h3>
                                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white rounded-lg border border-gray-200">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-xs font-semibold text-gray-700">Live</span>
                                    </div>
                                </div>

                                {/* Metrics Grid - 3 columns x 2 rows */}
                                <div className="grid grid-cols-3 gap-3 mb-4">
                                    {quickActions.map((action, i) => (
                                        <motion.div
                                            key={i}
                                            className="bg-white border border-gray-200 rounded-xl p-3 hover:shadow-md transition-all duration-300 group"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.08 }}
                                            whileHover={{ y: -2 }}
                                        >
                                            {/* Icon and Percentage */}
                                            <div className="flex items-center justify-between mb-2.5">
                                                <div className={`w-9 h-9 bg-gradient-to-br ${action.color} rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                                                    <action.icon className="w-4 h-4 text-white" />
                                                </div>
                                                <span className={`text-xl font-bold ${action.textColor}`}>
                                                    {action.percentage}%
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <p className="text-xs font-medium text-gray-600 mb-2">{action.title}</p>

                                            {/* Progress Bar */}
                                            <div className="relative w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                <motion.div
                                                    className={`absolute left-0 top-0 h-full bg-gradient-to-r ${action.color} rounded-full`}
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${action.percentage}%` }}
                                                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                                                />
                                            </div>

                                            {/* Status Indicator */}
                                            <div className="mt-2 flex items-center justify-end">
                                                {action.percentage >= 80 ? (
                                                    <div className="flex items-center gap-1">
                                                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                                                        <span className="text-[10px] text-green-600 font-semibold">Excellent</span>
                                                    </div>
                                                ) : action.percentage >= 50 ? (
                                                    <div className="flex items-center gap-1">
                                                        <Info className="w-3 h-3 text-blue-500" />
                                                        <span className="text-[10px] text-blue-600 font-semibold">Good</span>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center gap-1">
                                                        <AlertTriangle className="w-3 h-3 text-orange-500" />
                                                        <span className="text-[10px] text-orange-600 font-semibold">Monitor</span>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Network Statistics Overview Card */}
                                <motion.div
                                    className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-2 border-indigo-200 rounded-2xl p-4 mb-4"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                                            <Network className="w-4 h-4 text-indigo-600" />
                                            Network Statistics
                                        </h4>
                                        <div className="px-2.5 py-1 bg-indigo-600 text-white rounded-lg text-[10px] font-bold">
                                            LIVE DATA
                                        </div>
                                    </div>

                                    {/* Overall Health Bar */}
                                    <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-3">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <Shield className="w-4 h-4 text-indigo-600" />
                                                <span className="text-xs font-bold text-gray-700">Overall Network Health</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                                    {Math.round(quickActions.reduce((acc, item) => acc + item.percentage, 0) / quickActions.length)}%
                                                </span>
                                                <div className="px-2 py-0.5 bg-green-100 rounded text-[10px] font-bold text-green-700">
                                                    OPTIMAL
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative w-full h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                                            <motion.div
                                                className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${Math.round(quickActions.reduce((acc, item) => acc + item.percentage, 0) / quickActions.length)}%` }}
                                                transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                                            >
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"
                                                    animate={{
                                                        x: ['-100%', '100%']
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: "linear"
                                                    }}
                                                />
                                            </motion.div>
                                        </div>
                                        <div className="flex justify-between mt-2">
                                            <span className="text-[9px] text-gray-400 font-medium">0%</span>
                                            <span className="text-[9px] text-gray-400 font-medium">25%</span>
                                            <span className="text-[9px] text-gray-400 font-medium">50%</span>
                                            <span className="text-[9px] text-gray-400 font-medium">75%</span>
                                            <span className="text-[9px] text-gray-400 font-medium">100%</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Bottom Summary Card */}
                                <motion.div
                                    className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl p-4 text-white mt-auto"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                                <TrendingUp className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-bold">Overall Performance</span>
                                        </div>
                                        <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg">
                                            <span className="text-lg font-bold">
                                                {Math.round(quickActions.reduce((acc, item) => acc + item.percentage, 0) / quickActions.length)}%
                                            </span>
                                        </div>
                                    </div>

                                    {/* Mini Stats Row */}
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center">
                                            <p className="text-[10px] text-white/80 mb-0.5">Peak</p>
                                            <p className="text-sm font-bold">100%</p>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center">
                                            <p className="text-[10px] text-white/80 mb-0.5">Average</p>
                                            <p className="text-sm font-bold">
                                                {Math.round(quickActions.reduce((acc, item) => acc + item.percentage, 0) / quickActions.length)}%
                                            </p>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center">
                                            <p className="text-[10px] text-white/80 mb-0.5">Lowest</p>
                                            <p className="text-sm font-bold">
                                                {Math.min(...quickActions.map(a => a.percentage))}%
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* RIGHT SECTION - Single Card with Recent Activity & VoIP Advertisement */}
                    <motion.div
                        className="flex flex-col"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col h-full">
                            {/* Recent Activity Section */}
                            <div className="p-6 border-b border-gray-200">

                                <div className="space-y-3">
                                    {recentActivity.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            className={`flex items-center justify-between w-full px-4 py-3 rounded-xl ${item.bg} ${item.text}`}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <div className="flex items-center space-x-3">
                                                <item.icon className="w-5 h-5 opacity-90" />
                                                <span className="text-sm font-semibold truncate">
                                                    {item.title}
                                                </span>
                                            </div>

                                            {item.link && (
                                                <button className="text-xs font-semibold underline hover:opacity-70">
                                                    {item.link}
                                                </button>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* VoIP Website Development Advertisement */}
                            <div className="flex-1 p-6 flex flex-col">
                                <motion.div
                                    className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl overflow-hidden shadow-2xl h-full flex flex-col"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {/* Animated Background Circles */}
                                    <div className="absolute inset-0 overflow-hidden">
                                        <motion.div
                                            className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                opacity: [0.3, 0.5, 0.3],
                                            }}
                                            transition={{
                                                duration: 5,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />
                                        <motion.div
                                            className="absolute -bottom-16 -left-16 w-48 h-48 bg-purple-300/10 rounded-full blur-3xl"
                                            animate={{
                                                scale: [1, 1.3, 1],
                                                opacity: [0.2, 0.4, 0.2],
                                            }}
                                            transition={{
                                                duration: 6,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: 1
                                            }}
                                        />
                                    </div>

                                    {/* Top Badge */}
                                    <div className="relative z-10 p-6 pb-4">
                                        <div className="flex items-center justify-between mb-4">
                                            <motion.div
                                                className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full shadow-lg"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                                            >
                                                <Star className="w-4 h-4 fill-yellow-900" />
                                                <span className="text-xs font-bold">LIMITED OFFER</span>
                                            </motion.div>
                                            <motion.div
                                                className="px-3 py-1.5 bg-green-400/90 text-green-900 rounded-lg text-xs font-bold"
                                                animate={{
                                                    scale: [1, 1.05, 1],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                }}
                                            >
                                                SAVE 60%
                                            </motion.div>
                                        </div>

                                        {/* Main Heading */}
                                        <div className="text-center mb-4">
                                            <h3 className="text-2xl font-default text-white mb-2">
                                                Professional VoIP Website Development
                                            </h3>
                                            <p className="text-sm text-blue-100">
                                                Launch Your Telecom Business Online Today!
                                            </p>
                                        </div>
                                    </div>

                                    {/* Features Grid */}
                                    <div className="relative z-10 px-6 flex-1">
                                        <div className="grid grid-cols-2 gap-3 mb-4">
                                            {[
                                                { icon: Globe, label: 'Modern Design', color: 'bg-blue-500' },
                                                { icon: Smartphone, label: 'Mobile Responsive', color: 'bg-purple-500' },
                                                { icon: Zap, label: 'Fast Loading', color: 'bg-yellow-500' },
                                                { icon: Shield, label: 'Secure Hosting', color: 'bg-green-500' },
                                            ].map((feature, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 flex items-center gap-3"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.6 + i * 0.1 }}
                                                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                                                >
                                                    <div className={`w-10 h-10 ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                                        <feature.icon className="w-5 h-5 text-white" />
                                                    </div>
                                                    <span className="text-sm font-semibold text-white">{feature.label}</span>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Pricing Section */}
                                        <motion.div
                                            className="bg-white/15 backdrop-blur-lg border-2 border-white/30 rounded-2xl p-4 mb-4"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.8 }}
                                        >
                                            <div className="text-center">
                                                <p className="text-xs text-blue-100 uppercase tracking-wider mb-1">Starting at only</p>
                                                <div className="flex items-center justify-center gap-3 mb-2">
                                                    <span className="text-lg text-white/50 line-through font-semibold">$499</span>
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-5xl font-bold text-white">$199</span>
                                                        <span className="text-lg text-blue-100">/year</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-center gap-2 text-xs text-green-300 font-semibold">
                                                    <CheckCircle2 className="w-4 h-4" />
                                                    <span>Includes FREE Web Hosting</span>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* What's Included */}
                                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 mb-4">
                                            <p className="text-xs text-blue-100 font-semibold mb-2">Package Includes:</p>
                                            <div className="grid grid-cols-2 gap-2">
                                                {[
                                                    'Custom Design',
                                                    'SEO Optimized',
                                                    'SSL Certificate',
                                                    'Email Setup',
                                                    '24/7 Support',
                                                    'Free Updates'
                                                ].map((item, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className="flex items-center gap-2"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 1 + i * 0.1 }}
                                                    >
                                                        <CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0" />
                                                        <span className="text-xs text-white">{item}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <div className="relative z-10 p-6 pt-0">
                                        <motion.button
                                            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 py-4 rounded-xl font-bold text-base shadow-2xl flex items-center justify-center gap-2 hover:shadow-yellow-500/50 transition-all"
                                            whileHover={{ scale: 1.03, y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            animate={{
                                                boxShadow: [
                                                    '0 10px 30px rgba(251, 191, 36, 0.3)',
                                                    '0 10px 40px rgba(251, 191, 36, 0.5)',
                                                    '0 10px 30px rgba(251, 191, 36, 0.3)',
                                                ]
                                            }}
                                            transition={{
                                                boxShadow: {
                                                    duration: 2,
                                                    repeat: Infinity,
                                                }
                                            }}
                                        >
                                            <Zap className="w-5 h-5" />
                                            <span>Get Started Now</span>
                                            <motion.div
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ repeat: Infinity, duration: 1.5 }}
                                            >
                                                <ChevronRight className="w-5 h-5" />
                                            </motion.div>
                                        </motion.button>

                                        <p className="text-center text-xs text-blue-100 mt-3">
                                            ⚡ Limited slots available • Act now!
                                        </p>
                                    </div>

                                    {/* Bottom Wave Effect */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                                        <motion.div
                                            className="h-full bg-white/50"
                                            animate={{
                                                x: ['-100%', '100%']
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "linear"
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Live Updates - Horizontal Scroller with Clean Design */}
                <motion.div
                    className="bg-white border border-gray-200 rounded-2xl shadow-lg px-6 py-6 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Header with Navigation */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <h3 className="text-lg font-bold text-gray-800">Featured Updates & Offers</h3>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex gap-2">
                            <motion.button
                                onClick={() => scrollContainer('left')}
                                className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-200"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <ChevronLeft className="w-5 h-5 text-gray-600" />
                            </motion.button>
                            <motion.button
                                onClick={() => scrollContainer('right')}
                                className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-200"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <ChevronRight className="w-5 h-5 text-gray-600" />
                            </motion.button>
                        </div>
                    </div>

                    {/* Horizontal Scrolling Updates */}
                    <div
                        id="live-updates-scroll"
                        className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        {liveUpdates.map((item, i) => (
                            <motion.div
                                key={i}
                                className={`min-w-[400px] flex-shrink-0 relative p-5 rounded-xl border-2 ${item.borderColor} ${item.bg} shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer`}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -4 }}
                            >
                                <div className="flex items-start gap-4">
                                    {/* Icon */}
                                    <motion.div
                                        className={`w-12 h-12 ${item.iconBg} rounded-lg flex items-center justify-center flex-shrink-0 shadow-md`}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <item.icon className="w-6 h-6 text-white" />
                                    </motion.div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h4 className={`font-bold text-base ${item.color} mb-1`}>
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>

                                    {/* Star Rating */}
                                    <div className="flex gap-1 flex-shrink-0">
                                        {[...Array(item.rating)].map((_, idx) => (
                                            <Star
                                                key={idx}
                                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    );
};

export default Dashboard;