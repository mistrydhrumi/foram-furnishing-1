import React from 'react'
import banner from "../assets/banner.jpeg";
import service1 from "../assets/service1.jpeg";
import service2 from "../assets/service2.jpeg";
import service3 from "../assets/service3.jpeg";
import {
  Wrench,
  Ruler,
  Building,
  Grid,
  Compass,
  Handshake,
  Palette,
  Package,
} from "lucide-react";


const Service = () => {
  return (
    <div>
      <section className="bg-gray-100 py-16 px-6 md:px-16">

      {/* ================= Banner Section ================= */}
      <div className="relative rounded-2xl overflow-hidden mb-16">

        <img
          src={banner}
          alt="Banner"
          className="w-full h-[350px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
          <div className="text-white max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold">
              Elevate Your Space with{" "}
              <span className="text-blue-500">
                Foram Furnishing
              </span>
            </h2>

            <p className="mt-4 text-gray-200">
              Sophisticated interior solutions tailored to your unique style
              and professional needs. Crafting spaces that inspire.
            </p>
          </div>
        </div>
      </div>

      {/* ================= Heading ================= */}
      <div className="flex flex-col md:flex-row justify-between mb-10">
        <div>
          <p className="text-blue-600 text-sm font-semibold uppercase">
            Premium Selection
          </p>

          <h2 className="text-3xl font-bold text-gray-800">
            Our Signature Solutions
          </h2>
        </div>

        <p className="text-gray-500 max-w-md mt-4 md:mt-0">
          Expertly curated aesthetic spaces designed for maximum comfort
          and professional impact.
        </p>
      </div>

      {/* ================= Cards ================= */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div>
          <img
            src={service1}
            alt=""
            className="rounded-xl h-56 w-full object-cover"
          />

          <h3 className="text-lg font-semibold mt-4">
            Custom Upholstery
          </h3>

          <p className="text-gray-600 mt-2 text-sm">
            Our master artisans specialize in bespoke reupholstery and
            original creations using premium fabric selections.
          </p>
        </div>

        {/* Card 2 */}
        <div>
          <img
            src={service2}
            alt=""
            className="rounded-xl h-56 w-full object-cover"
          />

          <h3 className="text-lg font-semibold mt-4">
            Interior Styling
          </h3>

          <p className="text-gray-600 mt-2 text-sm">
            Comprehensive spatial planning and curated aesthetics that
            bridge the gap between architecture and inhabitant.
          </p>
        </div>

        {/* Card 3 */}
        <div>
          <img
            src={service3}
            alt=""
            className="rounded-xl h-56 w-full object-cover"
          />

          <h3 className="text-lg font-semibold mt-4">
            Luxury Drapery
          </h3>

          <p className="text-gray-600 mt-2 text-sm">
            Precision-engineered window treatments blending form and
            function with architectural-grade hardware.
          </p>
        </div>

      </div>
    </section>
    <section className="bg-gray-100 py-20 px-6 md:px-16">

      {/* ===================== CATALOG SECTION ===================== */}
      <div className="bg-white rounded-2xl shadow-md p-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Comprehensive Furnishing Catalog
          </h2>

          <p className="text-gray-500 mt-3">
            Detailed professional services spanning from residential
            enhancements to large-scale commercial implementations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Item */}
          <div className="flex gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Ruler className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold">
                Specialized Rug & Carpet Installation
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Expert anchoring and precision seaming for wall-to-wall
                installations ensuring acoustic performance and durability.
              </p>
            </div>
          </div>

          {/* Item */}
          <div className="flex gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Wrench className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold">
                Executive Furniture Assembly
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Certified technicians handle logistics, unpacking and
                precision leveling according to manufacturer standards.
              </p>
            </div>
          </div>

          {/* Item */}
          <div className="flex gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Grid className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold">
                Global Textile Sourcing
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Worldwide sourcing network delivering premium fabrics
                with sustainability certification for commercial use.
              </p>
            </div>
          </div>

          {/* Item */}
          <div className="flex gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Building className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold">
                Strategic Corporate Staging
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Turnkey interior setups designed to enhance productivity
                and accelerate real estate presentation.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ===================== GROW WITH FORAM ===================== */}
      <div className="mt-24 text-center">

        <h2 className="text-3xl font-bold text-gray-800">
          Grow With Foram
        </h2>

        <div className="w-16 h-1 bg-blue-600 mx-auto my-4 rounded"></div>

        <p className="text-gray-500 max-w-2xl mx-auto">
          We forge long-term strategic alliances with industry leaders to
          deliver unprecedented interior excellence and creative synergy.
        </p>

        {/* Partner Cards */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">

          {[
            {
              icon: <Compass />,
              title: "Architects",
              text: "Seamless technical integration into structural blueprints with CAD support.",
            },
            {
              icon: <Handshake />,
              title: "Developers",
              text: "Bulk procurement and luxury staging solutions increasing property value.",
            },
            {
              icon: <Palette />,
              title: "Designers",
              text: "Exclusive trade privileges and logistics support for creators.",
            },
            {
              icon: <Package />,
              title: "Suppliers",
              text: "Direct collaboration with global textile and fabrication partners.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="bg-blue-100 w-12 h-12 flex items-center justify-center mx-auto rounded-lg text-blue-600">
                {item.icon}
              </div>

              <h3 className="font-semibold mt-4">{item.title}</h3>

              <p className="text-gray-500 text-sm mt-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* BLUE CTA BOX */}
        <div className="bg-blue-700 text-white rounded-2xl mt-16 p-10 flex flex-col md:flex-row justify-between items-center text-left shadow-lg">

          <div>
            <h3 className="text-2xl font-semibold">
              Elite Professional Network
            </h3>

            <p className="text-blue-100 mt-3 max-w-xl">
              Our Trade Program offers priority scheduling,
              volume-based pricing and dedicated account management
              for professional partners.
            </p>
          </div>

          <div className="mt-6 md:mt-0 text-center md:text-right">
            <p className="text-blue-200 text-sm uppercase">
              Connect With Us
            </p>

            <a
              href="mailto:partners@foram.com"
              className="text-xl font-semibold"
            >
              partners@foram.com
            </a>
          </div>

        </div>

      </div>
    </section>
    </div>
  )
}

export default Service