import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Arima } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

const arima = Arima({ weight: ["100", "200","300", "400", "500", "600", "700"], subsets: ["latin"] });

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
            <body className={`${geistSans.variable} ${arima.className} leading-none antialiased pb-20`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
