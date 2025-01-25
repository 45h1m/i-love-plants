import ProductCard from "@/components/ProductCard";
import { products } from "./_data/productData";

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-center p-6">
                <img src="/images/404.webp" alt="404" className="w-96 mb-4 mix-blend-multiply" />
                <h2 className="text-2xl font-bold mb-4">Explore More</h2>
            </div>
            <section id="new-arivals" className="bg-color pb-8 pr-2">
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
                </div>
            </section>
        </div>
    );
};

export default NotFound;
