"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, User, Settings, HelpCircle, Shield, LogOut, ChevronDown, ChevronUp, Bell, CreditCard, Key } from "lucide-react";
import { useAuth } from "@/context/authContext";
import axios from "axios";
import Image from "next/image";
import { set } from "mongoose";
import { usePathname, useSearchParams } from "next/navigation";

// Define menu structure
const mainMenuItems = [
    {
        icon: User,
        label: "Account",
        href: "/account/edit",
    },
];

const settingsSubmenu = [
    {
        icon: Key,
        label: "Account Settings",
        href: "/settings/account",
    },
    {
        icon: CreditCard,
        label: "Billing",
        href: "/settings/billing",
    },
];

const notificationsSubmenu = [
    {
        label: "Email Notifications",
        href: "/notifications/email",
    },
    {
        label: "Push Notifications",
        href: "/notifications/push",
    },
];

const additionalOptions = [
    {
        icon: Settings,
        label: "Additional Option 1",
        href: "/option1",
    },
    {
        icon: Settings,
        label: "Additional Option 2",
        href: "/option2",
    },
    {
        icon: Settings,
        label: "Additional Option 3",
        href: "/option3",
    },
];

const SideMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedSections, setExpandedSections] = useState({
        settings: false,
        notifications: false,
    });

    const authContext = useAuth();

    const toggleSection = (section) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    async function handleLogout(e) {
        e.preventDefault();
        try {
            const res = await axios.post("/api/auth/logout", {}, { withCredentials: true });

            if (res.status === 200) {
                console.log("Logged out successfully");
                window.location.href = "/login"; // Redirect to login page
            } else {
                console.error("Logout failed");
            }
        } catch (error) {
            console.error("Error logging out:", error);
        }
    }

    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname, searchParams]);

    const MenuLink = ({ href, icon: Icon = Settings, label, className = "" }) => (
        <Link href={href} className={`w-full flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg ${className}`}>
            {Icon && <Icon size={20} />}
            <span>{label}</span>
        </Link>
    );

    return (
        <div>
            {/* Hamburger Button */}
            <button onClick={toggleMenu} className="flex items-center">
                <svg
                    className="cursor-pointer ml-2 text-primary-green"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M4 18H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 12L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 6L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </button>

            {/* Backdrop */}
            {isOpen && <div className="fixed z-20 inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity" onClick={toggleMenu} />}

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 z-30 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out flex flex-col ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {/* Close button */}
                <button onClick={toggleMenu} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg z-10">
                    <X size={24} />
                </button>

                {/* Scrollable content area */}
                <div className="flex flex-col h-full overflow-hidden">
                    {/* Main content - scrollable */}
                    <div className="flex-1 overflow-y-auto">
                        {/* Profile section */}
                        <div className="pt-16 px-4">
                            {authContext.user?.name && authContext.user?.name !== "undefined" ? (
                                <div className="flex items-center gap-3 p-2 mb-6">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                        <User size={20} />
                                    </div>
                                    <div>
                                        <div className="font-semibold">{authContext.user?.name}</div>
                                        <div className="text-xs text-gray-500">{authContext.user?.email || "Add contact"}</div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center flex-col w-full gap-3 mb-2">
                                    <Image
                                        className="rounded-3xl"
                                        width={200}
                                        height={200}
                                        alt="login-image"
                                        src={"/images/click-account-panda.webp"}
                                    />
                                    <div className="text-xl font-semibold text-center">To complete your account 👇</div>
                                    <div className="w-full">
                                        {/* <Link
                                            className="w-full flex items-center gap-3 p-2 hover:bg-gray-100 hover:text-gray-700 rounded-lg text-white bg-primary-green"
                                            href={"/account/edit"}
                                        >
                                            <LogOut size={20} />
                                            Login
                                        </Link> */}
                                    </div>
                                </div>
                            )}

                            {!authContext.isAuthenticated && (
                                <div className="flex items-center flex-col w-full gap-3 mb-6">
                                    <Image className="rounded-3xl" width={200} height={200} alt="login-image" src={"/images/login-panda.webp"} />
                                    <div className="text-2xl font-semibold text-center">Even panda is saying to login</div>
                                    <div className="w-full">
                                        <Link
                                            className="w-full flex items-center gap-3 p-2 hover:bg-gray-100 hover:text-gray-700 rounded-lg text-white bg-primary-green"
                                            href={"/login"}
                                        >
                                            <LogOut size={20} />
                                            Login
                                        </Link>
                                    </div>
                                </div>
                            )}

                            {/* Menu items */}
                            <div className="space-y-2">
                                {mainMenuItems.map((item, index) => (
                                    <MenuLink key={index} {...item} />
                                ))}

                                {/* Settings section (collapsible) */}
                                <div>
                                    <button
                                        onClick={() => toggleSection("settings")}
                                        className="w-full flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Settings size={20} />
                                            <span>Settings</span>
                                        </div>
                                        {expandedSections.settings ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </button>
                                    {expandedSections.settings && (
                                        <div className="ml-8 space-y-2 mt-2">
                                            {settingsSubmenu.map((item, index) => (
                                                <MenuLink key={index} {...item} />
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Notifications section (collapsible) */}
                                <div>
                                    <button
                                        onClick={() => toggleSection("notifications")}
                                        className="w-full flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Bell size={20} />
                                            <span>Notifications</span>
                                        </div>
                                        {expandedSections.notifications ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </button>
                                    {expandedSections.notifications && (
                                        <div className="ml-8 space-y-2 mt-2">
                                            {notificationsSubmenu.map((item, index) => (
                                                <MenuLink key={index} {...item} />
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Additional Options */}
                                {additionalOptions.map((item, index) => (
                                    <MenuLink key={index} {...item} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom section - fixed */}
                    <div className="flex-shrink-0 p-4 border-t bg-white">
                        <div className="space-y-2">
                            <MenuLink icon={HelpCircle} label="Help" href="/help" />
                            <MenuLink icon={Shield} label="Privacy Policy" href="/privacy-policy" />

                            {authContext.isAuthenticated && (
                                <Link
                                    href="#"
                                    className="w-full flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg text-red-600"
                                    onClick={handleLogout}
                                >
                                    <LogOut size={20} />
                                    <span>Logout</span>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;
