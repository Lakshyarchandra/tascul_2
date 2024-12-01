import React, { useEffect, useState } from "react";
import axios from "axios";

const OurTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {

    axios
      .get("http://localhost:5000/api/reviews/accepted")
      .then((response) => {
        setTestimonials(response.data);
      })
      .catch((err) => {
        console.error("Error fetching testimonials:", err.response?.data || err.message);
        setError("Failed to load testimonials. Please try again later.");
      });
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${require("../assets/bg.png")})` }}
    >
      <div className="p-10 px-4 md:px-0 max-w-screen-xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Our Testimonials</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {testimonials.length > 0 ? (
            testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#252c48] p-6 rounded-lg shadow-xl text-center transform transition-all hover:translate-y-[-5px] hover:bg-opacity-20"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#a17ebd]">{testimonial.name}</h3>
                <p className="text-gray-300 text-sm mb-2">{testimonial.review}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-300 text-center">No testimonials available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurTestimonials;
