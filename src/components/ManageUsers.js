import React, { useState } from 'react';

const ManageUsers = () => {
  const [users, setUsers] = useState([
    { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Active', permissions: ['Read', 'Write'] },
    { name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', status: 'Inactive', permissions: ['Read'] },
    { name: 'Alice Johnson', email: 'alice@example.com', phone: '555-123-4567', status: 'Active', permissions: ['Write', 'Delete'] }
  ]);

  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', status: 'Active', permissions: { read: false, write: false, delete: false }
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        permissions: { ...formData.permissions, [name]: checked }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedPermissions = Object.keys(formData.permissions).filter((key) => formData.permissions[key]);
    const updatedUsers = users.map((user) =>
      user.email === editingUser.email ? { ...user, ...formData, permissions: updatedPermissions } : user
    );
    setUsers(updatedUsers);
    setEditingUser(null);
  };

  const handleDelete = (email) => {
    const updatedUsers = users.filter(user => user.email !== email);
    setUsers(updatedUsers);
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl bg-white p-6 rounded-lg shadow-md mt-8 w-full">
        <h2 className="text-3xl font-semibold mb-6 text-center">Manage Users</h2>
        <div className="block md:hidden">
          {users.map((user, index) => (
            <div key={index} className="border-b p-4">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Status:</strong> {user.status}</p>
              <p><strong>Permissions:</strong> {user.permissions.join(', ') || 'No Permissions'}</p>
              <div className="mt-4">
                <button
                  onClick={() => {
                    setEditingUser(user);
                    setFormData({
                      name: user.name,
                      email: user.email,
                      phone: user.phone,
                      status: user.status,
                      permissions: {
                        read: user.permissions.includes('Read'),
                        write: user.permissions.includes('Write'),
                        delete: user.permissions.includes('Delete'),
                      }
                    });
                  }}
                  className="text-blue-500 mr-4"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(user.email)}
                  className="text-red-500"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <table className="min-w-full table-auto mb-8">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Phone</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Permissions</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.phone}</td>
                  <td className="px-4 py-2">{user.status}</td>
                  <td className="px-4 py-2">
                    {user.permissions.join(', ') || 'No Permissions'}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => {
                        setEditingUser(user);
                        setFormData({
                          name: user.name,
                          email: user.email,
                          phone: user.phone,
                          status: user.status,
                          permissions: {
                            read: user.permissions.includes('Read'),
                            write: user.permissions.includes('Write'),
                            delete: user.permissions.includes('Delete'),
                          }
                        });
                      }}
                      className="text-blue-500 mr-4"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user.email)}
                      className="text-red-500"
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {editingUser && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
              <h2 className="text-2xl font-semibold mb-4">Edit User</h2>
              <form onSubmit={handleEditSubmit}>
                <div className="mb-4">
                  <label className="block text-lg">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-lg">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                    required
                    disabled
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-lg">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-lg">Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                    required
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>

                <div className="mb-6">
                  <p className="text-lg">Permissions</p>
                  <div className="space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="read"
                        checked={formData.permissions.read}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">Read</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="write"
                        checked={formData.permissions.write}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">Write</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="delete"
                        checked={formData.permissions.delete}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="ml-2">Delete</span>
                    </label>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageUsers;
