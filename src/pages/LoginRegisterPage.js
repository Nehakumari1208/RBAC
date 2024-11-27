import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginRegisterPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleFormToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      toast.error('Please fill in all required fields!');
      return;
    }

    if (!isLogin) {
      const confirmPassword = e.target['confirm-password']?.value;
      if (password !== confirmPassword) {
        toast.error('Passwords do not match!');
        return;
      }
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 px-6">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-800">
            {isLogin ? 'Login' : 'Register'}
          </h2>
        </div>

        <ToastContainer />

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>

          {!isLogin && (
            <div>
              <label
                className="block text-gray-700 font-semibold"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Confirm your password"
              />
            </div>
          )}

          <div>
            <Link to='/home'>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
              >
                {isLogin ? 'Login' : 'Register'}
              </button>
            </Link>
          </div>
        </form>

        <div className="text-center mt-4">
          <button
            onClick={handleFormToggle}
            className="text-blue-600 hover:underline"
          >
            {isLogin
              ? "Don't have an account? Register here."
              : 'Already have an account? Login here.'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
