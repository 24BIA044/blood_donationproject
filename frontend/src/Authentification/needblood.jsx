import React from "react";
import Navbar from "../Admin/navbar";
import { Link } from "react-router-dom";

function NeedBlood() {
  return (
    <div className="">
      {/* Main content */}
      <main className="p-3 px-6 max-w-3xl mx-auto">
        <section className="bg-white p-8 border-4 rounded-md">
          <h2 className="text-2xl font-bold mb-6 text-red-600 text-center">Recipient Registration Form</h2>

          <form id="recipient-form" className="space-y-5">
            {/* Full Name */}
            <div className="row">

              <div className="col-md-6 mb-3">
                <label htmlFor="fullName" className="block font-medium mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter full name"
                  required
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="age" className="block font-medium mb-1">
                  Age <span className="text-red-500">*</span>
                </label>
                <input
                  id="age"
                  type="number"
                  placeholder="Enter age"
                  min="1"
                  max="120"
                  required
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="bloodType" className="block font-medium mb-1">
                  Required Blood Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="bloodType"
                  required
                  className="w-full border border-gray-300 p-2 rounded"
                >
                  <option value="">Select blood type</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="phone" className="block font-medium mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="e.g. +1 234 567 8901"
                  required
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label for="address">Address:</label>
                <input type="text" className="w-full border border-gray-300 p-2 rounded" id="address" name="address" required></input>
              </div>

              <div className="col-md-6 md-3">
                <label for="email">Email:</label>
                <input type="email" className="w-full border border-gray-300 p-2 rounded" id="email" name="email" required></input>
              </div>

              <div className="col-md-6 mb-3">
                <label for="nationality">nationality:</label>
                <input type="text" className="w-full border border-gray-300 p-2 rounded" id="nationality " name="nationality" required></input>
              </div>
              <div className="col-md-6 mb-3">
                <label for="nationality id">nationality id:</label>
                <input type="text" className="w-full border border-gray-300 p-2 rounded" id="nationality id" name="nationality id" required></input>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="doctorId" className="block font-medium mb-1">
                  Referring Doctor ID (optional)
                </label>
                <input
                  id="doctorId"
                  type="text"
                  placeholder="Enter doctor ID"
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="col-md-6 mb-3"></div>

<div className="col-md-6 mb-3">
 <Link to = {'/'}>
              <button
                type="button"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
              >
                Home
              </button>
             </Link>
  </div>
  <div className="col-md-6 mb-3">
 <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
              >
                Save Recipient
              </button>
</div>






            </div>


          </form>
        </section>
      </main>
    </div>
  );
}

export default NeedBlood;
