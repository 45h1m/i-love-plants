"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, Package } from "lucide-react";
const BottomNav = () => {
    const path = usePathname();
    return (
        <div className="fixed bottom-0 z-30 w-full pb-2">
            <nav className="max-w-7xl bg-white text-primary-green p-2 rounded-3xl w-fit mx-auto shadow-2xl">
                <ul className="flex items-center">
                    <Link href={"/#hero"} className={`${path === "/" && "bg-secondary-green"} rounded-2xl p-1 px-2`}>
                        <li className="">
                            <div className="flex justify-center flex-col items-center gap-2">
                                <Home className="size-5" />
                                <p className="text-sm font-bold leading-none">Home</p>
                            </div>
                        </li>
                    </Link>
                    <Link href={"/#plant-categories"} className={`${path === "/#plant-categories" || path === "/#plant-categories" && "bg-secondary-green"} rounded-2xl p-1 px-2`}>
                        <li>
                            <div className="flex justify-center flex-col items-center gap-2">
                                <LayoutGrid className="size-5" />
                                <p className="text-sm font-bold leading-none">Categories</p>
                            </div>
                        </li>
                    </Link>
                    <Link href={"/account/orders"} className={`${path === "/account/orders" && "bg-secondary-green"} rounded-2xl p-1 px-2`}>
                        <li>
                            <div className="flex justify-center flex-col items-center gap-2">
                                <Package className="size-5" />
                                <p className="text-sm font-bold leading-none">Orders</p>
                            </div>
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
};

export default BottomNav;
