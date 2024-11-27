import React, { useState } from 'react';

const ViewUsers = () => {
  // Sample user data
  const [users, setUsers] = useState([
    {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      status: 'Active',
      permissions: ['Read', 'Write'],
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '987-654-3210',
      status: 'Inactive',
      permissions: ['Read'],
    },
    {
      name: 'Alice Johnson',
      email: 'alice@example.com',
      phone: '555-123-4567',
      status: 'Active',
      permissions: ['Write', 'Delete'],
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  // Filter users based on search query
  const filteredUsers = users.filter((user) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      user.name.toLowerCase().includes(lowerCaseQuery) ||
      user.email.toLowerCase().includes(lowerCaseQuery) ||
      user.status.toLowerCase().includes(lowerCaseQuery)
    );
  });

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">
          User Management
        </h2>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by name, email, or status..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>

        {/* User Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-4 py-2 border text-left">Name</th>
                <th className="px-4 py-2 border text-left">Email</th>
                <th className="px-4 py-2 border text-left">Phone</th>
                <th className="px-4 py-2 border text-left">Status</th>
                <th className="px-4 py-2 border text-left">Permissions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-gray-100 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="px-4 py-2 border">{user.name}</td>
                    <td className="px-4 py-2 border">{user.email}</td>
                    <td className="px-4 py-2 border">{user.phone}</td>
                    <td className="px-4 py-2 border">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          user.status === 'Active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 border">
                      <div className="relative group">
                        <span className="underline cursor-pointer text-blue-600">
                          View
                        </span>
                        <div className="absolute hidden group-hover:block bg-gray-700 text-white text-sm p-2 rounded-md -mt-2">
                          {user.permissions.join(', ') || 'No Permissions'}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewUsers;
