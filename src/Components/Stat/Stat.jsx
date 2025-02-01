import React from 'react';

const Stat = () => {
  return (
    <div className="p-4 flex justify-center items-center w-full">
      <div className="stats grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl text-center"> 
        {/* Total Bookings */}
        <div className="stat flex flex-col items-center justify-center">
          <div className="stat-title text-lg font-semibold">Total Bookings</div>
          <div className="stat-value text-3xl font-bold">5,400</div>
          <div className="stat-desc text-sm text-gray-500">January 1st to February 1st</div>
        </div>

        {/* Active Travelers */}
        <div className="stat flex flex-col items-center justify-center">
          <div className="stat-title text-lg font-semibold">Active Travelers</div>
          <div className="stat-value text-3xl font-bold text-secondary">3,200</div>
          <div className="stat-desc text-sm text-gray-500">↗︎ 100 (3%)</div>
        </div>

        {/* New Inquiries */}
        <div className="stat flex flex-col items-center justify-center">
          <div className="stat-title text-lg font-semibold">New Inquiries</div>
          <div className="stat-value text-3xl font-bold">950</div>
          <div className="stat-desc text-sm text-gray-500">↘︎ 50 (5%)</div>
        </div>
      </div>
    </div>
  );
};

export default Stat;