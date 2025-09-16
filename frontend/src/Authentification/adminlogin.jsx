import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin@123' && password === '12345') {
      MySwal.fire({
        title: 'Login Successful!',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
      });

      setTimeout(() => {
        navigate('/dashboard/home');
      }, 2000);
    } else {
      MySwal.fire({
        title: 'Error!',
        text: 'Wrong credentials!',
        icon: 'error',
        confirmButtonColor: '#d33',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-red-700 mb-6">Admin Login</h2>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Password:
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-red-700 text-white py-2 rounded-lg shadow-md hover:bg-red-800 transition"
          >
            Login
          </button>

          {/* Home Button */}
          <Link to="/">
            <button
              type="button"
              className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
            >
              Home
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
