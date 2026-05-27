import "./globals.css";
import { Lato, Geist, Syne , Inter, DM_Sans } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});

const syne = Syne({
    subsets: ["latin"],
    variable: "--font-syne",
});

const lato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
    variable: "--font-lato",
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-dm-sans",
});

export const metadata: Metadata = {
    title: "Progloss",
    description: "Luxury car wash landing page",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={cn("font-sans", geist.variable, syne.variable, lato.variable, inter.variable, dmSans.variable)}>
            <body className={lato.className}>{children}</body>
        </html>
    );
}