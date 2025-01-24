import Link from "next/link";
const HeroSection = () => {
    return (
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
                            <h1 className="w-1/2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
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
                                href={"#most-loved"}
                            >
                                Most Loved
                            </Link>
                        </div>
                    </div>
                    <div className="relative overflow-hidden w-full h-full bg-cover bg-center bg-[url(https://plus.unsplash.com/premium_photo-1682377521505-bae08ec5c8ff?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] rounded-3xl">
                        <div className="absolute w-full p-2 bottom-0 text-white flex justify-center items-center">
                            <Link
                                className="font-semibold text-lg w-full backdrop-blur-md bg-green-900/20 border border-gray-200/30 text-white shadow-sm hover:bg-green-50/40 transition duration-300 text-center rounded-2xl px-2 py-2 items-center justify-center flex"
                                href={"#new-arivals"}
                            >
                                New Arivals
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className="bottom-r-section relative w-1/3 h-[40vh] bg-green-500 z-20 rounded-3xl"
                    style={{
                        boxShadow: "0 0 0 8px #e9edde",
                    }}
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-yellow-400/30 rounded-3xl overflow-hidden">
                        <video className="w-full h-full object-cover" src="/videos/landing-v-1.mp4" muted autoPlay loop></video>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
