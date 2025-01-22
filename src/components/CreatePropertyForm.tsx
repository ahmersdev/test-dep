"use client";

import React, { useState } from "react";

const CreatePropertyForm: React.FC = () => {
  const [title, setTitle] = useState<string>("Luxury Villa");
  const [numberOfBed, setNumberOfBed] = useState<number>(4);
  const [type, setType] = useState<string>("rented");
  const [propertyNumber, setPropertyNumber] = useState<string>("PROP123456");
  const [location, setLocation] = useState<string>("Downtown");
  const [description, setDescription] = useState<string>(
    "A luxurious villa in the heart of the city."
  );
  const [status, setStatus] = useState<string>("available");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  
  // New state variables for additional fields
  const [investmentForm, setInvestmentForm] = useState<number>(1000);
  const [completionDate, setCompletionDate] = useState<string>("2026-10-23");
  const [minAnnualROI, setMinAnnualROI] = useState<number>(10);
  const [maxAnnualROI, setMaxAnnualROI] = useState<number>(15);
  const [transactionCost, setTransactionCost] = useState<number>(10000);
  const [stakeFee, setStakeFee] = useState<number>(2500);
  const [investmentCost, setInvestmentCost] = useState<number>(1000000);
  const [grossRent, setGrossRent] = useState<number>(25000);
  const [serviceCharges, setServiceCharges] = useState<number>(1000);
  const [maintaince, setMaintaince] = useState<number>(30000);
  const [netIncome, setNetIncome] = useState<number>(2000);
  const [amenities, setAmenities] = useState<string[]>(["Swimming Pool", "Gym"]);
  const [yearlyInvReturn, setYearlyInvReturn] = useState<number>(7);
  const [fundedDate, setFundedDate] = useState<string>("2024-08-15");
  const [currentValuation, setCurrentValuation] = useState<number>(1000000);
  const [developed, setDeveloped] = useState<boolean>(true);
  const [developedDate, setDevelopedDate] = useState<string>("2024-06-01");

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("numberOfBed", numberOfBed.toString());
    formData.append("type", type);
    formData.append("propertyNumber", propertyNumber);
    formData.append("location", location);
    formData.append("description", description);
    formData.append("status", status);
    formData.append("investmentForm", investmentForm.toString());
    formData.append("completionDate", completionDate);
    formData.append("minAnnualROI", minAnnualROI.toString());
    formData.append("maxAnnualROI", maxAnnualROI.toString());
    formData.append("transactionCost", transactionCost.toString());
    formData.append("stakeFee", stakeFee.toString());
    formData.append("investmentCost", investmentCost.toString());
    formData.append("grossRent", grossRent.toString());
    formData.append("serviceCharges", serviceCharges.toString());
    formData.append("maintaince", maintaince.toString());
    formData.append("netIncome", netIncome.toString());
    formData.append("yearlyInvReturn", yearlyInvReturn.toString());
    formData.append("fundedDate", fundedDate);
    formData.append("currentValuation", currentValuation.toString());
    formData.append("developed", developed.toString());
    formData.append("developedDate", developedDate);

    // Append amenities as an array
    amenities.forEach((amenity, index) => {
      formData.append(`amenities[${index}]`, amenity);
    });

    if (thumbnail) {
      formData.append("thumbnail", thumbnail);
    }
    
    try {
      const token = localStorage.getItem("authToken");
    
      if (!token) {
        console.error("Authorization token not found");
        setError("Authorization required. Please log in."); // Inform user if not logged in
        setLoading(false);
        return;
      }
    
      const res = await fetch("http://137.184.99.151:4000/api/properties/add", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
    
      const data = await res.json();
      console.log("Response from API:", data); // Log the response for debugging
    
      if (res.ok) {
        setSuccess(true);
        setError("");
        setLoading(false);
        resetForm(); // Reset form after success
      } else {
        setError(data.message || "Failed to create property.");
        setLoading(false);
        setSuccess(false);
      }
    } catch (err) {
      console.error('Error:', err); // Log the error
      setError("Failed to create property. Please try again later.");
      setLoading(false);
    }
  };



  const resetForm = () => {
    setTitle("Luxury Villa");
    setNumberOfBed(4);
    setType("rented");
    setPropertyNumber("PROP123456");
    setLocation("Downtown");
    setDescription("A luxurious villa in the heart of the city.");
    setInvestmentForm(1000);
    setCompletionDate("2026-10-23");
    setMinAnnualROI(10);
    setMaxAnnualROI(15);
    setTransactionCost(10000);
    setStakeFee(2500);
    setInvestmentCost(1000000);
    setGrossRent(25000);
    setServiceCharges(1000);
    setMaintaince(30000);
    setNetIncome(2000);
    setAmenities(["Swimming Pool", "Gym"]);
    setYearlyInvReturn(7);
    setFundedDate("2024-08-15");
    setCurrentValuation(1000000);
    setDeveloped(true);
    setDevelopedDate("2024-06-01");
    setThumbnail(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
      {/* Other fields remain unchanged... */}
      
      <div>
        <label htmlFor="investment-form" className="block text-sm font-medium text-[#4e4e4e]">Investment Form</label>
        <input
          type="number"
          id="investment-form"
          value={investmentForm}
          onChange={e => setInvestmentForm(Number(e.target.value))}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="completion-date" className="block text-sm font-medium text-[#4e4e4e]">Completion Date</label>
        <input
          type="date"
          id="completion-date"
          value={completionDate}
          onChange={e => setCompletionDate(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="min-annual-roi" className="block text-sm font-medium text-[#4e4e4e]">Minimum Annual ROI (%)</label>
        <input
          type="number"
          id="min-annual-roi"
          value={minAnnualROI}
          onChange={e => setMinAnnualROI(Number(e.target.value))}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="max-annual-roi" className="block text-sm font-medium text-[#4e4e4e]">Maximum Annual ROI (%)</label>
        <input
          type="number"
          id="max-annual-roi"
          value={maxAnnualROI}
          onChange={e => setMaxAnnualROI(Number(e.target.value))}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="transaction-cost" className="block text-sm font-medium text-[#4e4e4e]">Transaction Cost</label>
        <input
          type="number"
          id="transaction-cost"
          value={transactionCost}
          onChange={e => setTransactionCost(Number(e.target.value))}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="stake-fee" className="block text-sm font-medium text-[#4e4e4e]">Stake Fee</label>
        <input
          type="number"
          id="stake-fee"
          value={stakeFee}
          onChange={e => setStakeFee(Number(e.target.value))}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="investment-cost" className="block text-sm font-medium text-[#4e4e4e]">Investment Cost</label>
        <input
          type="number"
          id="investment-cost"
          value={investmentCost}
          onChange={e => setInvestmentCost(Number(e.target.value))}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="gross-rent" className="block text-sm font-medium text-[#4e4e4e]">Gross Rent</label>
        <input
          type="number"
          id="gross-rent"
          value={grossRent}
          onChange={e => setGrossRent(Number(e.target.value))}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="service-charges" className="block text-sm font-medium text-[#4e4e4e]">Service Charges</label>
        <input
          type="number"
          id="service-charges"
          value={serviceCharges}
          onChange={e => setServiceCharges(Number(e.target.value))}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="maintaince" className="block text-sm font-medium text-[#4e4e4e]">Maintenance</label>
        <input
          type="number"
          id="maintaince"
          value={maintaince}
          onChange={e => setMaintaince(Number(e.target.value))}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="net-income" className="block text-sm font-medium text-[#4e4e4e]">Net Income</label>
        <input
          type="number"
          id="net-income"
          value={netIncome}
          onChange={e => setNetIncome(Number(e.target.value))}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="yearly-inv-return" className="block text-sm font-medium text-[#4e4e4e]">Yearly Investment Return (%)</label>
        <input
          type="number"
          id="yearly-inv-return"
          value={yearlyInvReturn}
          onChange={e => setYearlyInvReturn(Number(e.target.value))}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="funded-date" className="block text-sm font-medium text-[#4e4e4e]">Funded Date</label>
        <input
          type="date"
          id="funded-date"
          value={fundedDate}
          onChange={e => setFundedDate(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="current-valuation" className="block text-sm font-medium text-[#4e4e4e]">Current Valuation</label>
        <input
          type="number"
          id="current-valuation"
          value={currentValuation}
          onChange={e => setCurrentValuation(Number(e.target.value))}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="developed" className="block text-sm font-medium text-[#4e4e4e]">Is Developed?</label>
        <select
          id="developed"
          value={developed ? "true" : "false"}
          onChange={e => setDeveloped(e.target.value === "true")}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>

      <div>
        <label htmlFor="developed-date" className="block text-sm font-medium text-[#4e4e4e]">Developed Date</label>
        <input
          type="date"
          id="developed-date"
          value={developedDate}
          onChange={e => setDevelopedDate(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="amenities" className="block text-sm font-medium text-[#4e4e4e]">Amenities</label>
        <input
          type="text"
          id="amenities"
          value={amenities.join(", ")}
          onChange={e => setAmenities(e.target.value.split(", ").map(amenity => amenity.trim()))}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <small className="text-gray-500">Separate amenities with commas</small>
      </div>

      <div>
        <label htmlFor="thumbnail" className="block text-sm font-medium text-[#4e4e4e]">Thumbnail Image</label>
        <input
          type="file"
          id="thumbnail"
          accept="image/*"
          onChange={e => setThumbnail(e.target.files?.[0] || null)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <button type="submit" className={`mt-4 w-full py-2 text-white bg-blue-600 rounded-md ${loading ? "opacity-50 cursor-not-allowed" : ""}`} disabled={loading}>
        {loading ? "Creating Property..." : "Create Property"}
      </button>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">Property created successfully!</p>}
    </form>
  );
};

export default CreatePropertyForm;

