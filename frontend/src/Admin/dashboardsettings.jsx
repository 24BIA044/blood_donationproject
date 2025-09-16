import React from "react";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";

function DashboardSetting() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* Top Navbar */}
        <header className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-10">
          <h1 className="text-xl font-semibold text-red-700">Settings</h1>
          <Link to="/">
            <button className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition">
              Logout
            </button>
          </Link>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 w-full">
          <div className="bg-white shadow rounded-lg p-6 w-full max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              Dashboard Settings
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Admin Name</label>
                <input
                  type="text"
                  placeholder="Admin Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="admin@example.com"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <button
                type="submit"
                className="bg-red-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-800 transition"
              >
                Save Changes
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardSetting;
