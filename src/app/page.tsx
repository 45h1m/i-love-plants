import Link from "next/link";


export default function Home() {
    // const products = [
    //     {
    //         title: "Peace Lily",
    //         description: "Air Purifying Indoor Plant",
    //         price: 189,
    //         url: "/",
    //         loved: false,
    //         offer: "Free Pot",
    //         rating: 4.3,
    //         thumbnail: "https://images.pexels.com/photos/3125197/pexels-photo-3125197.jpeg?w=200",
    //         small: true,
    //     },
    //     {
    //         title: "Monstera Deliciosa",
    //         description: "Trending Indoor Plant",
    //         price: 399,
    //         url: "/",
    //         loved: true,
    //         offer: "Limited Stock",
    //         rating: 4.7,
    //         thumbnail: "https://images.pexels.com/photos/6297088/pexels-photo-6297088.jpeg?w=200",
    //     },
    //     {
    //         title: "String of Pearls",
    //         description: "Hanging Succulent",
    //         price: 159,
    //         url: "/",
    //         loved: true,
    //         offer: "New Arrival",
    //         rating: 4.6,
    //         thumbnail: "https://images.pexels.com/photos/1903964/pexels-photo-1903964.jpeg?w=200",
    //     },
    //     {
    //         title: "Calathea",
    //         description: "Prayer Plant",
    //         price: 279,
    //         url: "/",
    //         loved: false,
    //         offer: "25% off",
    //         rating: 4.5,
    //         thumbnail: "https://images.pexels.com/photos/6297385/pexels-photo-6297385.jpeg?w=200",
    //     },
    //     {
    //         title: "Rubber Plant",
    //         description: "Air Purifying",
    //         price: 339,
    //         url: "/",
    //         loved: true,
    //         offer: "Premium Quality",
    //         rating: 4.6,
    //         thumbnail: "https://images.pexels.com/photos/6297089/pexels-photo-6297089.jpeg?w=200",
    //     },
    //     {
    //         title: "Desert Cactus",
    //         description: "Succulent Collection",
    //         price: 199,
    //         url: "/",
    //         loved: true,
    //         offer: "Gift Ready",
    //         rating: 4.8,
    //         thumbnail: "https://images.pexels.com/photos/1903965/pexels-photo-1903965.jpeg?w=200",
    //     },
    //     {
    //         title: "Japanese Maple",
    //         description: "Exotic Outdoor Plant",
    //         price: 699,
    //         url: "/",
    //         loved: true,
    //         offer: "15% off",
    //         rating: 4.8,
    //         thumbnail: "https://images.pexels.com/photos/1146708/pexels-photo-1146708.jpeg?w=200",
    //     },
    //     {
    //         title: "Lavender Plant",
    //         description: "Fragrant Herb",
    //         price: 199,
    //         url: "/",
    //         loved: true,
    //         offer: "5% off",
    //         rating: 4.3,
    //         thumbnail: "https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg",
    //     },
    //     {
    //         title: "Jade Plant",
    //         description: "Low Maintenance",
    //         price: 299,
    //         url: "/",
    //         loved: false,
    //         offer: "New Arrival",
    //         rating: 4.1,
    //         thumbnail: "https://images.pexels.com/photos/6597559/pexels-photo-6597559.jpeg",
    //     },
    //     {
    //         title: "Money Plant",
    //         description: "Brings Good Luck",
    //         price: 99,
    //         url: "/",
    //         loved: true,
    //         offer: "10% off",
    //         rating: 4.6,
    //         thumbnail: "https://images.pexels.com/photos/3644742/pexels-photo-3644742.jpeg",
    //     },
    // ];

    return (
        <div className="z-10 flex flex-col gap-2 w-full h-[81vh] pb-2 max-w-7xl mx-auto">
            <div className="px-2 w-full h-3/4">
                <div
                    className="relative w-full h-full bg-primary-green rounded-3xl"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(34, 72, 33, 0.5), rgba(34, 72, 33, 0.5)), url(https://images.unsplash.com/photo-1525247862234-30193931fdf7?q=80&w=1652&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                        backgroundSize: "cover",
                        backgroundPosition: "bottom",
                    }}
                >
                    <div className="w-full h-full p-8">
                        {/* Site Name and Logo */}
                        <div className="w-full h-full flex lg:flex-col">
                            <h1 className="w-1/2 text-3xl font-bold text-gray-900 dark:text-white">
                                Bring Nature Home: Beautiful Plants for Every Space
                            </h1>

                            {/* Tagline */}
                            <p className="text-lg self-center text-white mb-6 text-right lg:text-left lg:self-start">
                                Transform your space with lush, vibrant plants
                            </p>
                        </div>

                        {/* Call-to-Action Button */}
                        <div className="absolute bottom-[2rem] left-0 w-1/2 pl-8 pr-10">
                            <Link
                                href="/products"
                                className="flex h-20 justify-center items-center gap-4 text-center font-semibold text-lg w-full backdrop-blur-md bg-green-300/10 border border-gray-200/30 text-white rounded-2xl shadow-lg hover:bg-green-50/20 transition duration-300"
                            >
                            <span className="hidden sm:block">Explore Now</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-circle-arrow-right"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M8 12h8" />
                                    <path d="m12 16 4-4-4-4" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div
                        className="top-r-section absolute top-0 right-0 w-[40%] h-20 bg-green-700 rounded-3xl"
                        style={{
                            boxShadow: "0 0 0 8px #e9edde",
                        }}
                    ></div>
                </div>
            </div>
            <div className="w-full h-1/4 flex items-end gap-2 pr-2">
                <div className="flex w-full h-full gap-2 pl-2">
                    <div className="w-full h-full bg-green-500 rounded-3xl"></div>
                    <div className="w-full h-full bg-green-500 rounded-3xl"></div>
                </div>
                <div
                    className="bottom-r-section relative w-full h-[40vh] bg-green-500 z-20 rounded-3xl"
                    style={{
                        boxShadow: "0 0 0 8px #e9edde",
                    }}
                ></div>
            </div>
        </div>
    );
}
