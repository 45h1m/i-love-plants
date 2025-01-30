"use client";

import { useEffect, useState } from "react";
import { generateOTP, verifyOTP } from "@/app/actions/auth";
import Button from "@/components/Button"; // Adjust the import path as needed
import HorizontalScrollContainer from "@/components/HorizontalScrollContainer";
import { useSearchParams } from "next/navigation";
import { useAuth } from "@/context/authContext";

export default function LoginPage() {
    const [contact, setContact] = useState("");
    const [otp, setOtp] = useState("");
    const [step, setStep] = useState<"contact" | "otp">("contact");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const searchParams = useSearchParams();

    const auth = useAuth();

    // useEffect(()=>{
    //     if(auth.isAuthenticated) window.location.href = "/";
    // },[auth]);

    const handleSubmitContact = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        if (message) setMessage("");
        const result = await generateOTP(contact);
        setIsLoading(false);
        if (result.success) {
            setStep("otp");
            setMessage("OTP sent successfully!");
        } else {
            setMessage(result.message);
        }
    };

    const handleSubmitOTP = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        if (message) setMessage("");
        const result = await verifyOTP(contact, otp);
        setIsLoading(false);

        if (result.success) {
            setMessage("OTP verified successfully! Redirecting...");
            const redirect = searchParams.get("redirect");
            window.location.href = redirect ? redirect : "/";
        } else {
            setMessage(result.message);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen -mt-20 bg-cover bg-no-repeat bg-[url(https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] px-4">
                <div className="w-full max-w-md p-4 space-y-6 bg-green-50 border border-gray-300/50 bg-opacity-60 backdrop-blur-md rounded-lg shadow-lg animate-fade-in">
                    <h1 className="text-3xl font-bold text-center text-dark-green">Login / Signup</h1>
                    {step === "contact" ? (
                        <form onSubmit={handleSubmitContact} className="space-y-6">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green"
                                required
                            />
                            <Button type="submit" loading={isLoading} customClass="w-full bg-primary-green hover:bg-secondary-green text-white">
                                Send OTP
                            </Button>
                        </form>
                    ) : (
                        <form onSubmit={handleSubmitOTP} className="space-y-6">
                            <input
                                type="text"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green"
                                required
                            />
                            <Button type="submit" loading={isLoading} customClass="w-full bg-primary-green hover:bg-secondary-green text-white">
                                Verify OTP
                            </Button>
                        </form>
                    )}
                    {message && (
                        <p
                            className={`text-center w-fit p-1 px-2 rounded-md bg-opacity-80 ${
                                message.includes("successfully") ? "bg-green-700 text-white" : "bg-red-500 text-white"
                            }`}
                        >
                            {message}
                        </p>
                    )}
                </div>
            </div>
            <div className="max-w-7xl mx-auto p-4">
                <h2 className="text-2xl font-semibold mb-6 pl-8 max-w-7xl mx-auto pt-4">Sugested products</h2>
                <HorizontalScrollContainer />
            </div>
        </>
    );
}
