import Link from "next/link";
import Button from "./Button";
import AsideMenu from "./AsideMenu";

const Header = () => {
    return (
        <header className="px-2 sticky top-0">
            <div
                className="max-w-7xl rounded-b-3xl p-2 pt-4"
                style={{
                    backgroundImage: `url('/header-bg.webp')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%", // Set width as per your requirement
                }}
            >
                <div className="rounded-2xl bg-color flex p-2">
                    <div className="left h-full flex gap-2 items-center">
                        <AsideMenu />
                        <div className="logo h-full w-12 p-1">
                            <Link href={"/"}>
                                <img src="/ilp-logo.png" alt="ilp-logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="spacer flex flex-1"></div>
                    <div className="right flex gap-2 items-center">
                        <Button customClass="bg-primary-green text-light-green">Sign in</Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
