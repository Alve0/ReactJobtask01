import React from "react";

function Login() {
  return (
    <div className="max-w-sm mx-auto mt-1 p-[10px] min-h-screen">
      <h3 className="text-2xl text-[#1D2226] font-medium mb-4 text-left">
        Sign in to your <br /> PopX account
      </h3>
      <p className="text-left text-[#1D2226]/40 mb-6">
        Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
      </p>
      <form className="space-y-6">
        {/* Email Field */}
        <div className="relative">
          <label
            htmlFor="email"
            className="absolute left-4 -top-2.5 bg-white px-1 text-[#6C25FF] text-sm transition-all duration-200 peer-focus:-top-2.5 peer-focus:text-[#6C25FF] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[#6C25FF]"
          >
            Email address
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

        <button
          type="submit"
          className="w-full bg-[#CBCBCB] text-white py-2 rounded-md hover:bg-[#B0B0B0] transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
