"use client";
import { Menu } from "lucide-react";
import { useRef } from "react";

const AsideMenu = () => {
    const asideRef = useRef<HTMLDivElement>(null);
    const asideHideSpaceRef = useRef<HTMLDivElement>(null);

    const showMenu = () => {
        asideRef.current?.animate(
            [
                // keyframes
                { left: "-150%" },
                { left: "0%" },
            ],
            {
                // timing options
                duration: 300,
                fill: "forwards",
                easing: "cubic-bezier(0,0,0,1)",
            }
        );
        asideHideSpaceRef.current?.animate(
            [
                // keyframes
                { opacity: "0" },
                { opacity: "1" },
            ],
            {
                // timing options
                duration: 200,
                fill: "forwards",
                delay: 150,
            }
        );
    };

    const hideMenu = () => {
        asideRef.current?.animate(
            [
                // keyframes
                { left: "0%" },
                { left: "-150%" },
            ],
            {
                // timing options
                duration: 500,
                fill: "forwards",
            }
        );
        asideHideSpaceRef.current?.animate(
            [
                // keyframes
                { opacity: "1" },
                { opacity: "0" },
            ],
            {
                // timing options
                duration: 70,
                fill: "forwards",
            }
        );
    };

    return (
        <div className="relative text-primary-green">
            <svg onClick={showMenu} className="cursor-pointer ml-2" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 18H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 12L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 6L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <aside ref={asideRef} className="fixed z-50 top-0 left-[-150%] flex h-full w-full" id="aside-menu">
                <div className="menu bg-gradient-to-br bg-primary-green w-sm shadow-2xl"></div>
                <div
                    ref={asideHideSpaceRef}
                    className="space bg-black/70 opacity-0 w-full scale-x-150 origin-left"
                    onClick={hideMenu}
                    id="menu-hide-space"
                ></div>
            </aside>
        </div>
    );
};

export default AsideMenu;
