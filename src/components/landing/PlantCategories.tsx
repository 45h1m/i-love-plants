import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import CategoryCard from "../CategoryCard";

const plantCategories = [
    {
        name: "Indoor Plants",
        image: "https://plus.unsplash.com/premium_photo-1682050733502-f58b7f499490?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        url: "/categories/indoor-plants",
    },
    {
        name: "Outdoor Plants",
        image: "https://images.unsplash.com/photo-1605449669747-35d71b9436f8?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        url: "/categories/outdoor-plants",
    },
    {
        name: "Flowering Plants",
        image: "https://images.unsplash.com/photo-1711861334705-947780b8b7d0?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        url: "/categories/flowering-plants",
    },
    {
        name: "Succulents",
        image: "https://images.unsplash.com/photo-1513358130276-442a18340285?q=80&w=1702&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        url: "/categories/succulents",
    },
    {
        name: "Herbs",
        image: "https://plus.unsplash.com/premium_photo-1678912442385-4f949f33ff06?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        url: "/categories/herbs",
    },
    {
        name: "Air Purifying Plants",
        image: "https://plus.unsplash.com/premium_photo-1664033881630-d00b55891218?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        url: "/categories/air-purifying-plants",
    },
    {
        name: "Cactus",
        image: "https://images.unsplash.com/photo-1554631221-f9603e6808be?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        url: "/categories/cactus",
    },
    {
        name: "Hanging Plants",
        image: "https://images.unsplash.com/photo-1589523795621-795b9fe53a01?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        url: "/categories/hanging-plants",
    },
    {
        name: "Bonsai",
        image: "https://images.unsplash.com/photo-1470364693235-a4fe27c60914?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        url: "/categories/bonsai",
    },
    {
        name: "Edible Plants",
        image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        url: "/categories/edible-plants",
    },
    {
        name: "Medicinal Plants",
        image: "https://images.unsplash.com/photo-1726924245333-1dc141ca70da?q=80&w=1844&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        url: "/categories/medicinal-plants",
    },
];

const PlantCategories = () => {
    return (
        <section id="plant-categories" className="bg-secondary-green mt-20 pb-16 pt-20 pr-2">
            <div className="flex gap-2 p-2 max-w-7xl mx-auto">
                <div className="w-[15vw] [writing-mode:vertical-rl] flex items-center gap-2 text-xl">
                    <h3 className="sticky top-20 bg-color rounded-3xl p-2 py-4 rotate-180 font-bold tracking-wider">Plant Categories</h3>
                    <Link
                        href={"#other-categories"}
                        className="sticky top-72 bg-secondary-green border-2 border-primary-green rounded-3xl p-2 py-4 flex gap-1 pt-2 items-center rotate-180 font-bold tracking-wider"
                    >
                        <ArrowLeft className="rotate-90" />
                        Others
                    </Link>
                </div>
                <div
                    className="w-full z-10 columns-[120px] sm:columns-[200px]"
                    style={{
                        gap: "1rem",
                    }}
                >
                    {plantCategories.map((category) => (
                        <CategoryCard key={category.name} name={category.name} image={category.image} url={category.url} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlantCategories;
