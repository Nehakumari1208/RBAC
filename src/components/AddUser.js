import React, { useState } from 'react';

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    status: 'Active',
    permissions: {
      read: false,
      write: false,
      delete: false,
    },
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        permissions: {
          ...formData.permissions,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formData]);
    setFormData({
      name: '',
      email: '',
      phone: '',
      status: 'Active',
      permissions: { read: false, write: false, delete: false },
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">
          Add New User
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter phone number"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="status" className="block text-lg font-medium text-gray-700">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              required
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="mb-6">
            <p className="text-lg font-medium text-gray-700">Permissions</p>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="read"
                  checked={formData.permissions.read}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2">Read</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="write"
                  checked={formData.permissions.write}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2">Write</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="delete"
                  checked={formData.permissions.delete}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2">Delete</span>
              </label>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>

      <div className="mt-10 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">User List</h2>
        {users.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-blue-100 text-left">
                  <th className="p-3 border">Name</th>
                  <th className="p-3 border">Email</th>
                  <th className="p-3 border">Phone</th>
                  <th className="p-3 border">Status</th>
                  <th className="p-3 border">Permissions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="p-3 border">{user.name}</td>
                    <td className="p-3 border">{user.email}</td>
                    <td className="p-3 border">{user.phone}</td>
                    <td className="p-3 border">{user.status}</td>
                    <td className="p-3 border">
                      {Object.keys(user.permissions)
                        .filter((perm) => user.permissions[perm])
                        .join(', ') || 'None'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500">No users added yet.</p>
        )}
      </div>
    </div>
  );
};

export default AddUser;
