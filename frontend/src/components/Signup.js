import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    candidateSerial: "",
    domain: "",
    dob: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );
      if (response.data.message) {
        alert("Registration Completed"); // Alert after successful registration
        navigate("/signin"); // Redirect to the SignIn page after a short delay
      }
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${require("../assets/bg.png")})` }}
    >
      <div className="relative w-full max-w-md bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-lg text-center border border-gray-800">
        {/* Neon Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-lg blur-xl opacity-30 -z-10"></div>

        <h1 className="text-2xl font-bold text-white mb-6">Create an Account</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="w-full p-3 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-500 hover:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-400 transition-all z-10 relative"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* Candidate Serial Input */}
          <input
            type="text"
            name="candidateSerial"
            placeholder="Enter Your Candidate Serial"
            className="w-full p-3 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-500 hover:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-400 transition-all z-10 relative"
            value={formData.candidateSerial}
            onChange={handleChange}
            required
          />

          {/* Domain Input */}
          <input
            type="text"
            name="domain"
            placeholder="Enter Your Domain"
            className="w-full p-3 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-500 hover:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-400 transition-all z-10 relative"
            value={formData.domain}
            onChange={handleChange}
            required
          />

          {/* Email Input */}
          <input
            type="text"
            name="email"
            placeholder="Enter Your Email"
            className="w-full p-3 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-500 hover:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-400 transition-all z-10 relative"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Password Input */}
          <input
            type="password"
            name="password"
            placeholder="Create a Password"
            className="w-full p-3 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-500 hover:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-400 transition-all z-10 relative"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white font-bold rounded-lg shadow-md transform hover:scale-105 hover:shadow-lg transition-all z-10"
          >
            Sign Up
          </button>
        </form>

        {/* Redirect to Sign-In */}
        <div className="mt-6">
          <p className="text-gray-400">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/signin")}
              className="text-blue-500 hover:text-purple-400 font-bold transition-all cursor-pointer"
            >
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
