import React from "react";
import Navbar from "../component/navbar";

function NeedBlood() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content */}
      <main className="pt-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-red-700 text-center mb-6">
          Need Blood? We Can Help
        </h2>
        <p className="mt-4 text-gray-700 text-lg text-center max-w-2xl mx-auto">
          If you or someone you know needs blood urgently, our Blood Donation System
          connects you with nearby donors and hospitals. Enter your details below to
          request assistance or find a donor quickly.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2910/2910760.png"
            alt="Need Blood"
            className="w-72 mx-auto"
          />
          <p className="text-gray-600 text-lg">
            Our system ensures that blood requests are handled quickly and efficiently.
            Hospitals and volunteers in our network are notified immediately, helping
            you access life-saving blood without delays. Join our community to make a
            real difference.
          </p>
        </div>

        <div className="text-center mt-12">
          <button className="bg-red-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-800 transition">
            Request Blood Now
          </button>
        </div>
      </main>
    </div>
  );
}

export default NeedBlood;
