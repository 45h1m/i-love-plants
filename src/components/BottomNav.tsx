"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/cartContext";
import { Home, Package, ShoppingCart } from "lucide-react";

const menuItems = [
    {
        href: "/",
        icon: Home,
        label: "Home",
    },
    {
        href: "/cart",
        icon: ShoppingCart,
        label: "Cart",
    },
    {
        href: "/account/orders",
        icon: Package,
        label: "Orders",
    },
];

const BottomNav = () => {
    const path = usePathname();
    const { cart } = useCart();

    return (
        <div className="fixed bottom-0 z-40 w-full pb-2">
            <nav className="max-w-7xl bg-white text-primary-green p-2 rounded-3xl w-fit mx-auto shadow-2xl">
                <ul className="flex items-center">
                    {menuItems.map(({ href, icon: Icon, label }) => (
                        <Link key={href} href={href}>
                            <li
                                className={`relative size-14 flex justify-center items-center rounded-2xl p-1 ${
                                    path === href && "bg-secondary-green"
                                }`}
                            >
                                {cart.length > 0 && label === "Cart" && (
                                    <span className="absolute -top-1 right-0 text-xs text-white bg-red-700 px-1 rounded-full flex justify-center items-center">
                                        {cart.length}
                                    </span>
                                )}
                                <div className="flex justify-center flex-col items-center gap-2">
                                    <Icon className="size-5" />
                                    <p className="text-sm font-bold leading-none">{label}</p>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default BottomNav;
