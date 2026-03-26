import React from "react";
import heroImg from "../../assets/about-hero.jpeg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Interior"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-16">
        <div className="max-w-xl text-white">
          {/* Small Label */}
          <span className="bg-blue-600 text-xs px-4 py-1 rounded-full">
            PREMIUM INTERIOR SOLUTIONS
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Welcome to Foram Furnishing
          </h1>

          {/* Paragraph */}
          <p className="mt-4 text-gray-200">
            Transform your space with stylish, comfortable, and durable
            furniture. <br></br>At <b>Foram Furnishing</b>, we bring you thoughtfully designed
            pieces that blend functionality with modern aesthetics—perfect for
            homes and offices. Explore our collection and discover furniture
            that reflects your lifestyle.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium"
            >
              <Link to="/Contactus">Click for Enquiry →</Link>
            </a>

            {/* <a
              href="/portfolio"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              View Portfolio
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
