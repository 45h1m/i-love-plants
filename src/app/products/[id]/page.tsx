import HorizontalScrollContainer from "@/components/HorizontalScrollContainer";
import MainImageSlider from "@/components/MainImageSlider";
import MainProductDetails from "@/components/MainProductDetails";
import ReviewsSection, { Review } from "@/components/ReviewsSection";
import productModel, { ProductDocument } from "@/models/product.model";
import { getAllProducts } from "@/utils/DBoperations";
import { notFound } from "next/navigation";

const initialReviews: Review[] = [
    {
        id: 3,
        user: "Clara Lee",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        rating: 3,
        comment: "The product is okay, but I expected more based on the description. Still, it gets the job done.",
        date: "01/14/2025",
        images: [
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150",
            "https://images.unsplash.com/photo-1517602302552-471fe67acf66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150",
        ],
    },
    {
        id: 1,
        user: "Alice Johnson",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        rating: 5,
        comment: "This product is fantastic! The quality exceeded my expectations, and the delivery was super quick.",
        date: "01/18/2025",
    },
    {
        id: 2,
        user: "Bob Smith",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        rating: 4,
        comment: "Really good product! It works perfectly, but the packaging could have been better.",
        date: "01/16/2025",
        images: ["https://images.unsplash.com/photo-1519681393784-d120267933ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150"],
    },
];

export async function generateStaticParams() {
    const products: ProductDocument[] = await getAllProducts();
    return products.map((product:any) => ({ id: product._id.toString() }));
}

export default async function ProductDetailsPage({ params }: any) {
    const { id } = params;
    let product: ProductDocument | null = null;
    try {
        product = await productModel.findById(id);
    } catch (error) {
        console.log(error);
        return notFound();
    }

    if (!product) {
        return notFound();
    }

    const imageSet: { id: string; url: string; alt: string }[] = Array.isArray(product.images)
        ? product.images.map((url: string, index: number) => ({ id: index+"-slider-img", url, alt: "slider-image" }))
        : [];

    return (
        <div>
            <div className="flex flex-col lg:flex-row max-w-7xl mx-auto py-2 px-4 pb-4 gap-4 ">
                <MainImageSlider images={imageSet} />
                <MainProductDetails product={product} />
            </div>
            <ReviewsSection reviews={initialReviews} />
            <h2 className="text-2xl font-semibold mb-6 pl-8 max-w-7xl mx-auto pt-4">Related products</h2>
            <HorizontalScrollContainer />
            <h2 className="text-2xl font-semibold mb-6 pl-8 max-w-7xl mx-auto pt-4">Indoor plants</h2>
            <HorizontalScrollContainer />
            <div className="py-4"></div>
        </div>
    );
}
