import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0b0e1a] via-[#1f263d] to-[#292f45] text-white py-8 text-center relative w-full shadow-lg">
      <p className="text-base text-[#b0b4c2] leading-6 m-0">© 2024 Tascul. All Rights Reserved.</p>
      <div className="mt-6 flex justify-center gap-6">
        <a
          href="https://x.com/i/flow/login?redirect_after_login=%2Ftascul_official"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-[#7d624a] text-2xl transition-transform duration-300 ease-in-out hover:text-[#e5a600] hover:scale-110 hover:shadow-md active:scale-105"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/tasculofficial/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-[#7d624a] text-2xl transition-transform duration-300 ease-in-out hover:text-[#e5a600] hover:scale-110 hover:shadow-md active:scale-105"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/tascul/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-[#7d624a] text-2xl transition-transform duration-300 ease-in-out hover:text-[#e5a600] hover:scale-110 hover:shadow-md active:scale-105"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
