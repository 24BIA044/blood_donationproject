import React from "react";
import Navbar from "../component/navbar";

function NeedBlood() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content */}
      <main className="pt-24 px-6 max-w-6xl mx-auto">
        <section className="form-section">
          <h2>Register Recipient</h2>
          <form id="recipient-form">
            <input type="text" placeholder="Full Name" required />
            <input type="number" placeholder="Age" required />
            <input type="text" placeholder="Required Blood Type" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="number" placeholder="Doctor ID" />
            <button type="submit">Save Recipient</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default NeedBlood;
