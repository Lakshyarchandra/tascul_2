import React, { useState, useEffect, useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/Authcontext";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      } bg-gradient-to-r from-[#0b0e1a] via-[#1f263d] to-[#1f263d] text-white p-4 shadow-md sticky top-0 w-full z-50 transition-all duration-300 ease-in-out`}
      style={{
        backgroundColor: "#0b0e1a",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="Tascul Logo" className="h-10" />
        </Link>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl"
          >
            {isMenuOpen ? "×" : "☰"}
          </button>
        </div>

        {user ? (
          <div className="flex gap-6">
            <button
              onClick={logout}
              className="text-white text-lg px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#ff7e5f] hover:to-[#feb47b] transition-all duration-300 ease-in-out"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className={`hidden md:flex gap-6 ${isMenuOpen ? 'flex' : 'hidden'} md:block`}>
            <Link
              to="/"
              className="text-white text-lg px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#058c6a] hover:to-[#1e3a8a] transition-all duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white text-lg px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#a83279] hover:to-[#4a90e2] transition-all duration-300 ease-in-out"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-white text-lg px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#6a11cb] hover:to-[#2575fc] transition-all duration-300 ease-in-out"
            >
              Services
            </Link>

            <Link
              to="/ourtestimonials"
              className="text-white text-lg px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#8a2be2] hover:to-[#4b0082] transition-all duration-300 ease-in-out"
            >
              Testimonials
            </Link>
            <Link
              to="/signin"
              className="text-white text-lg px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#ff7e5f] hover:to-[#feb47b] transition-all duration-300 ease-in-out"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4">
          <Link
            to="/"
            className="text-white text-lg px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#058c6a] hover:to-[#1e3a8a] transition-all duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white text-lg px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#a83279] hover:to-[#4a90e2] transition-all duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-white text-lg px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#6a11cb] hover:to-[#2575fc] transition-all duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to="/ourtestimonials"
            className="text-white text-lg px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#8a2be2] hover:to-[#4b0082] transition-all duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Testimonials
          </Link>
          <Link
            to="/signin"
            className="text-white text-lg px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#ff7e5f] hover:to-[#feb47b] transition-all duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
