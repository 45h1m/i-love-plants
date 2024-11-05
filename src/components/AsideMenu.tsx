"use client"
import { ArrowBigLeft, Menu } from "lucide-react";
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
                easing: "cubic-bezier(0,0,0,1)"
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
                delay: 150
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
        <div className="relative">
            <Menu size={34} className="cursor-pointer" onClick={showMenu} />
            <aside ref={asideRef} className="fixed z-30 top-0 left-[-150%] flex h-full w-full" id="aside-menu">
                <div className="menu bg-gradient-to-br bg-primary-green w-2/3 shadow-2xl"></div>
                <div ref={asideHideSpaceRef} className="space bg-black/70 opacity-0 w-1/3 scale-x-150 origin-left" onClick={hideMenu} id="menu-hide-space"></div>
            </aside>
        </div>
    );
};

export default AsideMenu;
