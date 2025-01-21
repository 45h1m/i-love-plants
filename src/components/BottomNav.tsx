import Link from "next/link";
import { Home, LayoutGrid, Package } from "lucide-react";
const BottomNav = () => {
    return (
        <div className="fixed bottom-0 z-10 w-full pb-2">
            <nav className="max-w-7xl bg-white p-2 px-4 rounded-3xl w-fit mx-auto shadow-2xl">
                <ul className="flex gap-4">
                    <Link href={"/"}>
                        <li>
                            <div className="flex justify-center flex-col items-center gap-2">
                                <Home className="size-5" />
                                <p className="text-sm font-bold">Home</p>
                            </div>
                        </li>
                    </Link>
                    <Link href={"/"}>
                        <li>
                            <div className="flex justify-center flex-col items-center gap-2">
                                <LayoutGrid className="size-5" />
                                <p className="text-sm font-bold">Categories</p>
                            </div>
                        </li>
                    </Link>
                    <Link href={"/"}>
                        <li>
                            <div className="flex justify-center flex-col items-center gap-2">
                                <Package className="size-5" />
                                <p className="text-sm font-bold">Orders</p>
                            </div>
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
};

export default BottomNav;
