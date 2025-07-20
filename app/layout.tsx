import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Lilian Caffier",
    description: "Hello, my name is Lilian Caffier, I’m 21 years old, and I’m currently a higher education student specializing in fullstack web development.",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable}  bg-white dark:bg-black antialiased`}
        >
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    );
}
