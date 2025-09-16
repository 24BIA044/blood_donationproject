import React from "react";
import Sidebar from "./sidebar";

function ManageDonors() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* Top Navbar */}
        <header className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-10">
          <h1 className="text-xl font-semibold text-red-700">Manage Donors</h1>
          <button className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition">
            Logout
          </button>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 w-full">
          <div className="bg-white shadow rounded-lg p-6 w-full">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Donor List
            </h2>

            <table className="w-full table-auto border-collapse border border-gray-200">
              <thead>
                <tr className="bg-red-700 text-white">
                  <th className="border px-4 py-2">ID</th>
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Blood Group</th>
                  <th className="border px-4 py-2">Email</th>
                  <th className="border px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="border px-4 py-2">1</td>
                  <td className="border px-4 py-2">John Doe</td>
                  <td className="border px-4 py-2">A+</td>
                  <td className="border px-4 py-2">john@example.com</td>
                  <td className="border px-4 py-2 space-x-2">
                    <button className="bg-red-700 text-white px-3 py-1 rounded hover:bg-red-800 transition">
                      Edit
                    </button>
                    <button className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition">
                      Delete
                    </button>
                  </td>
                </tr>

                <tr className="text-center bg-gray-50">
                  <td className="border px-4 py-2">2</td>
                  <td className="border px-4 py-2">Mary Smith</td>
                  <td className="border px-4 py-2">O-</td>
                  <td className="border px-4 py-2">mary@example.com</td>
                  <td className="border px-4 py-2 space-x-2">
                    <button className="bg-red-700 text-white px-3 py-1 rounded hover:bg-red-800 transition">
                      Edit
                    </button>
                    <button className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition">
                      Delete
                    </button>
                  </td>
                </tr>

                {/* Add more rows dynamically as needed */}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ManageDonors;

