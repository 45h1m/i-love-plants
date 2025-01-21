import Button from "@/components/Button";
export interface ProductDetails {
    id: string;
    name: string;
    description: string;
    price: number;
    currency: string;
    imageUrl: string;
    altText: string;
    rating?: number;
    reviewsCount?: number;
    isAvailable: boolean;
    categories: string[];
    features?: string[];
    specifications?: Record<string, string>;
    discount?: {
        percentage: number;
        finalPrice: number;
    };
    offer?: string;
}

function MainProductDetails({ product }: { product: ProductDetails }) {
    return (
        <div className="max-w-2xl bg-white shadow-sm rounded-3xl p-6 mx-auto lg:mx-0">
            {/* Product Image */}
            <div className="flex flex-col gap-6">

                {/* Product Details */}
                <div className="w-full">
                    <h1 className="text-2xl font-semibold mb-4">{product.name}</h1>
                    <p className="text-gray-700 mb-4">{product.description}</p>

                    <div className="w-full">
                        <div className="mb-4">
                            <span className="text-lg font-bold text-green-600">
                                <small className="text-md text-muted-green font-bold">{product.currency}</small>&nbsp;
                                <span className="text-2xl">{product.discount ? product.discount.finalPrice : product.price}</span>
                            </span>
                            {product.discount && (
                                <span className="text-sm text-gray-500 line-through ml-2">
                                    {product.currency} {product.price}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full pb-4">
                            <Button customClass="justify-center w-full bg-primary-green text-light-green" disabled={!product.isAvailable} loading={false} >Buy Now</Button>
                            <Button customClass="justify-center w-full bg-secondary-green text-primary-green" disabled={!product.isAvailable} loading={false} >Add to cart</Button>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {product.rating && (
                            <div className="flex w-fit items-center rounded-bl-xl rounded-tr-xl bg-secondary-green mb-4">
                                <p className="flex items-center gap-1 p-2 text-light-green text-sm font-semibold bg-primary-green rounded-tr-lg rounded-bl-lg leading-none">
                                    <span className="translate-y-[1.5px] align-middle text-secondary-green">{product.rating}</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10"
                                        height="10"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-star text-secondary-green"
                                    >
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                    </svg>
                                </p>
                                {product.reviewsCount ? (
                                    <p className="text-sm translate-y-[1.5px] px-2">
                                        {product.reviewsCount} {product.reviewsCount > 1 ? "reviews" : "review"}
                                    </p>
                                ) : (
                                    ""
                                )}
                            </div>
                        )}

                        <div className="mb-4">
                            <span
                                className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                                    product.isAvailable ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                }`}
                            >
                                {product.isAvailable ? "In Stock" : "Out of Stock"}
                            </span>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">Features:</h2>
                        <ul className="list-disc pl-5 text-gray-700">
                            {product.features?.map((feature, index) => (
                                <li key={index} className="pb-2">{feature}</li>
                            ))}
                        </ul>
                    </div>

                    {product.specifications && (
                        <div>
                            <h2 className="text-lg font-semibold mb-2">Specifications:</h2>
                            <ul className="list-disc pl-5 text-gray-700">
                                {Object.entries(product.specifications).map(([key, value]) => (
                                    <li className="pb-2" key={key}>
                                        <strong>{key}:</strong> {value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MainProductDetails;
