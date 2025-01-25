"use client";

import React, { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";

export default function HorizontalScrollContainer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollState, setScrollState] = useState<"start" | "middle" | "end" | "none">("none");

    const relatedProducts = [
        {
            title: "Peace Lily",
            description: "Air Purifying Indoor Plant",
            price: 189,
            url: "/product/peace-lily",
            loved: false,
            offer: "Free Pot",
            rating: 4.3,
            thumbnail: "https://images.pexels.com/photos/3125197/pexels-photo-3125197.jpeg?w=200",
        },
        {
            title: "Spider Plant",
            description: "Easy to Maintain Indoor Plant",
            price: 149,
            url: "/product/spider-plant",
            loved: true,
            offer: "10% Off",
            rating: 4.5,
            thumbnail: "https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?w=200",
        },
        {
            title: "Snake Plant",
            description: "Perfect for Bedrooms",
            price: 199,
            url: "/product/snake-plant",
            loved: true,
            offer: "Free Fertilizer",
            rating: 4.6,
            thumbnail: "https://images.pexels.com/photos/5699665/pexels-photo-5699665.jpeg?w=200",
        },
        {
            title: "Areca Palm",
            description: "Low Light Indoor Plant",
            price: 249,
            url: "/product/areca-palm",
            loved: false,
            offer: "Buy 1 Get 1 Free",
            rating: 4.7,
            thumbnail: "https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?w=200",
        },
        {
            title: "Fiddle Leaf Fig",
            description: "Trendy Indoor Plant",
            price: 349,
            url: "/product/fiddle-leaf-fig",
            loved: false,
            offer: "20% Off",
            rating: 4.8,
            thumbnail: "https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?w=200",
        },
    ];

    const scrollToNext = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            const cardWidth = container.firstChild ? (container.firstChild as HTMLElement).offsetWidth : 0;
            container.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
    };

    const scrollToPrev = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            const cardWidth = container.firstChild ? (container.firstChild as HTMLElement).offsetWidth : 0;
            container.scrollBy({ left: -cardWidth, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        if (container.scrollWidth <= container.offsetWidth) {
            setScrollState("none");
            return;
        }

        const handleScroll = () => {
            if (container.scrollLeft === 0) {
                setScrollState("start");
            } else if (container.scrollLeft === container.scrollWidth - container.offsetWidth) {
                setScrollState("end");
            } else {
                if (scrollState !== "middle") {
                    setScrollState("middle");
                }
            }
        };

        handleScroll();

        container.addEventListener("scroll", handleScroll);

        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, [scrollState]);

    return (
        <div className="relative max-w-7xl mx-auto">
            {/* Scrollable Container */}
            <div ref={containerRef} className="flex overflow-x-auto px-4 scrollbar-hide gap-4">
                {relatedProducts.map((product, index) => (
                    <ProductCard
                        id={"no-id"}
                        key={index + "-related"}
                        productKey={index + "-related-procuct"}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        url={"/productID"}
                        loved={product.loved}
                        offer={product.offer}
                        rating={product.rating}
                        thumbnail={product.thumbnail}
                        small
                    />
                ))}
            </div>

            {/* Navigation Buttons */}
            {scrollState !== "start" && scrollState !== "none" && (
                <button
                    onClick={scrollToPrev}
                    className="absolute grid place-items-center left-2 top-1/2 transform -translate-y-1/2 size-16 bg-primary-green text-white p-2 rounded-full hover:brightness-125 transition shadow-md"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-left"
                    >
                        <path d="m12 19-7-7 7-7" />
                        <path d="M19 12H5" />
                    </svg>
                </button>
            )}
            {scrollState !== "end" && scrollState !== "none" && (
                <button
                    onClick={scrollToNext}
                    className="absolute grid place-items-center right-2 top-1/2 transform -translate-y-1/2 size-16 bg-primary-green text-white p-2 rounded-full shadow-md hover:brightness-125 transition"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right"
                    >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </button>
            )}
        </div>
    );
}
