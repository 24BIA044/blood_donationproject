import React from "react";
import Sidebar from "./sidebar";

function ManageRequests() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* Top Navbar */}
        <header className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-10">
          <h1 className="text-xl font-semibold text-red-700">Manage Requests</h1>
          <button className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition">
            Logout
          </button>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 w-full">
          <div className="bg-white shadow rounded-lg p-6 w-full">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Blood Requests
            </h2>

            <table className="w-full table-auto border-collapse border border-gray-200">
              <thead>
                <tr className="bg-red-700 text-white">
                  <th className="border px-4 py-2">ID</th>
                  <th className="border px-4 py-2">Patient Name</th>
                  <th className="border px-4 py-2">Blood Group</th>
                  <th className="border px-4 py-2">Hospital</th>
                  <th className="border px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="border px-4 py-2">1</td>
                  <td className="border px-4 py-2">Alice Johnson</td>
                  <td className="border px-4 py-2">B+</td>
                  <td className="border px-4 py-2">City Hospital</td>
                  <td className="border px-4 py-2 space-x-2">
                    <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition">
                      Approve
                    </button>
                    <button className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition">
                      Reject
                    </button>
                  </td>
                </tr>

                <tr className="text-center bg-gray-50">
                  <td className="border px-4 py-2">2</td>
                  <td className="border px-4 py-2">Bob Smith</td>
                  <td className="border px-4 py-2">O-</td>
                  <td className="border px-4 py-2">Central Clinic</td>
                  <td className="border px-4 py-2 space-x-2">
                    <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition">
                      Approve
                    </button>
                    <button className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition">
                      Reject
                    </button>
                  </td>
                </tr>

                {/* Add more rows dynamically */}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ManageRequests;
