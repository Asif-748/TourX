import React from "react";

const Banner = () => {
    return (
        <div className="flex flex-col items-center p-6 w-full">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Popular Packages</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
                {/* Card 1 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src="bb.jpeg" alt="Bali" className="h-56 w-full object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-bold">Bali Getaway</h2>
                        <p className="text-gray-700">Escape to the tropical paradise of Bali.</p>
                        <div className="text-gray-500 line-through">$1200</div>
                        <div className="text-xl font-semibold text-red-600">$800</div>
                        <button className="mt-3 btn btn-primary w-full">Book Now</button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src="aa.jpg" alt="Paris" className="h-56 w-full object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-bold">Paris Adventure</h2>
                        <p className="text-gray-700">Experience history in Paris.</p>
                        <div className="text-gray-500 line-through">$1500</div>
                        <div className="text-xl font-semibold text-red-600">$1000</div>
                        <button className="mt-3 btn btn-primary w-full">Book Now</button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src="mm.jpg" alt="Maldives" className="h-56 w-full object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-bold">Maldives Escape</h2>
                        <p className="text-gray-700">Relax in luxurious Maldives resorts.</p>
                        <div className="text-gray-500 line-through">$2000</div>
                        <div className="text-xl font-semibold text-red-600">$1500</div>
                        <button className="mt-3 btn btn-primary w-full">Book Now</button>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src="nyc.webp" alt="New York" className="h-56 w-full object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-bold">New York City Tour</h2>
                        <p className="text-gray-700">Discover the energy of NYC.</p>
                        <div className="text-gray-500 line-through">$1800</div>
                        <div className="text-xl font-semibold text-red-600">$1300</div>
                        <button className="mt-3 btn btn-primary w-full">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
