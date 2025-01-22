"use client";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode"; 
import { useRouter } from "next/navigation";

interface DecodedToken {
  fullName: string;
  // Add other fields based on your token structure
}

const DashboardHome: React.FC = () => {
  const [fullName, setFullName] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch token from localStorage
    const token = localStorage.getItem("authToken");
  
    if (!token) {
      console.warn("Authorization token not found, redirecting to login.");
      router.push("/sign-in");
      return;
    }
  
    try {
      // Decode the token to get user info
      const decoded: DecodedToken = jwtDecode(token); 
      console.log("Decoded User:", decoded);
  
      // Fetch the user's full name from localStorage if available
      const userFullName = localStorage.getItem("userFullName");
      if (userFullName) {
        setFullName(userFullName);
      } else {
        console.warn("User full name not found in localStorage.");
      }
    } catch (error) {
      console.error("Failed to decode token, redirecting to login.", error);
      router.push("/sign-in"); // Redirect if token is invalid
    }
  }, [router]);
  

  return (
    <div className="flex min-h-screen bg-[#fcfbf9]">
      {/* Main Content */}
      <div className="flex-1 p-10 text-[#4e4e4e]">
        {/* Header */}
        <header className="mb-8">
          <div>
            <h2 className="text-4xl font-semibold text-[#4e4e4e]">
              Hello, {fullName || "User"}.
            </h2>
          </div>
        </header>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Total Listed Assets */}
          <div className="p-6 bg-[#f5f0eb] rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-[#4e4e4e]">Total listed assets</h3>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-3xl font-bold">0</span>
              <div className="w-16 h-8 bg-[#4e4e4e] rounded-md"></div>
            </div>
          </div>

          {/* Card 2: Total Members */}
          <div className="p-6 bg-[#f5f0eb] rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-[#4e4e4e]">Total members</h3>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-3xl font-bold">14</span>
              <div className="w-16 h-8 bg-[#4e4e4e] rounded-md"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardHome;
