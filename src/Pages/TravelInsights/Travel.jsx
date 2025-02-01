import React, { useState, useEffect } from "react";

const Travel = () => {
  const [travelData, setTravelData] = useState([
    { destination: "Paris", visitors: 5000, averageBudget: 1500 },
    { destination: "New York", visitors: 7000, averageBudget: 1800 },
    { destination: "Tokyo", visitors: 4000, averageBudget: 2000 },
    { destination: "Sydney", visitors: 3000, averageBudget: 1700 },
  ]);

  const [highestVisitors, setHighestVisitors] = useState(null);
  const [averageBudget, setAverageBudget] = useState(0);

  useEffect(() => {
    // Calculate insights when travel data changes
    if (travelData.length > 0) {
      // Find destination with highest visitors
      const maxVisitors = travelData.reduce((prev, curr) =>
        prev.visitors > curr.visitors ? prev : curr
      );
      setHighestVisitors(maxVisitors);

      // Calculate average budget
      const totalBudget = travelData.reduce(
        (sum, item) => sum + item.averageBudget,
        0
      );
      setAverageBudget((totalBudget / travelData.length).toFixed(2));
    }
  }, [travelData]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Travel Insights</h1>

      {/* Insights Section */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-4">Key Insights</h2>
        <p className="mb-2">
          <strong>Most Popular Destination:</strong>{" "}
          {highestVisitors ? highestVisitors.destination : "N/A"} with{" "}
          {highestVisitors ? highestVisitors.visitors : 0} visitors.
        </p>
        <p>
          <strong>Average Travel Budget:</strong> ${averageBudget}.
        </p>
      </div>

      {/* Travel Data Table */}
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Destination</th>
            <th className="border border-gray-300 px-4 py-2">Visitors</th>
            <th className="border border-gray-300 px-4 py-2">
              Average Budget ($)
            </th>
          </tr>
        </thead>
        <tbody>
          {travelData.length > 0 ? (
            travelData.map((data, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  {data.destination}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data.visitors}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {data.averageBudget}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="3"
                className="border border-gray-300 px-4 py-2 text-center text-red-500"
              >
                No travel data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Travel;
