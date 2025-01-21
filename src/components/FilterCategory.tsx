"use client";
import React, { useState, useRef } from "react";

const categories = ["All Plants", "Fruit Plants", "Flower Plants", "Indoor Plants", "Seeds", "Forestry Plants", "Accessories"];

export default function CategorySelector() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>("All Plants");
    const categoryRefs = useRef<(HTMLSpanElement | null)[]>([]);

    const handleCategoryChange = (category: string, index: number) => {
        setSelectedCategory(category);

        categoryRefs.current[index]?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
    };

    return (
        <div className="reveal w-full overflow-x-auto no-scrollbar px-2 sticky top-20 z-20 py-2 max-w-7xl mx-auto">
            <div className="flex gap-4">
                {categories.map((category, index) => (
                    <label key={category} className="flex-shrink-0">
                        <input
                            type="radio"
                            value={category}
                            checked={selectedCategory === category}
                            onChange={() => handleCategoryChange(category, index)}
                            className="hidden"
                        />
                        <span
                            ref={(el) => {
                                categoryRefs.current[index] = el;
                            }}
                            className={`flex cursor-pointer px-6 py-4 rounded-2xl text-sm font-bold ${
                                selectedCategory === category ? "bg-primary-green text-light-green" : "bg-background text-gray-700"
                            }`}
                        >
                            {category}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
}
