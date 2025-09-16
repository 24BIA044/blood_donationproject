import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-red-700 text-white flex flex-col h-screen fixed">
      <div className="p-6 text-2xl font-bold text-center border-b border-red-600">
        Admin Panel
      </div>
      <nav className="flex-1 p-4 space-y-4">
        <Link
          to="/dashboard/home"
          className="block py-2 px-4 rounded hover:bg-red-800 transition"
        >
          Dashboard Home
        </Link>
        <Link
          to="/dashboard/donors"
          className="block py-2 px-4 rounded hover:bg-red-800 transition"
        >
          Donors
        </Link>
        <Link
          to="/dashboard/requests"
          className="block py-2 px-4 rounded hover:bg-red-800 transition"
        >
          Blood Requests
        </Link>
        <Link
          to="/dashboard/settings"
          className="block py-2 px-4 rounded hover:bg-red-800 transition"
        >
          Settings
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
