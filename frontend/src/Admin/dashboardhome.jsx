import React from "react";
import Sidebar from "./sidebar";

function Dashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* Top Navbar */}
        <header className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-10">
          <h1 className="text-xl font-semibold text-red-700">Dashboard</h1>
          <button className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition">
            Logout
          </button>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-6 w-full">
          {/* Metrics Grid */}
          <div className="grid md:grid-cols-3 gap-6 w-full">
            <div className="bg-white p-6 rounded-lg shadow w-full">
              <h2 className="text-lg font-semibold text-gray-700">Total Donors</h2>
              <p className="mt-2 text-3xl font-bold text-red-700">120</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow w-full">
              <h2 className="text-lg font-semibold text-gray-700">Blood Requests</h2>
              <p className="mt-2 text-3xl font-bold text-red-700">45</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow w-full">
              <h2 className="text-lg font-semibold text-gray-700">Available Units</h2>
              <p className="mt-2 text-3xl font-bold text-red-700">300</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-10 w-full">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activity</h2>
            <div className="bg-white shadow rounded-lg p-4 w-full">
              <ul className="space-y-2">
                <li className="border-b border-gray-200 py-2">
                  John Doe donated A+ blood
                </li>
                <li className="border-b border-gray-200 py-2">
                  Mary Smith requested O- blood
                </li>
                <li className="py-2">New donor registered: Peter Johnson</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
