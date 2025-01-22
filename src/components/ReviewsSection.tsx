"use client";

import React, { useState } from "react";

export interface Review {
    id: number;
    user: string;
    avatar: string;
    rating: number;
    comment: string;
    date: string;
    images?: string[];
}

interface ReviewsSectionProps {
    reviews: Review[];
}

export default function ReviewsSection({ reviews }: ReviewsSectionProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageClick = (imageUrl: string) => {
        setSelectedImage(imageUrl);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="p-4 rounded-lg max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 pl-4">Customer Reviews</h2>

            {/* List of Reviews */}
            <div className="space-y-6">
                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <div key={review.id} className="bg-white p-4 rounded-3xl max-w-4xl shadow-sm flex gap-4">
                            {/* Avatar */}
                            <img src={review.avatar} alt={`${review.user}'s avatar`} className="w-12 h-12 rounded-full object-cover" />

                            {/* Review Content */}
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-semibold">{review.user}</h3>
                                    <div className="text-yellow-500 flex">
                                        {Array.from({ length: review.rating }, (_, index) => (
                                            <svg
                                                key={`star-${index}-${review.id}`}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="22"
                                                height="22"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-star"
                                            >
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                            </svg>
                                        ))}
                                        {Array.from({ length: 5 - review.rating }, (_, index) => (
                                            <svg
                                                key={`star-${index}-${review.id}`}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="22"
                                                height="22"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-star"
                                            >
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-700 text-sm mb-2">{review.comment}</p>
                                {review.images && review.images.length > 0 && (
                                    <div className="flex gap-2 mt-2">
                                        {review.images.map((image, index) => (
                                            <img
                                                key={index}
                                                src={image}
                                                alt={`Review ${review.id} - Image ${index + 1}`}
                                                className="w-20 h-20 object-cover rounded-xl cursor-pointer hover:opacity-80 transition"
                                                onClick={() => handleImageClick(image)}
                                            />
                                        ))}
                                    </div>
                                )}
                                <p className="text-gray-500 text-xs pt-4">Reviewed on {review.date}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No reviews yet. Be the first to leave one!</p>
                )}
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="relative">
                        <button
                            className="absolute top-2 right-2 text-white bg-red-500 rounded-full px-3 py-1 hover:bg-red-600 transition"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                        <img src={selectedImage} alt="Selected Review" className="max-w-full max-h-screen rounded-md" />
                    </div>
                </div>
            )}
        </div>
    );
}
