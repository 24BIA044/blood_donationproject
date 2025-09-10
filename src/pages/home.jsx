import React from "react";
import Navbar from "../component/navbar";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Home Section */}
      <section id="home" className="pt-24 text-center px-6">
        <h2 className="text-3xl font-bold text-red-700">
          Welcome to the Blood Donation System
        </h2>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
          Every drop counts. Join our mission to save lives by donating blood.
          Your contribution can bring hope and health to those in urgent need.
          Together, we can make a difference.
        </p>
        <button className="mt-6 bg-red-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-800 transition">
          Donate Now
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="mt-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-red-700 text-center mb-8">
          About Us
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1534/1534950.png"
            alt="About Blood Donation"
            className="w-72 mx-auto"
          />
          <p className="text-gray-600 text-lg">
            The Blood Donation System connects donors with hospitals and patients
            in need. We ensure that blood donations are safe, secure, and reach
            those who require them urgently. Our mission is to create a reliable
            network of life-savers who can step in when lives are at risk.
          </p>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="mt-20 px-6 bg-gray-100 py-12">
        <h2 className="text-2xl font-semibold text-red-700 text-center mb-10">
          Why Donate Blood?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold text-red-600">Save Lives</h3>
            <p className="mt-3 text-gray-700">
              One donation can save up to three lives. Be the reason someone smiles today.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold text-red-600">Help Hospitals</h3>
            <p className="mt-3 text-gray-700">
              Hospitals depend on regular donors to treat accident victims and patients.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold text-red-600">Stay Healthy</h3>
            <p className="mt-3 text-gray-700">
              Donating blood can improve heart health and stimulate new blood cell production.
            </p>
          </div>
        </div>
        <div className="text-center mt-10">
          <button className="bg-red-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-800 transition">
            Become a Donor
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-red-700 text-center mb-8">
          Contact Us
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-gray-700">
            <p className="mb-4">
              Have questions or want to get involved? Reach out to us anytime.
            </p>
            <p>📧 <span className="font-semibold">Email:</span> support@blooddonation.org</p>
            <p>📞 <span className="font-semibold">Phone:</span> +255 700 123 456</p>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3050/3050525.png"
            alt="Contact Us"
            className="w-72 mx-auto"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
