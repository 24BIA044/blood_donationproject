import React from "react";
import Navbar from "./navbar";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="pt-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-red-700 text-center mb-6">
          Contact Us
        </h2>
        <p className="text-gray-700 text-lg text-center max-w-2xl mx-auto mb-12">
          Have questions, suggestions, or want to get involved? Reach out to us anytime.
          Our team is ready to assist you and connect you with our network of donors and hospitals.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-gray-700 space-y-2">
            <p>📧 <span className="font-semibold">Email:</span> support@blooddonation.org</p>
            <p>📞 <span className="font-semibold">Phone:</span> +255 700 123 456</p>
            <p>🏢 <span className="font-semibold">Address:</span> 123 Health St, Dar es Salaam, Tanzania</p>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3050/3050525.png"
            alt="Contact Us"
            className="w-72 mx-auto"
          />
        </div>

        <div className="text-center mt-12">
          <button className="bg-red-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-800 transition">
            Send Message
          </button>
        </div>
      </main>
    </div>
  );
}

export default Contact;
