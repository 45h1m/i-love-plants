import MainImageSlider from "@/components/MainImageSlider";
import MainProductDetails, { ProductDetails } from "@/components/MainProductDetails";

// Generate dynamic metadata for each product
export async function generateMetadata(){
    const product = {
        name: "Pothos",
        description: "This is a description of the product.",
        images: ["/", "/"],
    };

    if (!product) {
        return {
            title: "Product Not Found",
            description: "The requested product could not be found.",
        };
    }

    return {
        title: product.name,
        description: product.description,
        openGraph: {
            title: `${product.name} | Plant Store`,
            description: product.description,
            images: [
                {
                    url: product.images[0],
                    width: 600,
                    height: 400,
                    alt: product.name,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${product.name} | Plant Store`,
            description: product.description,
            images: [product.images[0]],
        },
    };
}

export default async function ProductDetailsPage() {
    const imageSet = [
        {
            id: "1",
            url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
            alt: "A serene mountain landscape with a lake in the foreground.",
        },
        {
            id: "2",
            url: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
            alt: "A forest path surrounded by dense green trees.",
        },
        {
            id: "3",
            url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
            alt: "A golden sunset over the ocean with waves in the foreground.",
        },
        {
            id: "4",
            url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
            alt: "A snowy mountain peak under a bright blue sky.",
        },
        {
            id: "5",
            url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
            alt: "A colorful hot air balloon floating over a field during sunrise.",
        },
    ];
    const product: ProductDetails = {
        id: "001",
        name: "Tulsi Plant (Holy Basil)",
        description:
            "A sacred plant in Indian culture, known for its medicinal and spiritual significance. Easy to grow and perfect for homes or gardens.",
        price: 10,
        currency: "Rs",
        imageUrl: "https://example.com/images/tulsi-plant.jpg",
        altText: "A fresh Tulsi plant in a terracotta pot.",
        rating: 4.8,
        reviewsCount: 45,
        isAvailable: true,
        categories: ["Plants", "Herbs", "Indoor Plants"],
        features: ["Air purifying properties", "Rich in antioxidants", "Low maintenance", "Ideal for homes and offices"],
        specifications: {
            "Botanical Name": "Ocimum tenuiflorum",
            Height: "6-12 inches",
            Light: "Full sun to partial shade",
            Watering: "Moderate, allow soil to dry slightly between waterings",
            "Pot Included": "Yes",
        },
        discount: {
            percentage: 15,
            finalPrice: 8.5,
        },
    };

    return (
        <div>
            <div className="flex flex-col lg:flex-row max-w-7xl mx-auto py-2 px-4 pb-4 gap-4 ">
                <MainImageSlider images={imageSet} />

                <MainProductDetails product={product} />
            </div>
        </div>
    );
}
