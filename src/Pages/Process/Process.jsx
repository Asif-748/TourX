import React from "react";

const Process = () => {
    const steps = [
        { title: "Inquiry Submission", icon: "📝" },
        { title: "Booking Confirmation", icon: "✅" },
        { title: "Payment Processing", icon: "💳" },
        { title: "Document Preparation", icon: "📄" },
        { title: "Travel", icon: "✈️" },
        { title: "Post-Travel Feedback", icon: "💬" },
    ];

    return (
        <div className="p-10">
            {/* Centered Heading */}
            <h2 className="text-3xl font-bold mb-12 text-blue-600 text-center">Tour Process</h2>

            {/* Centered Timeline Container */}
            <div className="relative flex items-center justify-center w-full max-w-5xl mx-auto gap-x-8">
                {/* Connecting Line (Centered Properly) */}
                <div className="absolute top-[50px] left-0 w-full h-1 bg-gray-300 -z-10"></div>

                {steps.map((item, index) => (
                    <div key={index} className="relative flex flex-col items-center w-44">
                        {/* Icon Circle */}
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white text-2xl shadow-lg">
                            {item.icon}
                        </div>

                        {/* Step Box (Centered and Uniform Size) */}
                        <div className="mt-3 w-44 h-14 flex items-center justify-center bg-gray-200 shadow-lg rounded-lg text-center text-gray-700 font-semibold">
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Process;
