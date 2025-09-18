import React, { useState } from "react";

const LoginPage = () => {
  const [isMouseOver, setIMouseOver] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleMouseOver = () => {
    if (!formData.email || !formData.password) setIMouseOver(!isMouseOver);
  };
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-md px-6 pt-6 pb-18 relative">
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
          Login
        </h2>

        <form className="space-y-4">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700 text-sm"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700 text-sm"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className={`w-auto absolute ${
              isMouseOver ? "right-6" : "left-6"
            } bottom-8 bg-blue-600 text-white py-1.5 px-3 rounded-md text-sm hover:bg-blue-700 transition`}
            onMouseOver={handleMouseOver}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
