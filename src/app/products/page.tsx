import { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import FilterCategory from "@/components/FilterCategory";

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
    return (
        <div className="z-10">
            <FilterCategory />
            <div className="w-full max-w-7xl mx-auto p-2 gap-4" style={{ columns: "200px" }}>
                <ProductCard
                    title="Peace Lily"
                    description="Air Purifying Indoor Plant"
                    price={189}
                    url="/productID"
                    loved={false}
                    offer="Free Pot"
                    rating={4.3}
                    thumbnail="https://images.pexels.com/photos/3125197/pexels-photo-3125197.jpeg?w=200"
                />

                <ProductCard
                    title="Monstera Deliciosa"
                    description="Trending Indoor Plant"
                    price={399}
                    url="/productID"
                    loved={true}
                    offer="Limited Stock"
                    rating={4.7}
                    thumbnail="https://images.pexels.com/photos/6297088/pexels-photo-6297088.jpeg?w=200"
                />

                <ProductCard
                    title="String of Pearls"
                    description="Hanging Succulent"
                    price={159}
                    url="/productID"
                    loved={true}
                    offer="New Arrival"
                    rating={4.6}
                    thumbnail="https://images.pexels.com/photos/1903964/pexels-photo-1903964.jpeg?w=200"
                />

                <ProductCard
                    title="Calathea"
                    description="Prayer Plant"
                    price={279}
                    url="/productID"
                    loved={false}
                    offer="25% off"
                    rating={4.5}
                    thumbnail="https://images.pexels.com/photos/6297385/pexels-photo-6297385.jpeg?w=200"
                />

                <ProductCard
                    title="Rubber Plant"
                    description="Air Purifying"
                    price={339}
                    url="/productID"
                    loved={true}
                    offer="Premium Quality"
                    rating={4.6}
                    thumbnail="https://images.pexels.com/photos/6297089/pexels-photo-6297089.jpeg?w=200"
                />

                <ProductCard
                    title="Desert Cactus"
                    description="Succulent Collection"
                    price={199}
                    url="/productID"
                    loved={true}
                    offer="Gift Ready"
                    rating={4.8}
                    thumbnail="https://images.pexels.com/photos/1903965/pexels-photo-1903965.jpeg?w=200"
                />

                <ProductCard
                    title="Japanese Maple"
                    description="Exotic Outdoor Plant"
                    price={699}
                    url="/productID"
                    loved={true}
                    offer="15% off"
                    rating={4.8}
                    thumbnail="https://images.pexels.com/photos/1146708/pexels-photo-1146708.jpeg?w=200"
                />

                <ProductCard
                    title="Peace Lily"
                    description="Air Purifying Indoor Plant"
                    price={189}
                    url="/productID"
                    loved={false}
                    offer="Free Pot"
                    rating={4.3}
                    thumbnail="https://images.pexels.com/photos/3125197/pexels-photo-3125197.jpeg?w=200"
                />

                <ProductCard
                    title="Lavender Plant"
                    description="Fragrant Herb"
                    price={199}
                    url="/productID"
                    loved={true}
                    offer="5% off"
                    rating={4.3}
                    thumbnail="https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg"
                />

                <ProductCard
                    title="Jade Plant"
                    description="Low Maintenance"
                    price={299}
                    url="/productID"
                    loved={false}
                    offer="New Arrival"
                    rating={4.1}
                    thumbnail="https://images.pexels.com/photos/6597559/pexels-photo-6597559.jpeg"
                />

                <ProductCard
                    title="Money Plant"
                    description="Brings Good Luck"
                    price={99}
                    url="/productID"
                    loved={true}
                    offer="10% off"
                    rating={4.6}
                    thumbnail="https://images.pexels.com/photos/3644742/pexels-photo-3644742.jpeg"
                />
                <ProductCard
                    title="Monstera Deliciosa"
                    description="Trending Indoor Plant"
                    price={399}
                    url="/productID"
                    loved={true}
                    offer="Limited Stock"
                    rating={4.7}
                    thumbnail="https://images.pexels.com/photos/6297088/pexels-photo-6297088.jpeg?w=200"
                />

                <ProductCard
                    title="String of Pearls"
                    description="Hanging Succulent"
                    price={159}
                    url="/productID"
                    loved={true}
                    offer="New Arrival"
                    rating={4.6}
                    thumbnail="https://images.pexels.com/photos/1903964/pexels-photo-1903964.jpeg?w=200"
                />

                <ProductCard
                    title="Calathea"
                    description="Prayer Plant"
                    price={279}
                    url="/productID"
                    loved={false}
                    offer="25% off"
                    rating={4.5}
                    thumbnail="https://images.pexels.com/photos/6297385/pexels-photo-6297385.jpeg?w=200"
                />

                <ProductCard
                    title="Rubber Plant"
                    description="Air Purifying"
                    price={339}
                    url="/productID"
                    loved={true}
                    offer="Premium Quality"
                    rating={4.6}
                    thumbnail="https://images.pexels.com/photos/6297089/pexels-photo-6297089.jpeg?w=200"
                />

                <ProductCard
                    title="Desert Cactus"
                    description="Succulent Collection"
                    price={199}
                    url="/productID"
                    loved={true}
                    offer="Gift Ready"
                    rating={4.8}
                    thumbnail="https://images.pexels.com/photos/1903965/pexels-photo-1903965.jpeg?w=200"
                />

                <ProductCard
                    title="Lavender Plant"
                    description="Fragrant Herb"
                    price={199}
                    url="/productID"
                    loved={true}
                    offer="5% off"
                    rating={4.3}
                    thumbnail="https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg"
                />

                <ProductCard
                    title="Jade Plant"
                    description="Low Maintenance"
                    price={299}
                    url="/productID"
                    loved={false}
                    offer="New Arrival"
                    rating={4.1}
                    thumbnail="https://images.pexels.com/photos/6597559/pexels-photo-6597559.jpeg"
                />
                <ProductCard
                    title="Japanese Maple"
                    description="Exotic Outdoor Plant"
                    price={699}
                    url="/productID"
                    loved={true}
                    offer="15% off"
                    rating={4.8}
                    thumbnail="https://images.pexels.com/photos/1146708/pexels-photo-1146708.jpeg?w=200"
                />

                <ProductCard
                    title="Money Plant"
                    description="Brings Good Luck"
                    price={99}
                    url="/productID"
                    loved={true}
                    offer="10% off"
                    rating={4.6}
                    thumbnail="https://images.pexels.com/photos/3644742/pexels-photo-3644742.jpeg"
                />
            </div>
        </div>
    );
}
