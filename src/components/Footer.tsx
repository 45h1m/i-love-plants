import { Home, LayoutGrid, Package } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer
            className="fixed w-full bottom-0 left-0 p-2 z-10"
        >
            <div style={{
                backgroundImage: `url('/grass-bottom.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                width: "100%", // Set width as per your requirement
                height: "23vh",
                position: "absolute",
                left: "0",
                bottom: "0",
            }}></div>
            <nav className="max-w-7xl bg-green-100/80 backdrop-blur-lg w-fit p-2 px-4 rounded-3xl mx-auto border shadow-2xl">
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
        </footer>
    );
};

export default Footer;
