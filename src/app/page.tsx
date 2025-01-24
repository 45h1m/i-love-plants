import CategoryCard from "@/components/CategoryCard";
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

    const plantCategories = [
        {
            name: "Indoor Plants",
            image: "https://plus.unsplash.com/premium_photo-1682050733502-f58b7f499490?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "/categories/indoor-plants",
        },
        {
            name: "Outdoor Plants",
            image: "https://images.unsplash.com/photo-1605449669747-35d71b9436f8?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "/categories/outdoor-plants",
        },
        {
            name: "Flowering Plants",
            image: "https://images.unsplash.com/photo-1711861334705-947780b8b7d0?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "/categories/flowering-plants",
        },
        {
            name: "Succulents",
            image: "https://images.unsplash.com/photo-1513358130276-442a18340285?q=80&w=1702&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "/categories/succulents",
        },
        {
            name: "Herbs",
            image: "https://plus.unsplash.com/premium_photo-1678912442385-4f949f33ff06?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "/categories/herbs",
        },
        {
            name: "Air Purifying Plants",
            image: "https://plus.unsplash.com/premium_photo-1664033881630-d00b55891218?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "/categories/air-purifying-plants",
        },
        {
            name: "Cactus",
            image: "https://images.unsplash.com/photo-1554631221-f9603e6808be?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "/categories/cactus",
        },
        {
            name: "Hanging Plants",
            image: "https://images.unsplash.com/photo-1589523795621-795b9fe53a01?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "/categories/hanging-plants",
        },
        {
            name: "Bonsai",
            image: "https://images.unsplash.com/photo-1470364693235-a4fe27c60914?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "/categories/bonsai",
        },
        {
            name: "Edible Plants",
            image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "/categories/edible-plants",
        },
        {
            name: "Medicinal Plants",
            image: "https://images.unsplash.com/photo-1726924245333-1dc141ca70da?q=80&w=1844&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            url: "/categories/medicinal-plants",
        },
    ];

    const plantAccessories = [
        {
          name: "Plant Pots",
          image: "https://images.unsplash.com/photo-1620293106076-ad27d651efe3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          url: "/categories/plant-pots",
        },
        {
          name: "Hanging Planters",
          image: "https://images.unsplash.com/photo-1706268204438-d90ffb13aee3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          url: "/categories/hanging-planters",
        },
        {
          name: "Plant Stands",
          image: "https://plus.unsplash.com/premium_photo-1679921582421-f770b37cd4d5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          url: "/categories/plant-stands",
        },

        {
          name: "Terrariums",
          image: "https://images.unsplash.com/photo-1496678518751-46244eef08c4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          url: "/categories/terrariums",
        },
        {
          name: "Garden Tools",
          image: "https://plus.unsplash.com/premium_photo-1678836292814-c34f620aded1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          url: "/categories/garden-tools",
        },
      ];
    return (
        <>
            <section id="hero" className="z-10 flex flex-col gap-2 w-full h-[81vh] pb-2 max-w-7xl mx-auto">
                <div className="px-2 w-full h-3/4">
                    <div
                        className="large-section relative w-full h-full bg-primary-green rounded-3xl"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(34, 72, 33, 0.5), rgba(34, 72, 33, 0.5)), url(https://images.unsplash.com/photo-1525247862234-30193931fdf7?q=80&w=1652&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                            backgroundSize: "cover",
                            backgroundPosition: "bottom",
                        }}
                    >
                        <div className="w-full h-full p-8">
                            {/* Site Name and Logo */}
                            <div className="w-full h-full flex sm:flex-col">
                                <h1 className="w-1/2 text-3xl font-bold text-gray-900 dark:text-white">
                                    Bring Nature Home. Beautiful Plants for Every Space
                                </h1>

                                {/* Tagline */}
                                <p className="text-lg self-center text-white mb-6 text-right sm:text-left sm:self-start">
                                    Transform your space with lush, vibrant plants
                                </p>
                            </div>

                            {/* Call-to-Action Button */}
                            <div className="absolute bottom-[2rem] left-0 w-2/3 pl-8 pr-10">
                                <Link
                                    href="#plant-categories"
                                    className="flex h-20 justify-center items-center gap-4 text-center font-semibold text-lg w-full backdrop-blur-md bg-green-50/20 border border-gray-200/30 text-white rounded-2xl shadow-lg hover:bg-green-50/40 transition duration-300"
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
                    <div className="flex w-2/3 h-full gap-2 pl-2">
                        <div className="relative overflow-hidden w-full h-full bg-cover bg-center bg-[url(https://plus.unsplash.com/premium_photo-1674815329477-998744fe642f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] rounded-3xl">
                            <div className="absolute w-full p-2 bottom-0 text-white flex justify-center items-center">
                                <Link
                                    className="font-semibold text-lg w-full backdrop-blur-md bg-green-900/20 border border-gray-200/30 text-white shadow-sm hover:bg-green-50/40 transition duration-300 text-center rounded-2xl px-2 py-2 items-center justify-center flex"
                                    href={"/categories/indoor-plants"}
                                >
                                    Most Loved
                                </Link>
                            </div>
                        </div>
                        <div className="relative overflow-hidden w-full h-full bg-cover bg-center bg-[url(https://plus.unsplash.com/premium_photo-1682377521505-bae08ec5c8ff?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] rounded-3xl">
                            <div className="absolute w-full p-2 bottom-0 text-white flex justify-center items-center">
                                <Link
                                    className="font-semibold text-lg w-full backdrop-blur-md bg-green-900/20 border border-gray-200/30 text-white shadow-sm hover:bg-green-50/40 transition duration-300 text-center rounded-2xl px-2 py-2 items-center justify-center flex"
                                    href={"/categories/indoor-plants"}
                                >
                                    New Arivals
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bottom-r-section relative w-1/3 h-[40vh] bg-green-500 z-20 rounded-3xl overflow-hidden"
                        style={{
                            boxShadow: "0 0 0 8px #e9edde",
                        }}
                    >
                        <video className="w-full h-full object-cover" src="/videos/landing-v-1.mp4" muted autoPlay loop></video>
                        <div className="absolute top-0 left-0 w-full h-full bg-yellow-400/30"></div>
                    </div>
                </div>
            </section>
            <section id="plant-categories" className="bg-secondary-green mt-20 pb-16 pt-20">
                <div className="flex gap-2 p-2 max-w-7xl mx-auto">
                    <div className="w-[15vw] [writing-mode:vertical-rl] flex items-center text-xl">
                        <h3 className="sticky top-20 bg-color rounded-3xl p-2 py-4 rotate-180 font-bold tracking-wider">Plant Categories</h3>
                    </div>
                    <div
                        className="w-full"
                        style={{
                            columns: "200px",
                            gap: "1rem",
                        }}
                    >
                        {plantCategories.map((category) => (
                            <CategoryCard key={category.name} name={category.name} image={category.image} url={category.url} />
                        ))}
                    </div>
                </div>
            </section>
            <section id="other-categories" className="bg-color mt-8 pb-16 pt-8">
                <div className="flex gap-2 p-2 max-w-7xl mx-auto">
                    <div className="w-[15vw] [writing-mode:vertical-rl] flex items-center text-xl">
                        <h3 className="sticky top-20 bg-primary-green text-white rounded-3xl p-2 py-4 rotate-180 font-bold tracking-wider">
                            Other Categories
                        </h3>
                    </div>
                    <div
                        className="w-full"
                        style={{
                            columns: "200px",
                            gap: "1rem",
                        }}
                    >
                        {plantAccessories.map((category) => (
                            <CategoryCard key={category.name} name={category.name} image={category.image} url={category.url} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
