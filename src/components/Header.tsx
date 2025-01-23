import Link from "next/link";
import AsideMenu from "./AsideMenu";
import SearchBar from "./SearchBar";
import TopNavBar from "./TopNavBar";

const Header = () => {
    return (
        <header className="sticky top-0 z-50">
            <div className="max-w-7xl rounded-b-3xl p-2 mx-auto">
                <div className="rounded-2xl bg-white flex p-2 shadow-md shadow-green-800/10">
                    <div className="left h-full flex gap-2 items-center">
                        <AsideMenu />
                        <div className="logo h-full w-12 p-1">
                            <Link href={"/"}>
                                <img src="/ilp-logo.png" alt="ilp-logo" />
                            </Link>
                        </div>
                        <SearchBar />
                    </div>
                    <div className="spacer flex flex-1"></div>
                    <div className="right flex gap-2 items-center">
                        <TopNavBar/>
                        {/* <Button customClass="bg-primary-green text-light-green">Sign in</Button> */}
                    </div>
                </div>
            </div>
            <div className="fixed top-0 left-0 w-full h-[10vh] -z-30 gradient-green-to-b"></div>
        </header>
    );
};

export default Header;
