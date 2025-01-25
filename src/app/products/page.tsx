import { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import FilterCategory from "@/components/FilterCategory";
import HorizontalScrollContainer from "@/components/HorizontalScrollContainer";
import { products } from "@/app/_data/productData";

export const metadata: Metadata = {
    title: "Shop All Plants",
    description:
        "Browse our wide selection of indoor and outdoor plants. From succulents to tropical plants, find the perfect green addition to your space.",
    openGraph: {
        title: "Shop All Plants | Plant Store",
        description: "Browse our wide selection of indoor and outdoor plants.",
    },
};

export default async function ProductsPage() {

    return (
        <div className="z-10">
            <FilterCategory />
            <h2 className="text-2xl font-semibold mb-6 pl-8 max-w-7xl mx-auto pt-4">All plants</h2>
            <div className="w-full max-w-7xl mx-auto p-2 px-4 gap-4" style={{ columns: "200px" }}>
                {products.map((product, index) => (
                    <ProductCard
                    id={product.id}
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
            <h2 className="text-2xl font-semibold mb-6 pl-8 max-w-7xl mx-auto pt-4">Related products</h2>
            <HorizontalScrollContainer />
            <h2 className="text-2xl font-semibold mb-6 pl-8 max-w-7xl mx-auto pt-4">Indoor plants</h2>
            <HorizontalScrollContainer />
        </div>
    );
}
