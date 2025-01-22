import { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import FilterCategory from "@/components/FilterCategory";
import HorizontalScrollContainer from "@/components/HorizontalScrollContainer";

export const metadata: Metadata = {
    title: "Shop All Plants",
    description:
        "Browse our wide selection of indoor and outdoor plants. From succulents to tropical plants, find the perfect green addition to your space.",
    openGraph: {
        title: "Shop All Plants | Plant Store",
        description: "Browse our wide selection of indoor and outdoor plants.",
    },
};

// async function getProducts(): Promise<Product[]> {
//     // Previous getProducts code...
// }

export default async function ProductsPage() {
    const products = [
        {
            title: "Peace Lily",
            description: "Air Purifying Indoor Plant",
            price: 189,
            url: "/",
            loved: false,
            offer: "Free Pot",
            rating: 4.3,
            thumbnail: "https://images.pexels.com/photos/3125197/pexels-photo-3125197.jpeg?w=200",
            small: true,
        },
        {
            title: "Monstera Deliciosa",
            description: "Trending Indoor Plant",
            price: 399,
            url: "/",
            loved: true,
            offer: "Limited Stock",
            rating: 4.7,
            thumbnail: "https://images.pexels.com/photos/6297088/pexels-photo-6297088.jpeg?w=200",
        },
        {
            title: "String of Pearls",
            description: "Hanging Succulent",
            price: 159,
            url: "/",
            loved: true,
            offer: "New Arrival",
            rating: 4.6,
            thumbnail: "https://images.pexels.com/photos/1903964/pexels-photo-1903964.jpeg?w=200",
        },
        {
            title: "Calathea",
            description: "Prayer Plant",
            price: 279,
            url: "/",
            loved: false,
            offer: "25% off",
            rating: 4.5,
            thumbnail: "https://images.pexels.com/photos/6297385/pexels-photo-6297385.jpeg?w=200",
        },
        {
            title: "Rubber Plant",
            description: "Air Purifying",
            price: 339,
            url: "/",
            loved: true,
            offer: "Premium Quality",
            rating: 4.6,
            thumbnail: "https://images.pexels.com/photos/6297089/pexels-photo-6297089.jpeg?w=200",
        },
        {
            title: "Desert Cactus",
            description: "Succulent Collection",
            price: 199,
            url: "/",
            loved: true,
            offer: "Gift Ready",
            rating: 4.8,
            thumbnail: "https://images.pexels.com/photos/1903965/pexels-photo-1903965.jpeg?w=200",
        },
        {
            title: "Japanese Maple",
            description: "Exotic Outdoor Plant",
            price: 699,
            url: "/",
            loved: true,
            offer: "15% off",
            rating: 4.8,
            thumbnail: "https://images.pexels.com/photos/1146708/pexels-photo-1146708.jpeg?w=200",
        },
        {
            title: "Lavender Plant",
            description: "Fragrant Herb",
            price: 199,
            url: "/",
            loved: true,
            offer: "5% off",
            rating: 4.3,
            thumbnail: "https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg",
        },
        {
            title: "Jade Plant",
            description: "Low Maintenance",
            price: 299,
            url: "/",
            loved: false,
            offer: "New Arrival",
            rating: 4.1,
            thumbnail: "https://images.pexels.com/photos/6597559/pexels-photo-6597559.jpeg",
        },
        {
            title: "Money Plant",
            description: "Brings Good Luck",
            price: 99,
            url: "/",
            loved: true,
            offer: "10% off",
            rating: 4.6,
            thumbnail: "https://images.pexels.com/photos/3644742/pexels-photo-3644742.jpeg",
        },
    ];

    return (
        <div className="z-10">
            <FilterCategory />
            <h2 className="text-2xl font-semibold mb-6 pl-8 max-w-7xl mx-auto pt-4">Related products</h2>
            <HorizontalScrollContainer />
            <h2 className="text-2xl font-semibold mb-6 pl-8 max-w-7xl mx-auto pt-4">Indoor plants</h2>
            <HorizontalScrollContainer />
            <h2 className="text-2xl font-semibold mb-6 pl-8 max-w-7xl mx-auto pt-4">All plants</h2>
            <div className="w-full max-w-7xl mx-auto p-2 px-4 gap-4" style={{ columns: "200px" }}>
                {products.map((product, index) => (
                    <ProductCard
                        key={index + "-all-product-card"}
                        productKey={index + "-all-product"}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        url={"/productID"}
                        loved={product.loved}
                        offer={product.offer}
                        rating={product.rating}
                        thumbnail={product.thumbnail}
                        small={product.small}
                    />
                ))}
            </div>
        </div>
    );
}
