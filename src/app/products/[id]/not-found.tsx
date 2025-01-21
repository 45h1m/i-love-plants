import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Product Not Found",
    description: "The requested product could not be found.",
    robots: "noindex",
};

export default function NotFound() {
    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
            <p className="text-gray-600 mb-4">Sorry, we couldn&apos;t find the product you&apos;re looking for.</p>
            <Link href="/products" className="text-green-600 hover:text-green-700 underline">
                Back to Products
            </Link>
        </div>
    );
}
