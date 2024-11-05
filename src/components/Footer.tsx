import { Home, LayoutGrid, Package } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="fixed w-full bottom-0 left-0 p-2 z-10">
            <div className="max-w-7xl bg-light-green w-fit p-2 px-4 rounded-3xl mx-auto border-2">
                <ul className="flex gap-4">
                    <Link href={"/"}>
                        <li>
                            <div className="flex justify-center flex-col items-center gap-2">
                                <Home className="size-5" />
                                <p className="text-sm">Home</p>
                            </div>
                        </li>
                    </Link>
                    <Link href={"/"}>
                        <li>
                            <div className="flex justify-center flex-col items-center gap-2">
                                <LayoutGrid className="size-5" />
                                <p className="text-sm">Categories</p>
                            </div>
                        </li>
                    </Link>
                    <Link href={"/"}>
                        <li>
                            <div className="flex justify-center flex-col items-center gap-2">
                                <Package className="size-5" />
                                <p className="text-sm">Orders</p>
                            </div>
                        </li>
                    </Link>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
