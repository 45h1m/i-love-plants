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
            url: "https://images.unsplash.com/photo-1664289283342-7dfd936b4b99?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "A serene mountain landscape with a lake in the foreground.",
        },
        {
            id: "2",
            url: "https://images.unsplash.com/photo-1615041443219-2a63ee45bb60?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "A forest path surrounded by dense green trees.",
        },
        {
            id: "3",
            url: "https://images.unsplash.com/photo-1696397279839-a2b8785c2113?q=80&w=1850&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "A golden sunset over the ocean with waves in the foreground.",
        },
        {
            id: "4",
            url: "https://images.unsplash.com/photo-1708868746670-8ac750b607ab?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "A snowy mountain peak under a bright blue sky.",
        },
        {
            id: "5",
            url: "https://images.unsplash.com/photo-1665479754958-1a8bdc47cc0d?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
