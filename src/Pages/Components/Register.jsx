import React from "react";

function Register() {
  return (
    <div className="max-w-sm mx-auto mt-1 p-[10px] min-h-screen">
      <h3 className="text-2xl text-[#1D2226] font-medium mb-4 text-left">
        Create your <br /> PopX account
      </h3>
      <p className="text-left text-[#1D2226]/40 mb-6">
        Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
      </p>
      <form className="space-y-6">
        {/* Full Name Field */}
        <div className="relative">
          <label
            htmlFor="fullName"
            className="absolute left-4 -top-2.5 bg-white px-1 text-[#6C25FF] text-sm transition-all duration-200 peer-focus:-top-2.5 peer-focus:text-[#6C25FF] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[#6C25FF]"
          >
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            required
            placeholder="Enter your full name"
            className="w-full border border-gray-300 rounded-md px-3 py-3 text-gray-900 focus:outline-none focus:border-blue-500 peer"
          />
        </div>

        {/* Phone Number Field */}
        <div className="relative">
          <label
            htmlFor="phoneNumber"
            className="absolute left-4 -top-2.5 bg-white px-1 text-[#6C25FF] text-sm transition-all duration-200 peer-focus:-top-2.5 peer-focus:text-[#6C25FF] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[#6C25FF]"
          >
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="tel"
            required
            placeholder="Enter your phone number"
            className="w-full border border-gray-300 rounded-md px-3 py-3 text-gray-900 focus:outline-none focus:border-blue-500 peer"
          />
        </div>

        {/* Email Address Field */}
        <div className="relative">
          <label
            htmlFor="email"
            className="absolute left-4 -top-2.5 bg-white px-1 text-[#6C25FF] text-sm transition-all duration-200 peer-focus:-top-2.5 peer-focus:text-[#6C25FF] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[#6C25FF]"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md px-3 py-3 text-gray-900 focus:outline-none focus:border-blue-500 peer"
          />
        </div>

        {/* Password Field */}
        <div className="relative">
          <label
            htmlFor="password"
            className="absolute left-4 -top-2.5 bg-white px-1 text-[#6C25FF] text-sm transition-all duration-200 peer-focus:-top-2.5 peer-focus:text-[#6C25FF] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[#6C25FF]"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-md px-3 py-3 text-gray-900 focus:outline-none focus:border-blue-500 peer"
          />
        </div>

        {/* Company Name Field */}
        <div className="relative">
          <label
            htmlFor="companyName"
            className="absolute left-4 -top-2.5 bg-white px-1 text-[#6C25FF] text-sm transition-all duration-200 peer-focus:-top-2.5 peer-focus:text-[#6C25FF] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[#6C25FF]"
          >
            Company Name
          </label>
          <input
            id="companyName"
            type="text"
            required
            placeholder="Enter your company name"
            className="w-full border border-gray-300 rounded-md px-3 py-3 text-gray-900 focus:outline-none focus:border-blue-500 peer"
          />
        </div>

        {/* Are you an agency? Field */}
        <div className="space-y-2">
          <label className="text-[#6C25FF] text-sm font-medium">
            Are you an agency?
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                required
                className="mr-2 text-[#6C25FF] focus:ring-[#6C25FF] scale-125"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="isAgency"
                value="no"
                className="mr-2 text-[#6C25FF] focus:ring-[#6C25FF] scale-125"
              />
              No
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#6C25FF] text-white py-2 rounded-md hover:bg-[#5A1FD6] transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Register;
