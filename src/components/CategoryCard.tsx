import Link from "next/link";
import React from "react";

interface CategotyCardProps {
    name: string;
    image: string;
    url: string;
}

const CategoryCard = ({ name, image, url }: CategotyCardProps) => {
    return (
        <Link className="relative group flex justify-center rounded-3xl overflow-hidden min-h-40 mb-4" href={url}>
            <img
                src={image}
                alt={`plant-category-${name}`}
                className="w-full group-hover:scale-110 transition-transform duration-500 ease-in-out"
            />
            <p className="absolute font-semibold py-2 bottom-0 text-lg backdrop-blur-sm w-full text-white text-center bg-green-950/20 border-t border-gray-200/30">
                {name}
            </p>
        </Link>
    );
};

export default CategoryCard;
