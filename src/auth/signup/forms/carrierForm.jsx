import React, { useState } from 'react';
import { Eye, EyeOff, Rocket, X } from 'lucide-react';
import { CarrierValidateRegisterForm, submitRegistration } from '../Validation/carrierFormValidation';
import { useNavigate } from 'react-router-dom';

export default function CareersRegistration() {
  const Navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const [companyDetails, setCompanyDetails] = useState({
    companyName: "",
    companyEmail: "",
    contactPerson: "",
    country: "",
    companyPhone: "",
    address: "",
    companyWebsite: "",
  });

  const [userDetails, setUserDetails] = useState({
    userFirstname: "",
    userLastname: "",
    username: "",
    userEmail: "",
    userMobile: "",
    password: "",
    confirmPassword: "",
    designation: "",
  });

  const [technicalDetails, setTechnicalDetails] = useState({
    supportEmail: "",
    sipPort: "",
    switchIps: [{ ip: "", status: "" }],
  });

  const handleCompanyChange = (field, value) => {
    setCompanyDetails((prev) => ({ ...prev, [field]: value }));
    // Clear error when user types
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleUserChange = (field, value) => {
    setUserDetails((prev) => ({ ...prev, [field]: value }));
    // Clear error when user types
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleTechnicalChange = (field, value) => {
    setTechnicalDetails((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSwitchIpChange = (index, value) => {
    const updatedIps = [...technicalDetails.switchIps];
    updatedIps[index].ip = value;
    setTechnicalDetails((prev) => ({ ...prev, switchIps: updatedIps }));
    // Clear error when user types
    if (errors[`switchIp${index}`]) {
      setErrors(prev => ({ ...prev, [`switchIp${index}`]: undefined }));
    }
  };

  const handleRemoveIp = (index) => {
    if (technicalDetails.switchIps.length > 1) {
      const updatedIps = technicalDetails.switchIps.filter((_, i) => i !== index);
      setTechnicalDetails(prev => ({ ...prev, switchIps: updatedIps }));

      // Clear any errors for the removed IP
      const newErrors = { ...errors };
      delete newErrors[`switchIp${index}`];
      // Renumber remaining IP errors
      Object.keys(newErrors).forEach(key => {
        if (key.startsWith('switchIp') && parseInt(key.replace('switchIp', '')) > index) {
          const newKey = `switchIp${parseInt(key.replace('switchIp', '')) - 1}`;
          newErrors[newKey] = newErrors[key];
          delete newErrors[key];
        }
      });
      setErrors(newErrors);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({}); // Clear previous errors

    // Validate form
    const validationErrors = CarrierValidateRegisterForm(companyDetails, userDetails, technicalDetails);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const formData = {
        company: companyDetails,
        user: userDetails,
        technical: technicalDetails
      };

      await submitRegistration(formData);
      setSubmitSuccess(true);
      Navigate('/customer/login')
    } catch (error) {
      console.log("error", error);

      if (error.response?.data?.duplicateFields) {
        // Handle duplicate fields error specifically
        setErrors(prev => ({
          ...prev,
          ...error.response.data.duplicateFields,
          form: 'Please correct the duplicate fields below'
        }));
      } else {
        setErrors(prev => ({
          ...prev,
          form: error.message || 'Registration failed. Please try again.'
        }));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen mt-[100px] bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 p-6 flex items-center justify-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-teal-400 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative icons floating */}
      <div className="absolute top-8 left-8 text-cyan-300 opacity-30">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      </div>
      <div className="absolute bottom-12 left-1/4 text-emerald-300 opacity-30">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="absolute top-1/3 right-12 text-teal-300 opacity-30">
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      </div>
      <div className="absolute bottom-1/4 right-1/3 text-cyan-300 opacity-30">
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
      </div>
      <div className="absolute top-20 right-1/4 text-emerald-300 opacity-30">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      </div>

      {/* Main content container */}
      <div className="relative max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Rocket className="w-10 h-10 text-yellow-500" />
            <h1 className="text-3xl font-default text-transparent bg-clip-text bg-yellow-500">
              Our Careers
            </h1>
            <svg className="w-10 h-10 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-yellow-500 text-lg">Your Gateway to Global Connectivity & Innovation</p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Company Details Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              <h2 className="text-xl font-bold text-gray-800">Company Details</h2>
            </div>

            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  value={companyDetails.companyName}
                  onChange={(e) => handleCompanyChange("companyName", e.target.value)}
                  placeholder="Company Name"
                  className={`w-full px-4 py-3 ${errors.companyName ? 'border-red-500' : 'border-gray-200'
                    } bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all`}
                />
                {errors && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    {errors.form?.includes("companyName")
                      ? (
                        <>
                          <X className="w-3 h-3" />
                          <span>This company name is already registered</span>
                        </>
                      )
                      : errors.companyName
                    }
                  </p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  value={companyDetails.companyEmail}
                  onChange={(e) => handleCompanyChange("companyEmail", e.target.value)}
                  className={`w-full px-4 py-3 ${errors.companyEmail ? 'border-red-500' : 'border-gray-200'
                    } bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all`}
                  placeholder="Company Email"
                />
                {errors && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    {errors.form?.includes("companyEmail") ? (
                      <>
                        <X className="w-3 h-3" />
                        <span>This email is already registered</span>
                      </>
                    ) : (
                      errors.companyEmail
                    )}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  value={companyDetails.contactPerson}
                  onChange={(e) => handleCompanyChange("contactPerson", e.target.value)}
                  className={`w-full px-4 py-3 ${errors.contactPerson ? 'border-red-500' : 'border-gray-200'
                    } bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all`}
                  placeholder="Contact Person"
                />
                {errors.contactPerson && <p className="text-red-500 text-xs mt-1">{errors.contactPerson}</p>}
              </div>
              <div>
                <input
                  type="text"
                  value={companyDetails.country}
                  onChange={(e) => handleCompanyChange("country", e.target.value)}
                  className={`w-full px-4 py-3 ${errors.country ? 'border-red-500' : 'border-gray-200'
                    } bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all`}
                  placeholder="Country"
                />
                {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
              </div>
              <input
                type="tel"
                rows="3"
                value={companyDetails.companyPhone}
                onChange={(e) => handleCompanyChange("companyPhone", e.target.value)}
                className={`w-full px-4 py-3 ${errors.companyPhone ? 'border-red-500' : 'border-gray-200'
                  } bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all`}
                placeholder="Company Phone"
              />

              <textarea
                value={companyDetails.address}
                onChange={(e) => handleCompanyChange("address", e.target.value)}
                placeholder="Address"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
              />
              <input
                value={companyDetails.companyWebsite}
                onChange={(e) => handleCompanyChange("companyWebsite", e.target.value)}
                type="url"
                placeholder="Company Website"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* User Details Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
              <h2 className="text-xl font-bold text-gray-800">User Details</h2>
            </div>

            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  value={userDetails.userFirstname}
                  onChange={(e) => handleUserChange("userFirstname", e.target.value)}
                  className={`w-full px-4 py-3 ${errors.userFirstname ? 'border-red-500' : 'border-gray-200'} bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all`}
                  placeholder="First Name"
                />
                {errors.userFirstname && <p className="text-red-500 text-xs mt-1">{errors.userFirstname}</p>}
              </div>
              <div>
                <input
                  type="text"
                  value={userDetails.userLastname}
                  onChange={(e) => handleUserChange("userLastname", e.target.value)}
                  className={`w-full px-4 py-3 ${errors.userLastname ? 'border-red-500' : 'border-gray-200'} bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all`}
                  placeholder="Last Name"
                />
                {errors.userLastname && <p className="text-red-500 text-xs mt-1">{errors.userLastname}</p>}
              </div>
              <div>
                <input
                  type="text"
                  value={userDetails.username}
                  onChange={(e) => handleUserChange("username", e.target.value)}
                  className={`w-full px-4 py-3 ${errors.username ? 'border-red-500' : 'border-gray-200'} bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all`}
                  placeholder="Username"
                />
                {errors && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    {errors?.form?.includes("username") ? (
                      <>
                        <X className="w-3 h-3" />
                        <span>This username is not available</span>
                      </>
                    ) : (
                      errors.username
                    )}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  value={userDetails.userEmail}
                  onChange={(e) => handleUserChange("userEmail", e.target.value)}
                  className={`w-full px-4 py-3 ${errors.userEmail ? 'border-red-500' : 'border-gray-200'} bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all`}
                  placeholder="Email"
                />
                {errors && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    {errors?.form?.includes("userEmail") ? (
                      <>
                        <X className="w-3 h-3" />
                        <span>This email is already in use</span>
                      </>
                    ) : (
                      errors.userEmail
                    )}
                  </p>
                )}
              </div>

              <input
                type="tel"
                value={userDetails.userMobile}
                onChange={(e) => handleUserChange("userMobile", e.target.value)}
                className={`w-full px-4 py-3 ${errors.userMobile ? 'border-red-500' : 'border-gray-200'} bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all`}
                placeholder="Mobile"
              />
              <div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={userDetails.password}
                    onChange={(e) => handleUserChange("password", e.target.value)}
                    placeholder="Password"
                    className={`w-full px-4 py-3 ${errors.password ? 'border-red-500' : 'border-gray-200'} bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all pr-12`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>
              <div>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={userDetails.confirmPassword}
                    onChange={(e) => handleUserChange("confirmPassword", e.target.value)}
                    placeholder="Confirm Password"
                    className={`w-full px-4 py-3 bg-gray-50 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-200'} border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all pr-12`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
              </div>
              <div>
                <input
                  type="text"
                  value={userDetails.designation}
                  onChange={(e) => handleUserChange("designation", e.target.value)}
                  placeholder="Designation (e.g., Project Manager)"
                  className={`w-full px-4 py-3 bg-gray-50 ${errors.designation ? 'border-red-500' : 'border-gray-200'} border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all pr-12`}
                />
                {errors.designation && <p className="text-red-500 text-xs mt-1">{errors.designation}</p>}
              </div>
            </div>
          </div>

          {/* Technical Details Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
              <h2 className="text-xl font-bold text-gray-800">Technical Details</h2>
            </div>

            <div className="space-y-4">
              <div>
                <input
                  type="email"
                  value={technicalDetails.supportEmail}
                  onChange={(e) => handleTechnicalChange("supportEmail", e.target.value)}
                  placeholder="Support Email"
                  className={`w-full px-4 py-3 ${errors.supportEmail ? 'border-red-500' : 'border-gray-200'} bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all`}
                />
                {errors.supportEmail && <p className="text-red-500 text-xs mt-1">{errors.supportEmail}</p>}
              </div>
              <div>
                <input
                  type="text"
                  value={technicalDetails.sipPort}
                  onChange={(e) => handleTechnicalChange("sipPort", e.target.value)}
                  className={`w-full px-4 py-3 ${errors.sipPort ? 'border-red-500' : 'border-gray-200'} bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all`}
                  placeholder="SIP Port"
                />
                {errors.sipPort && <p className="text-red-500 text-xs mt-1">{errors.sipPort}</p>}

              </div>

              {technicalDetails.switchIps.map((switchIp, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={switchIp.ip}
                      onChange={(e) => handleSwitchIpChange(index, e.target.value)}
                      className={`w-full px-4  ${errors[`switchIp${index}`] ? 'border-red-500' : 'border-gray-200'} py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all`}
                      placeholder={`Switch IP ${index + 1}`}
                    />
                    {technicalDetails.switchIps.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveIp(index)}
                        className="p-2 text-red-500 hover:text-red-700 transition-colors"
                        aria-label="Remove IP"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  {errors[`switchIp${index}`] && <p className="text-red-500 text-xs mt-1">{errors[`switchIp${index}`]}</p>}
                </div>
              ))}

              <button
                type="button"
                onClick={() => setTechnicalDetails((prev) => ({ ...prev, switchIps: [...prev.switchIps, { ip: "", status: "active" }] }))}
                className="w-full py-2 text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors"
              >
                + Add Switch IP
              </button>
              <div className="mt-6 pt-4 border-t border-gray-100">
                {submitSuccess ? (
                  <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    Registration successful! We'll contact you soon.
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Processing...' : '🚀 Submit Registration'}
                  </button>
                )}

                <div className="flex justify-center gap-4 mt-6">
                  <a href="#" className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-cyan-100 hover:bg-cyan-200 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-pink-100 hover:bg-pink-200 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.176-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S15.523 0 10 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
