import React from "react";
import Navbar from "../component/navbar";

function Donate() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Page Header */}
      <section className="pt-24 text-center px-6">
        <h2 className="text-3xl font-bold text-red-700">
          Donate Blood
        </h2>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
          Every drop counts! Join our mission to save lives by donating blood.
          Your contribution can bring hope and health to those in urgent need.
        </p>
      </section>

      {/* Donation Form */}
      <main className="px-4 mt-12 flex justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h3 className="text-2xl font-bold text-center text-red-700 mb-6">
            Become a Donor
          </h3>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Blood Group (e.g., A+, O-)"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-700 text-white py-2 rounded-lg shadow-md hover:bg-red-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </main>

      {/* Contact Section */}
      <section className="mt-20 px-6 max-w-6xl mx-auto">
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

export default Donate;
