import React from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      <section id="home" className="pt-24 text-center px-6">
        <h2 className="text-3xl font-bold text-red-700">
          Welcome to the Blood Donation System
        </h2>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
          Every drop counts. Join our mission to save lives by donating blood.
          Your contribution can bring hope and health to those in urgent need.
          Together, we can make a difference.
        </p>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
             <Link to={'/admin'}> <button className="bg-red-700 w-50 text-white  py-3 rounded-lg shadow-md  mb-3">
                Login here...
              </button></Link>
            </div>
            <div className="col-md-6">
              <Link to={'/needblood'}>
                <button className="bg-red-700 w-50 text-white  py-3 rounded-lg shadow-md transition">
                  Register here...
                </button>
              </Link>
            </div>
          </div>

        </div>

      </section>
    </div>
  );
}

export default Home;
