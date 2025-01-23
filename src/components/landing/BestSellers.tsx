'use client';
import React from 'react';

const bestSellers = [
    { id: 1, name: 'Monstera', price: '$25', image: 'https://source.unsplash.com/300x300/?monstera' },
    { id: 2, name: 'Snake Plant', price: '$20', image: 'https://source.unsplash.com/300x300/?snake-plant' },
    { id: 3, name: 'Peace Lily', price: '$18', image: 'https://source.unsplash.com/300x300/?peace-lily' },
];

const BestSellers = () => {
    return (
        <section className="best-sellers py-16 px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Best Sellers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {bestSellers.map((product) => (
                    <div key={product.id} className="product-card">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-56 object-cover rounded-lg"
                        />
                        <h3 className="mt-4 text-xl font-bold">{product.name}</h3>
                        <p className="mt-2 text-green-700 font-semibold">{product.price}</p>
                        <button className="mt-4 bg-green-600 hover:bg-green-500 px-4 py-2 text-white rounded-lg">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BestSellers;