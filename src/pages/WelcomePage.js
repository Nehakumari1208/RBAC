
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-blue-500">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-3xl w-full m-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-8">
          Welcome to RBAC
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
          A secure, efficient, and flexible way to manage users and roles. 
          Discover the power of <span className="text-blue-800 font-semibold">Role-Based Access Control</span> for organized and controlled access management.
        </p>
        <div className="mb-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4">Key Features</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                <span className="text-blue-600 font-bold text-xl">✔️</span>
              </div>
              <div className="text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-600">Role-Based Access</h3>
                <p className="text-gray-600">
                  Assign specific roles to users to control their access to different parts of the system.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                <span className="text-blue-600 font-bold text-xl">✔️</span>
              </div>
              <div className="text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-600">Customizable Permissions</h3>
                <p className="text-gray-600">
                  Easily define and modify permissions for roles to match your needs—whether Read, Write, Delete, or custom actions.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                <span className="text-blue-600 font-bold text-xl">✔️</span>
              </div>
              <div className="text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-600">User Management</h3>
                <p className="text-gray-600">
                  Effortlessly manage users by adding, editing, or removing them, and assign or change their roles with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link to="/login">
          <button className="flex items-center justify-center bg-blue-600 text-white py-3 px-8 rounded-full hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105 shadow-lg">
            <span className="text-lg sm:text-xl font-semibold">Get Started</span>
            <FaArrowRight className="ml-3 text-xl" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default WelcomePage;
