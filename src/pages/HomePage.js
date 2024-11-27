import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FaUser, FaSignOutAlt, FaBars } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success('Logged out successfully!');
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <div
        className={`fixed sm:static top-0 left-0 h-full w-64 bg-gradient-to-b from-blue-600 to-blue-800 text-white p-6 transition-all duration-300 ${isSidebarOpen ? 'block' : 'hidden sm:block'}`}
      >
        <div className="text-2xl font-bold mb-8 text-center tracking-wide">RBAC Dashboard</div>
        <ul className="space-y-4">
          <li className="text-lg font-semibold uppercase tracking-wider mb-4">User Management</li>
          <li className="hover:bg-blue-700 p-3 rounded-lg transition">
            <Link to="/view-users" className="block">View Users</Link>
          </li>
          <li className="hover:bg-blue-700 p-3 rounded-lg transition">
            <Link to="/add-user" className="block">Add User</Link>
          </li>
          <li className="hover:bg-blue-700 p-3 rounded-lg transition">
            <Link to="/manage-users" className="block">Manage Users</Link>
          </li>
        </ul>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="bg-white shadow p-6 flex justify-between items-center">
          <div className="text-2xl font-semibold text-blue-800">Welcome to the Dashboard</div>
          <div className="space-x-4 flex items-center">
            <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition shadow-md hidden sm:inline-block">
              <FaUser />
            </button>
            <button
              className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition shadow-md"
              onClick={handleLogout}
            >
              <FaSignOutAlt />
            </button>
          </div>
          <button
            onClick={toggleSidebar}
            className="sm:hidden bg-blue-600 text-white p-3 rounded-lg focus:outline-none ml-4"
          >
            <FaBars />
          </button>
        </div>

        <div className="p-8 flex-1 overflow-y-auto">
          <h2 className="text-4xl font-bold mb-6 text-blue-700">Overview</h2>
          <p className="text-lg text-gray-700 mb-10">
            This is the home page of your Role-Based Access Control (RBAC) system. You can manage users, assign roles, and set permissions from here.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Total Users</h3>
              <p className="text-gray-700 text-lg font-medium">23</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Roles Assigned</h3>
              <p className="text-gray-700 text-lg font-medium">7 Active Roles</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Permissions Configured</h3>
              <p className="text-gray-700 text-lg font-medium">15 Permissions</p>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default HomePage;
