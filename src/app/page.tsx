import AccessoryCategories from "@/components/landing/AccessoryCategories";
import HeroSection from "@/components/landing/HeroSection";
import PlantCategories from "@/components/landing/PlantCategories";
import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/utils/DBoperations";

// export async function generateStaticParams() {
//     const products = await getAllProducts(); // Fetch all products from your DB
//     return products.map((product) => ({
//         id: product.id,
//     }));
// }

// export const getStaticProps: GetStaticProps = async ({}) => {
//     const products = await productModel.find({}, "id title description rating price offer tags stocks available");
//     return { props: { products } };
// };

interface ProductProps {
    _id: string; // Assuming _id is a string (e.g., MongoDB ObjectId as a string)
    title: string;
    description: string;
    price: number;
    offer?: string; // Optional field
    rating?: number; // Optional field
    images: string[]; // Array of image URLs
}

export default async function Home() {
    const fields = ["_id", "title", "description", "price", "offer", "rating", "images", "url"];

    const products = await getAllProducts(fields);

    console.log(products[0].url)

    return (
        <>
            <HeroSection />
            <PlantCategories />
            <AccessoryCategories />
            <section id="most-loved" className="bg-secondary-green pb-10 pt-16 pr-2">
                <div className="flex gap-2 p-2 max-w-7xl mx-auto">
                    <div className="w-[15vw] [writing-mode:vertical-rl] flex items-center gap-2 text-xl">
                        <h3 className="sticky top-20 bg-color rounded-3xl p-2 py-4 rotate-180 font-bold tracking-wider">Most loved</h3>
                    </div>
                    <div
                        className="w-full z-10"
                        style={{
                            columns: "200px",
                            gap: "1rem",
                        }}
                    >
                        {products.map((product: ProductProps, index: number) => (
                            <ProductCard
                                id={product._id}
                                key={index + "-all-product-card"}
                                productKey={index + "-all-product"}
                                title={product.title}
                                description={product.description}
                                price={product.price}
                                url={"/productID"}
                                offer={product.offer}
                                rating={product.rating}
                                thumbnail={product.images[0]}
                                loved={false}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section id="new-arivals" className="bg-color mt-8 pb-8 pt-6 pr-2">
                <div className="flex gap-2 p-2 max-w-7xl mx-auto">
                    <div className="w-[15vw] [writing-mode:vertical-rl] flex items-center text-xl">
                        <h3 className="sticky top-20 bg-primary-green text-white rounded-3xl p-2 py-4 rotate-180 font-bold tracking-wider">
                            New Arival
                        </h3>
                    </div>
                    <div
                        className="w-full z-10"
                        style={{
                            columns: "200px",
                            gap: "1rem",
                        }}
                    >
                        {products.map((product:ProductProps, index: number) => (
                            <ProductCard
                                id={product._id}
                                key={index + "-all-product-card"}
                                productKey={index + "-all-product"}
                                title={product.title}
                                description={product.description}
                                price={product.price}
                                url={"/productID"}
                                offer={product.offer}
                                rating={product.rating}
                                thumbnail={product.images[0]}
                                loved={false}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
