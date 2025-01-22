import React from 'react';
import UserTable from '@/components/UserTable';

const UsersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fcfbf9] text-[#4e4e4e] p-6">
      <header className="flex justify-between items-center mb-8">
        <div className="text-3xl font-bold">User management</div>
      </header>

      <div className="flex justify-between mb-4">
        <div>
          <button className="bg-[#4e4e4e] text-white px-4 py-2 rounded-lg">Filters</button>
        </div>
        <div className="flex items-center space-x-2">
          <select className="bg-[#f5f0eb] text-[#4e4e4e] p-2 rounded-lg border border-gray-600">
            <option value="">Select...</option>
            {/* Add more options as needed */}
          </select>
          <input
            type="text"
            placeholder="Search"
            className="bg-[#f5f0eb] text-[#4e4e4e] p-2 rounded-lg border border-gray-600"
          />
        </div>
      </div>

      <UserTable />
    </div>
  );
};

export default UsersPage;
