"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

// Define Property interface for API data
interface Property {
  _id: string;
  title: string;
  location: string;
  investmentCost?: number;
  thumbnail: string;
  description: string;
  currentValuation?: number;
}

const PropertyTable: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      const token = localStorage.getItem("authToken");
      
      if (!token) {
        setError("Authorization token not found");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          "https://backend.sharesbycoco.com/api/properties/all?status=available",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        setProperties(result.data || []);
      } catch (error) {
        setError(`Error fetching properties: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="text-lg">Loading properties...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center text-red-500">
        <span className="text-lg">{error}</span>
      </div>
    );
  }

  if (!properties.length) {
    return (
      <div className="flex justify-center items-center">
        <span className="text-lg">No properties found.</span>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-[#f5f0eb] p-4 rounded-lg shadow-lg">
      <table className="min-w-full bg-white text-[#4e4e4e] border-collapse">
        <thead>
          <tr className="text-left bg-[#fcfbf9] border-b">
            <th className="p-4 font-semibold">Thumbnail</th>
            <th className="p-4 font-semibold">Property Name</th>
            <th className="p-4 font-semibold">Location</th>
            <th className="p-4 font-semibold">Investment Cost</th>
            <th className="p-4 font-semibold">Current Valuation</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr
              key={property._id}
              className="hover:bg-[#eae6df] transition duration-200 border-b"
            >
              <td className="p-4">
                <Image
                  src={property.thumbnail}
                  alt={property.title}
                  width={64}
                  height={64}
                  className="object-cover rounded"
                  onError={() => console.error("Image loading error")}
                />
              </td>
              <td className="p-4">{property.title}</td>
              <td className="p-4">{property.location}</td>
              <td className="p-4">
                {property.investmentCost
                  ? `₦${property.investmentCost.toLocaleString()}`
                  : "N/A"}
              </td>
              <td className="p-4">
                {property.currentValuation
                  ? `₦${property.currentValuation.toLocaleString()}`
                  : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyTable;
