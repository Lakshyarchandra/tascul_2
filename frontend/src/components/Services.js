import React from 'react';

const Services = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${require("../assets/bg.png")})` }} 
    >
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-[#252c48] p-6 rounded-lg shadow-xl w-[220px] text-center transform transition-all hover:translate-y-[-5px] hover:bg-opacity-20">
      <h3 className="text-[#7d624a] text-xl font-medium mb-2">Innovation</h3>
          <h2 className="text-xl font-semibold mb-2 text-[#a17ebd]">Web Development Solutions</h2>
          <p className="text-gray-300 text-sm mb-2">
            We offer tailored web development services to build modern, responsive, and scalable websites that boost your online presence.
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-medium">Service Code:</span> WD001
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-medium">Price:</span> Starts at ₹10,000
          </p>
        </div>

        <div className="bg-[#252c48] p-6 rounded-lg shadow-xl w-[220px] text-center transform transition-all hover:translate-y-[-5px] hover:bg-opacity-20">
            <h3 className="text-[#7d624a] text-xl font-medium mb-2">Innovation</h3>
          <h2 className="text-xl font-semibold mb-2 text-[#a17ebd]">Counseling and Wellbeing</h2>
          <p className="text-gray-300 text-sm mb-2">
            Our professional counseling services provide support to students and professionals seeking career advice, mental well-being, and personal growth.
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-medium">Service Code:</span> CS002
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-medium">Price:</span> ₹799
          </p>
        </div>

        <div className="bg-[#252c48] p-6 rounded-lg shadow-xl w-[220px] text-center transform transition-all hover:translate-y-[-5px] hover:bg-opacity-20">
            <h3 className="text-[#7d624a] text-xl font-medium mb-2">Innovation</h3>
          <h2 className="text-xl font-semibold mb-2 text-[#a17ebd]">Guidance and Mentorship</h2>
          <p className="text-gray-300 text-sm mb-2">
            Through our mentorship programs, we guide individuals through the complexities of career choices, offering personalized advice and actionable strategies.
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-medium">Service Code:</span> GM003
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-medium">Price:</span> ₹1,500
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;
