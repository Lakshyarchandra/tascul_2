import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/Authcontext";

const SignIn = () => {
  const { login } = useContext(AuthContext);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("intern");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(id, password, role);
  };

  return (
     <div
      className="min-h-screen flex flex-col items-center justify-center text-white bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${require("../assets/bg.png")})` }}
    >
      <div className="relative w-full max-w-md bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-lg text-center border border-gray-800">
        {/* Neon Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-lg blur-xl opacity-30 -z-10"></div>

        <h1 className="text-2xl font-bold text-white mb-6">Welcome Back!</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Role Selection */}
          <div>
            <select
              className="w-full p-3 bg-transparent border border-gray-700 rounded-lg text-gray-500 placeholder-gray-500 hover:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-400 transition-all z-10 relative"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="intern">Intern</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* ID Input */}
          <input
            type="text"
            placeholder="Enter Your ID"
            className="w-full p-3 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-500 hover:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-400 transition-all z-10 relative"
            value={id}
            onChange={(e) => setId(e.target.value)}
            onFocus={(e) => e.target.select()} // Only applies to <input>
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Enter Your Password"
            className="w-full p-3 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-500 hover:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-400 transition-all z-10 relative"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={(e) => e.target.select()} // Only applies to <input>
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white font-bold rounded-lg shadow-md transform hover:scale-105 hover:shadow-lg transition-all z-10"
          >
            Sign In
          </button>
        </form>

        {/* Sign-Up Option */}
        <div className="mt-6">
          <p className="text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-500 hover:text-purple-400 font-bold transition-all z-10 relative"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
