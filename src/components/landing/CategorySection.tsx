'use client';
import React from 'react';

const categories = [
    { id: 1, name: 'Succulents', image: 'https://source.unsplash.com/300x300/?succulents' },
    { id: 2, name: 'Air-Purifying Plants', image: 'https://source.unsplash.com/300x300/?plants' },
    { id: 3, name: 'Hanging Plants', image: 'https://source.unsplash.com/300x300/?hanging-plants' },
];

const CategorySection = () => {
    return (
        <section className="categories py-16 px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {categories.map((category) => (
                    <div key={category.id} className="category-card group relative">
                        <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-56 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <h3 className="text-white text-2xl font-semibold">{category.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategorySection;