"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MoveLeft } from "lucide-react";

interface ImageData {
    id: string;
    url: string;
    alt: string;
}

interface ImageSliderProps {
    images: ImageData[];
    onZoom?: (imageUrl: string) => void;
}

export default function MainImageSlider({ images }: ImageSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    // const [isHovered, setIsHovered] = useState(false);
    const [showLightbox, setShowLightbox] = useState(false);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleThumbnailClick = (index: number) => {
        setCurrentIndex(index);
    };

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (showLightbox) {
                if (e.key === "ArrowRight") handleNext();
                if (e.key === "ArrowLeft") handlePrev();
                if (e.key === "Escape") setShowLightbox(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [showLightbox]);

    return (
        <div className="w-full max-w-[50vmax] md:max-w-[55vmin] rounded-3xl bg-white shadow-sm h-fit mx-auto lg:m-0 pb-2 overflow-hidden">
            {/* Main Image Container */}
            <div className="relative aspect-square rounded-lg overflow-hidden">
                <button className="absolute right-4 top-4 bg-light-green text-primary-green rounded-full size-10 flex items-center justify-center z-10 shadow-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill={false ? "deeppink" : "none"}
                        stroke={false ? "deeppink" : "currentColor"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-heart"
                    >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                </button>
                <button className="absolute right-4 top-16 bg-light-green text-primary-green rounded-full size-10 flex items-center justify-center z-10 shadow-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-share-2"
                    >
                        <circle cx="18" cy="5" r="3" />
                        <circle cx="6" cy="12" r="3" />
                        <circle cx="18" cy="19" r="3" />
                        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                    </svg>
                </button>
                {/* Navigation Buttons */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={handlePrev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg z-10"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg z-10"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </>
                )}

                {/* Main Image */}
                <div
                    className="relative w-full h-full cursor-zoom-in"
                    // onMouseEnter={() => setIsHovered(true)}
                    // onMouseLeave={() => setIsHovered(false)}
                    onClick={() => setShowLightbox(true)}
                >
                    <img src={images[currentIndex].url} alt={images[currentIndex].alt} className="w-full h-full object-contain" />
                </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="mt-4 flex space-x-4 overflow-x-auto py-2 px-4">
                    {images.map((image, index) => (
                        <button
                            key={image.id}
                            onClick={() => handleThumbnailClick(index)}
                            className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-colors ${
                                currentIndex === index ? "border-blue-500" : "border-gray-200"
                            }`}
                        >
                            <img src={image.url} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            )}

            {/* Lightbox */}
            {showLightbox && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
                    <button onClick={() => setShowLightbox(false)} className="absolute top-4 left-4 text-white flex items-center space-x-2">
                        <MoveLeft className="w-6 h-6" />
                        <span>Back to product</span>
                    </button>

                    <div className="relative max-w-5xl max-h-[80vh] w-full mx-4">
                        <img src={images[currentIndex].url} alt={images[currentIndex].alt} className="w-full h-full object-contain" />

                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3"
                                >
                                    <ChevronLeft className="w-8 h-8 text-white" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3"
                                >
                                    <ChevronRight className="w-8 h-8 text-white" />
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
