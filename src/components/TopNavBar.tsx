"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface MenuItem {
    label: string;
    href?: string;
    subItems?: { label: string; href: string }[];
}

const TopNavBar: React.FC = () => {
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

    const menuItems: MenuItem[] = [
        { label: "Home", href: "/" },
        {
            label: "Plants",
            subItems: [
                { label: "Indoor Plants", href: "/plants/indoor" },
                { label: "Outdoor Plants", href: "/plants/outdoor" },
                { label: "Succulents", href: "/plants/succulents" },
            ],
        },
        {
            label: "Pots",
            subItems: [
                { label: "Ceramic Pots", href: "/pots/ceramic" },
                { label: "Plastic Pots", href: "/pots/plastic" },
                { label: "Hanging Pots", href: "/pots/hanging" },
            ],
        },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <nav className={`text-primary-green px-6 hidden md:block`}>
            <div className="container mx-auto flex items-center justify-between">
                <ul className="flex">
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className="relative flex items-center group px-4 py-2 h-full"
                            onMouseEnter={() => item.subItems && setOpenDropdown(index)}
                            onMouseLeave={() => item.subItems && setOpenDropdown(null)}
                        >
                            {item.href ? (
                                <a href={item.href} className="hover:underline font-semibold">
                                    {item.label}
                                </a>
                            ) : (
                                <span className="cursor-pointer font-semibold">{item.label}</span>
                            )}

                            {item.subItems && (
                                <ChevronDown size={15} className={`ml-2 transition-transform ${openDropdown === index ? "rotate-180" : "rotate-0"}`} />
                            )}

                            {item.subItems && openDropdown === index && (
                                <ul className="absolute z-20 left-0 top-5 mt-2 w-48 bg-white text-black rounded-lg shadow-lg overflow-hidden">
                                    {item.subItems.map((subItem, subIndex) => (
                                        <li key={subIndex} className="hover:bg-gray-200">
                                            <a href={subItem.href} className="block px-4 py-2 hover:text-green-600">
                                                {subItem.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default TopNavBar;
