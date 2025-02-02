"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
    id: number;
    name: string;
    tags: string[];
    url: string;
}

const products: Product[] = [
    { id: 1, name: "Monstera", tags: ["indoor", "decor"], url: "/products/monstera" },
    { id: 2, name: "Snake Plant", tags: ["low-light", "easy-care"], url: "/products/snake-plant" },
    { id: 3, name: "Peace Lily", tags: ["flowering", "indoor"], url: "/products/peace-lily" },
    { id: 4, name: "Spider Plant", tags: ["air-purifying", "indoor"], url: "/products/spider-plant" },
    { id: 5, name: "Fiddle Leaf Fig", tags: ["decorative", "bright-light"], url: "/products/fiddle-leaf-fig" },
    { id: 6, name: "Aloe Vera", tags: ["medicinal", "succulent"], url: "/products/aloe-vera" },
    { id: 7, name: "Bamboo Palm", tags: ["tropical", "indoor"], url: "/products/bamboo-palm" },
];

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [isFocused, setIsFocused] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);

        if (value.trim() === "") {
            setFilteredProducts([]);
        } else {
            const filtered = products.filter(
                (product) =>
                    product.name.toLowerCase().includes(value.toLowerCase()) ||
                    product.tags.some((tag) => tag.toLowerCase().includes(value.toLowerCase()))
            );
            setFilteredProducts(filtered);
        }
    };

    const handleSuggestionClick = (product: Product) => {
        setQuery(product.name);
        setFilteredProducts([]);
    };

    return (
        <div className={`w-full max-w-7xl ${isFocused && "absolute left-0 px-4 right-0 mx-auto"}`}>
            <div className="relative w-full">
                <input
                    style={{
                        backgroundImage: `url('/search.svg')`,
                        backgroundSize: "26px 26px",
                        backgroundPosition: "left 10px center",
                        backgroundRepeat: "no-repeat",
                    }}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search for a plant..."
                    className="flex w-full border h-12 pl-12 border-black/10 rounded-lg py-2 focus:outline-none placeholder-green-900/50 caret-green-900 focus:border-green-700 focus:border-2"
                />
                {filteredProducts.length > 0 && (
                    <ul className="absolute z-10 bg-secondary-green w-full mt-4 rounded-lg shadow-lg max-h-72 overflow-x-auto">
                        {filteredProducts.map((product, index) => (
                            <li key={"search-match-"+product.id} onClick={() => handleSuggestionClick(product)}>
                                <Link href={product.url} className={`flex w-full p-2 hover:underline`}>
                                    <span className="flex items-start gap-2">
                                        <div className="font-medium text-black">{product.name}</div>
                                        <div className="text-sm text-gray-500">({product.tags.join(", ")})</div>
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
