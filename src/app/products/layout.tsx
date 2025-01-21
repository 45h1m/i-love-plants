import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: "%s | Plant Store",
        default: "Shop Plants Online | Plant Store",
    },
    description: "Discover our collection of beautiful indoor and outdoor plants. Find the perfect plant for your space.",
    keywords: ["plants", "indoor plants", "garden", "houseplants", "plant store"],
    robots: "index, follow",
    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "Plant Store",
        images: [
            {
                url: "/api/placeholder/1200/630", // Replace with your actual OG image
                width: 1200,
                height: 630,
                alt: "Plant Store Collection",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Shop Plants Online | Plant Store",
        description: "Discover our collection of beautiful indoor and outdoor plants.",
        images: ["/api/placeholder/1200/630"], // Replace with your actual Twitter card image
    },
};

interface ProductsLayoutProps {
    children: React.ReactNode;
}

export default async function ProductsLayout({ children }: ProductsLayoutProps) {
    console.log(children)
    return <main>{children}</main>;
}
