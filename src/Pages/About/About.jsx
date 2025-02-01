import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">About Us</h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Welcome to <span className="font-bold text-blue-600">TourX</span>, your trusted partner in discovering unforgettable travel experiences. Our mission is to connect adventurers, families, and explorers with the world’s most exciting destinations and ensure every journey is filled with lasting memories.
                </p>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Founded in 2021, we started with the goal of simplifying travel planning. We believe that traveling shouldn’t be complicated, and our platform is designed to make everything from choosing a destination to booking accommodations and activities as smooth as possible. 
                </p>

                <h2 className="text-3xl font-semibold text-blue-800 mt-8 mb-4">Our Values</h2>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                    <li><span className="font-semibold text-blue-600">Customer Focus:</span> We prioritize your needs to make your travel dreams a reality.</li>
                    <li><span className="font-semibold text-blue-600">Sustainability:</span> Promoting eco-friendly and sustainable travel experiences.</li>
                    <li><span className="font-semibold text-blue-600">Innovation:</span> Continuously improving our platform to bring you the best travel solutions.</li>
                </ul>

                <h2 className="text-3xl font-semibold text-blue-800 mt-8 mb-4">Our Team</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Our team consists of passionate travel enthusiasts, tech experts, and customer service professionals who work tirelessly to provide you with the best service. We’re here to make sure your travel experience is seamless and stress-free.
                </p>

                <h2 className="text-3xl font-semibold text-blue-800 mt-8 mb-4">Contact Us</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Got questions or need assistance? Don’t hesitate to reach out to us. We're here to help you every step of the way on your journey.
                </p>
                <div className="mt-6 text-center">
                    <button className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
