import React from "react";
import serviceImg from "../assets/service.jpeg";

import Hero from "../components/ui/Hero";
import Features from "../components/ui/Features";
import FeaturesProduct from "../components/ui/FeaturesProduct";
import Footer from "@/components/ui/Footer";
import { Link } from "react-router-dom";
const Home = () => {
  const services = [
    {
      title: "Space Planning",
      desc: "Optimizing layout for maximum functionality and aesthetic flow.",
      icon: "📐",
    },
    {
      title: "Custom Furniture Design",
      desc: "Creating unique pieces tailored specifically to your space and taste.",
      icon: "🖌️",
    },
    {
      title: "Turnkey Execution",
      desc: "Hassle-free project management from start to finish.",
      icon: "💼",
    },
  ];
  const steps = [
    {
      number: "01",
      title: "Consultation",
      desc: "Discussing your vision, functional needs, and design aspirations.",
    },
    {
      number: "02",
      title: "Design Concept",
      desc: "Developing tailored floor plans, moodboards, and 3D renderings.",
    },
    {
      number: "03",
      title: "Refinement",
      desc: "Selecting materials, finishes, and finalized specifications.",
    },
    {
      number: "04",
      title: "Execution",
      desc: "Precise installation and reveal of your transformed luxury space.",
    },
  ];
  return (
    <div>
    <Hero/>
    <Features/>
    <FeaturesProduct/>
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800">
            Expert Interior Services
          </h2>

          <p className="text-gray-500 mt-4 mb-8 max-w-lg">
            From conceptual sketches to the final installation, our
            comprehensive services cover every aspect of your interior journey.
          </p>

          {services.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 bg-white p-5 rounded-xl shadow-sm mb-4">
              <div className="text-2xl">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src={serviceImg}
            alt="service"
            className="rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </section>
    <section className="py-20 bg-blue-700 text-white text-center">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold">Our Seamless Process</h2>
        <p className="mt-3 text-blue-100">
          Experience a collaborative and transparent journey to your dream space.
        </p>

        <div className="grid md:grid-cols-4 gap-10 mt-14">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="w-16 h-16 mx-auto bg-white text-blue-700 rounded-full flex items-center justify-center text-xl font-bold">
                {step.number}
              </div>

              <h3 className="mt-6 font-semibold text-lg">
                {step.title}
              </h3>

              <p className="text-blue-100 text-sm mt-2">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
    <section className="py-20 bg-gray-100 text-center">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-gray-800">
          Ready to Redefine Your Space?
        </h2>

        <p className="text-gray-500 mt-4">
          Contact our expert designers today for a complimentary consultation
          session.
        </p>

        <a
          href="/contact"
          className="inline-block mt-8 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          <Link to={"/Contactus"}>Get Started Now</Link>
        </a>

      </div>
    </section>
    <Footer/>
    </div>
    
    
  )
};

export default Home;