import React, { useState } from "react";
import { Link } from "react-router-dom";
import headerImage from "../assets/headerimg.png";
import videoSrc from "../assets/ProfileVideo.mp4";
import videoThumbnail from "../assets/thumbnail.png";

function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleVideoModal = () => {
    setIsVideoOpen(!isVideoOpen);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${require("../assets/bg.png")})` }}
    >
      <header className="w-full flex flex-col md:flex-row items-center justify-start py-8 md:py-12">
        <div className="header-content text-left md:mr-64 px-4 md:px-0">
          <h1 className="text-3xl md:text-5xl font-bold text-[#7d624a] mb-4 ml-4 drop-shadow-lg">Welcome to TasCul</h1>
          <p className="text-base md:text-lg text-[#e0e4f1] max-w-xl mb-8 ml-4 leading-7">
            At Tascul, we are committed to delivering exceptional web development services. As a trusted partner with extensive technical
            expertise and industry insight, we enable our clients to stay ahead by proactively addressing challenges. Our tailored web solutions
            give businesses a distinct competitive edge, enhancing their digital presence and driving sustained online success.
          </p>
        
          <Link 
            to="/signin"
            className="cta-button bg-[#7d624a] text-[#1f263d] py-2 px-6 ml-4 text-lg font-semibold rounded-md shadow-lg transform transition duration-200 hover:bg-[#024145] hover:text-white"
          >
            Get Started
          </Link>
        </div>
        <img src={headerImage} alt="Description" className="header-image mt-6 md:mt-0 md:ml-8 w-72 md:w-96" />
      </header>

      <section className="video-section my-8 w-full px-4 md:w-4/5">
        <h2 className="text-3xl font-semibold text-center text-[#7d624a]">Know About Us</h2>
        <div className="video-card flex flex-col md:flex-row items-center justify-center bg-[#1f263d] rounded-lg p-4 shadow-lg mt-4 max-w-3xl mx-auto">
          <div className="video-thumbnail relative cursor-pointer" onClick={toggleVideoModal}>
            <img src={videoThumbnail} alt="Video Thumbnail" className="w-64 rounded-lg" />
            <div className="play-button absolute inset-0 flex items-center justify-center text-4xl text-white pointer-events-none">▶</div>
          </div>
          <div className="video-description text-left mt-4 md:mt-0 md:ml-4 max-w-xs">
            <h3 className="text-[#7d624a] text-xl mb-3">Tascul: Growing Together</h3>
            <ul className="list-disc pl-5">
              <li>Committed to excellence and innovation.</li>
              <li>A creative hub for fostering and growing together.</li>
              <li>Offering workshops and mentorship to enhance both personal and professional skills.</li>
              <li>Prioritizing long-term achievements through responsible business practices.</li>
              <li>Collaborating with top organizations to deliver impactful solutions.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="features mt-8 px-4">
        <h2 className="text-3xl font-semibold text-center text-[#7d624a]">Why Choose Tascul?</h2>
        <div className="feature-cards flex flex-wrap gap-6 justify-center mt-6">
          {["MSME Certified", "Experienced Team", "Client Satisfaction", "Proven Track Record", "Transparent Communication"].map((title, index) => (
            <div key={index} className="feature-card bg-[#1f263d] p-6 rounded-xl shadow-lg text-center max-w-xs transition-transform transform hover:translate-y-[-8px] hover:shadow-2xl">
              <h3 className="text-[#7d624a] text-xl mb-3">{title}</h3>
              <p className="text-[#b0b4c2]">{index % 2 === 0 ? "We are recognized for our commitment to excellence in service." : "We prioritize our clients' needs and ensure their satisfaction with our services."}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="faq-section mt-12 p-6 mb-8 bg-[#1f263d] rounded-xl shadow-lg max-w-4xl w-full">
        <h2 className="text-3xl font-semibold text-center text-[#7d624a] mb-6">Frequently Asked Questions</h2>
        {[ 
          { question: "What services do you offer?", answer: "We provide web and mobile app development, UI/UX design, and custom software solutions tailored to EdTech needs." },
          { question: "What is your pricing structure?", answer: "Our pricing depends on the project scope, complexity, and timeline. Contact us for a detailed quote." },
          { question: "Do you provide maintenance after project completion?", answer: "Yes, we offer post-launch support and maintenance packages to ensure your platform performs optimally." },
          { question: "How long does it take to complete a project?", answer: "Project timelines vary based on requirements. Smaller projects may take 4-6 weeks, while complex apps may take months." },
          { question: "Do you offer custom designs?", answer: "Yes, we provide custom UI/UX designs tailored to your brand and user experience goals." },
          { question: "What technology do you use for development?", answer: "We typically utilize ReactJS alongside Express as part of a full MERN stack architecture." },
        ].map((faq, index) => (
          <div key={index} className={`faq-card bg-[#252c40] p-4 rounded-md mb-4 cursor-pointer transition-transform transform hover:translate-y-[-3px] hover:bg-[#30394f]`}>
            <h3 className="faq-question text-[#7d624a] text-lg flex justify-between items-center" onClick={() => toggleFaq(index)}>
              {faq.question}
              <span className="faq-toggle text-xl">{openFaq === index ? "➖" : "➕"}</span>
            </h3>
            {openFaq === index && <p className="faq-answer text-[#d1d5db] mt-2">{faq.answer}</p>}
          </div>
        ))}
      </section>

      {isVideoOpen && (
        <div className="video-modal fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center" onClick={toggleVideoModal}>
          <video className="video-modal-content w-4/5 max-w-3xl" src={videoSrc} controls autoPlay onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}

export default Home;
