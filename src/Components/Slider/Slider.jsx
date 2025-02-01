import React, { useEffect, useState } from 'react';

const images = ["new1.jpg", "new4.jpg", "new2.jpg", "new3.jpg"];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[550px] overflow-hidden">
            {images.map((src, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                </div>
            ))}
            <div className="absolute inset-0 flex items-center justify-between px-4">
                <button onClick={() => setCurrentSlide((currentSlide - 1 + images.length) % images.length)} className="btn btn-circle bg-black bg-opacity-50 hover:bg-opacity-75 text-white">❮</button>
                <button onClick={() => setCurrentSlide((currentSlide + 1) % images.length)} className="btn btn-circle bg-black bg-opacity-50 hover:bg-opacity-75 text-white">❯</button>
            </div>
        </div>
    );
};

export default Slider;
