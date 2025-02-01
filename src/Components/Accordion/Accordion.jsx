import React from 'react';

const Accordion = () => {
    return (
        <div>
            <div className="max-w-screen-lg mx-auto mt-8 p-4"> {/* Changed to max-w-screen-lg */}
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Travel Essentials</h2>
                <div className="collapse collapse-arrow join-item border-gray-300 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium text-blue-600">Popular Destinations</div>
                    <div className="collapse-content text-gray-600">
                        <p>Explore top travel destinations like Bali, Paris, Maldives, and Tokyo. Each location offers unique experiences from pristine beaches to historic landmarks.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-gray-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium text-blue-600">Travel Hacks</div>
                    <div className="collapse-content text-gray-600">
                        <p>Save money on flights by booking on weekdays, use packing cubes for efficient luggage organization, and always carry a portable charger during your trips.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-gray-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium text-blue-600">Packing Essentials</div>
                    <div className="collapse-content text-gray-600">
                        <p>Don’t forget to pack versatile clothing, a reusable water bottle, travel adapters, and a compact first-aid kit for a hassle-free journey.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;