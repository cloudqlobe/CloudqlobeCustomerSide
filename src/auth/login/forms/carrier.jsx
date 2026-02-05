import React, { useState } from 'react';
import { Lightbulb, Briefcase, Megaphone, Award, Eye, EyeOff } from 'lucide-react';
import { useLoader } from '../../../context/LoaderContext/page';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../utils/axiosinstance';

export default function CarrierLoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { isLoading, setIsLoading } = useLoader();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      let response;

      response = await axiosInstance.post("/api/vendor/login", { username, password });

      sessionStorage.setItem("Ven-Temp-Au-To", response.data.tempAuthToken);
      navigate("/vendor/verify-token");

    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.message ||
        "Login failed. Please check your credentials and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: Lightbulb,
      title: 'Smart Product Strategy',
      description: 'Data-driven product ideas that convert visitors into buyers.',
      bgColor: 'bg-orange-500',
    },
    {
      icon: Briefcase,
      title: 'Store Planning',
      description: 'Well-structured online stores designed for seamless shopping.',
      bgColor: 'bg-purple-500',
    },
    {
      icon: Megaphone,
      title: 'E-commerce Marketing',
      description: 'Targeted marketing campaigns that drive traffic and sales.',
      bgColor: 'bg-cyan-500',
    },
    {
      icon: Award,
      title: 'Sales Growth',
      description: 'Optimized strategies focused on increasing revenue and loyalty.',
      bgColor: 'bg-green-500',
    }
  ];


  return (
    <div className="min-h-screen flex mt-[100px]">
      {/* Left Side - Features Section */}
      <div className="w-1/2 bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 p-16 flex items-center justify-center">
        <div className="w-full max-w-2xl space-y-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-0 bg-white rounded-xl overflow-hidden shadow-lg"
              >
                {/* Icon Section */}
                <div className={`${feature.bgColor} w-20 flex-shrink-0 flex items-center justify-center p-6`}>
                  <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>

                {/* Content Section */}
                <div className="flex-1 p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-1/2 bg-gray-50 p-16 flex items-center justify-center">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-baseline justify-between mb-2">
              <h1 className="text-4xl font-bold text-gray-900">Login</h1>

            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username/Customer ID Input */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username / Customer ID
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username or customer ID"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Links Row */}
            <div className="flex items-center justify-between text-sm">
              <a
                href="/vendor/forgot-password"
                className="font-medium text-yellow-600 hover:text-yellow-700"
              >
                Forgot password?
              </a>
              <a
                href="/customer/register"
                className="font-medium text-yellow-600 hover:text-yellow-700"
              >
                Don't have an account? Register
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-yellow-400 text-white py-3 rounded-lg font-semibold hover:bg-yellow-500 transition flex justify-center items-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
