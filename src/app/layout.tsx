import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Arima } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import BottomNav from "@/components/BottomNav";
import { CartProvider } from "@/context/cartContext";

const arima = Arima({ weight: ["100", "200", "300", "400", "500", "600", "700"], subsets: ["latin"] });

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: {
        default: "I Love Plants",
        template: "%s | ILovePlants",
    },
    description: "One stop for your plant needs.",
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: dark)", color: "#121212" }, // Dark mode color
        { media: "(prefers-color-scheme: light)", color: "#224821" }, // Light mode color
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            {
                <Head>
                    <meta name="theme-color" content="#224821" />
                </Head>
            }
            <body className={`${geistSans.variable} ${arima.className} leading-none antialiased`}>
                <Header />
                <CartProvider>
                {children}
                    <BottomNav />
                </CartProvider>
                <Footer />
                <div
                    style={{
                        backgroundImage: `url('/grass-bottom.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                        width: "100%",
                        maxWidth: "1200px",
                        height: "13vh",
                        position: "fixed",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        pointerEvents: "none",
                        zIndex: "25",
                        margin: "0 auto",
                    }}
                ></div>
            </body>
        </html>
    );
}
