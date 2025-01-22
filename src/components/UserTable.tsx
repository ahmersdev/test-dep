"use client";
import React, { useEffect, useState } from "react";
import { User } from "@/interfaces/User";
import { fetchUsers } from "../services/userService";
import { FaPen, FaTrash } from "react-icons/fa"; // Importing icons

// Demo fallback users in case API fails
const demoUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "User",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "Moderator",
    createdAt: new Date().toISOString(),
  },
];

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users from API:", error);
        setUsers(demoUsers); // Fallback to demo data in case of error
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="text-lg">Loading users...</span>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-[#f5f0eb] p-4 rounded-lg">
    <table className="min-w-full bg-[#f5f0eb] text-[#4e4e4e]">
      <thead>
        <tr className="text-left">
          <th className="p-4 font-semibold text-[#4e4e4e]">User</th>
          <th className="p-4 font-semibold text-[#4e4e4e]">Role</th>
          <th className="p-4 font-semibold text-[#4e4e4e]">Date</th>
          <th className="p-4 font-semibold text-[#4e4e4e]"></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="hover:bg-[#eae6df] transition duration-200">
            <td className="p-4 flex items-center space-x-3">
              {/* User avatar */}
              <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
              <div>
                <p className="font-bold">{user.name}</p>
                <p className="text-sm text-gray-400">{user.email}</p>
              </div>
            </td>
            <td className="p-4">{user.role}</td>
            <td className="p-4">{new Date(user.createdAt).toLocaleDateString()}</td>
            <td className="p-4 flex space-x-2">
              <button className="text-[#4e4e4e] hover:text-[#4e4e4e]">
                <FaPen />
              </button>
              <button className="text-[#b80000] hover:text-[#b80000]">
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  );
};

export default UserTable;
