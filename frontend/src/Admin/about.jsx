import React from "react";
import Navbar from "./navbar";

function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content */}
      <main className="pt-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-red-700 text-center mb-6">
          About Us
        </h2>
        <p className="mt-4 text-gray-700 text-lg text-center max-w-2xl mx-auto">
          Our Blood Donation System connects donors with hospitals and patients in need.
          We ensure that blood donations are safe, secure, and reach those who require
          them urgently. Our mission is to create a reliable network of life-savers
          who can step in when lives are at risk.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3039/3039477.png"
            alt="About Blood Donation"
            className="w-72 mx-auto"
          />
          <p className="text-gray-600 text-lg">
            We aim to build a strong community of donors and volunteers who work
            together to save lives. By donating blood, you can make a direct impact
            on someone’s life, support hospitals, and help maintain a stable blood supply
            for those in urgent need.
          </p>
        </div>

        <div className="text-center mt-12">
          <button className="bg-red-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-800 transition">
            Join Us Today
          </button>
        </div>
      </main>
    </div>
  );
}

export default About;
