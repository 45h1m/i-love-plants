import Button from "@/components/Button";

export interface ProductDetails {
    id?: string;
    images: string[]; // Array of image URLs
    title: string;
    description: string;
    price: number;
    offer?: string; // e.g., "New Arrival"
    rating?: number;
    productKey: string;
    tags: string[]; // Tags associated with the product
    stocks: number; // Number of available stocks
    available: boolean; // Availability status
    specifications?: { key: string; value: string }[]; // List of specifications
    features?: string[]; // List of features
    createdAt: Date; // ISO date string
    updatedAt: Date; // ISO date string
}


function MainProductDetails({ product }: { product: ProductDetails }) {
    return (
        <div className="max-w-2xl bg-white shadow-sm rounded-3xl p-6 mx-auto lg:mx-0">
            {/* Product Images */}
            <div className="w-full h-64 bg-gray-200 rounded-lg mb-6">
                {product.images && product.images.length > 0 ? (
                    <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                ) : (
                    <div className="flex items-center justify-center w-full h-full text-gray-500">
                        No Image Available
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-6">
                {/* Product Title and Description */}
                <div className="w-full">
                    <h1 className="text-2xl font-semibold mb-4">{product.title}</h1>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                </div>

                {/* Price and Offer Section */}
                <div className="w-full mb-4">
                    <span className="text-lg font-bold text-green-600">
                        <small className="text-md text-muted-green font-bold">Rs.</small>&nbsp;
                        <span className="text-2xl">{product.price}</span>
                    </span>
                    {product.offer && (
                        <span className="ml-2 text-sm bg-yellow-100 text-yellow-700 py-1 px-2 rounded">
                            {product.offer}
                        </span>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full pb-4">
                    <Button
                        customClass="justify-center w-full bg-primary-green text-light-green"
                        disabled={!product.available}
                        loading={false}
                    >
                        {product.available ? "Buy Now" : "Out of Stock"}
                    </Button>
                    <Button
                        customClass="justify-center w-full bg-secondary-green text-primary-green"
                        disabled={!product.available}
                        loading={false}
                    >
                        Add to Cart
                    </Button>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-gray-200 text-gray-700 text-sm py-1 px-2 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Features */}
                {product.features && product.features.length > 0 && (
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">Features:</h2>
                        <ul className="list-disc pl-5 text-gray-700">
                            {product.features.map((feature, index) => (
                                <li key={index} className="pb-2">
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Specifications */}
                {product.specifications && product.specifications.length > 0 && (
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Specifications:</h2>
                        <ul className="list-disc pl-5 text-gray-700">
                            {product.specifications.map((spec) => (
                                <li key={spec.key} className="pb-2">
                                    <strong>{spec.key}:</strong> {spec.value}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Rating and Stock Information */}
                <div className="flex flex-wrap gap-4 mb-4">
                    {product.rating && (
                        <div className="flex w-fit items-center rounded-bl-xl rounded-tr-xl bg-secondary-green">
                            <p className="flex items-center gap-1 p-2 text-light-green text-sm font-semibold bg-primary-green rounded-tr-lg rounded-bl-lg leading-none">
                                <span>{product.rating}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="lucide lucide-star text-secondary-green"
                                >
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                </svg>
                            </p>
                        </div>
                    )}

                    <span
                        className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                            product.available ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        }`}
                    >
                        {product.available ? "In Stock" : "Out of Stock"}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default MainProductDetails;
