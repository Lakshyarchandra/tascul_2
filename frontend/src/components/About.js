import React from "react";

function About() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${require("../assets/bg.png")})` }}
    >
      <header className="text-center mt-8 px-4 md:px-0">
        <h1 className="text-[#7d624a] text-3xl font-bold mb-4 text-shadow-lg">
          Transforming the Future of Learning
        </h1>
        <p className="text-lg leading-relaxed text-gray-300 mt-8 max-w-3xl mx-auto">
          At Tascul, we are dedicated to reshaping the educational landscape
          through innovative technology. Our mission is to deliver
          transformative solutions that make learning more accessible, engaging,
          and impactful for all.
        </p>
      </header>

      <section className="mt-8 w-full max-w-4xl px-4 md:px-0">
        <h2 className="text-[#7d624a] text-2xl font-semibold mb-4 text-center text-shadow-sm">
          Our Vision
        </h2>
        <p className="text-gray-300 text-center text-lg leading-relaxed mb-4">
          At Tascul, we envision a future where education is tailored to meet
          the diverse needs of every individual. Our goal is to leverage
          technology to create personalized learning experiences that spark
          curiosity, drive personal growth, and promote lifelong learning.
        </p>
        <p className="text-gray-300 text-center text-lg leading-relaxed">
          We are committed to empowering businesses with advanced web
          development solutions and inspiring the next generation of developers
          by offering practical, hands-on experience.
        </p>
      </section>

      <section className="mt-8 w-full max-w-4xl px-4 md:px-0">
        <h2 className="text-[#7d624a] text-2xl font-semibold mb-4 text-center text-shadow-sm">
          Our Mission
        </h2>
        <div className="flex flex-wrap gap-6 justify-center mt-6">
          <div className="bg-[#252c48] p-6 rounded-lg shadow-xl w-[220px] text-center transform transition-all hover:translate-y-[-5px] hover:bg-opacity-20">
            <h3 className="text-[#7d624a] text-xl font-medium mb-2">Innovation</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              We are constantly pushing the boundaries of educational
              technology, embracing new ideas to foster growth and progress.
            </p>
          </div>

          <div className="bg-[#252c48] p-6 rounded-lg shadow-xl w-[220px] text-center transform transition-all hover:translate-y-[-5px] hover:bg-opacity-20">
            <h3 className="text-[#7d624a] text-xl font-medium mb-2">Inclusivity</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              We are dedicated to ensuring that learning opportunities are
              accessible to all, regardless of background or ability.
            </p>
          </div>

          <div className="bg-[#252c48] p-6 rounded-lg shadow-xl w-[220px] text-center transform transition-all hover:translate-y-[-5px] hover:bg-opacity-20">
            <h3 className="text-[#7d624a] text-xl font-medium mb-2">Collaboration</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              By collaborating with educators, learners, and industry leaders,
              we ensure our solutions address real-world challenges and deliver
              meaningful outcomes.
            </p>
          </div>

          <div className="bg-[#252c48] p-6 rounded-lg shadow-xl w-[220px] mb-6 text-center transform transition-all hover:translate-y-[-5px] hover:bg-opacity-20">
            <h3 className="text-[#7d624a] text-xl font-medium mb-2">Excellence</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              We are committed to upholding the highest standards in every
              aspect of our work, from the quality of our products to the
              support we provide our users.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
