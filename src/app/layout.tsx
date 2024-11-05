import type { Metadata } from "next";
import localFont from "next/font/local";
import { Arima } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const arima = Arima({ weight: "700", subsets: ["latin"] });

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: {
        default: "I Love Plants",
        template: "%s | ILovePlants",
    },
    description: "One stop for your plant needs.",
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${arima.className} leading-none antialiased`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
