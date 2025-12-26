import type { Metadata } from "next";
import { Inter, Bebas_Neue, Oswald, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

// Font configurations
const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

const bebasNeue = Bebas_Neue({
    variable: "--font-bebas",
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

const oswald = Oswald({
    variable: "--font-oswald",
    subsets: ["latin"],
    display: "swap",
});

const playfair = Playfair_Display({
    variable: "--font-playfair",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Roaming Wheels | World Ride Expedition by Yogesh Alekari",
    description: "From a remote village in India to the world stage. Follow Yogesh Alekari's epic motorcycle expedition across 32+ countries, 40,000+ kilometers. Bridging cultures, inspiring dreams, and proving that where you come from doesn't define where you can go.",
    keywords: [
        "motorcycle expedition",
        "world ride",
        "Yogesh Alekari",
        "adventure travel",
        "India to London",
        "Euro-Africa Odyssey",
        "motorcycle journey",
        "travel blogger",
        "adventure YouTuber",
        "road safety",
        "Vasudhaiva Kutumbakam"
    ],
    authors: [{ name: "Yogesh Alekari", url: "https://roamingwheels.com" }],
    creator: "Roaming Wheels",
    publisher: "Roaming Wheels",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://roamingwheels.com",
        siteName: "Roaming Wheels",
        title: "Roaming Wheels | World Ride Expedition",
        description: "One Rider. One Motorcycle. Infinite Possibilities. Follow the epic journey across continents.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Roaming Wheels - World Ride Expedition"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Roaming Wheels | World Ride Expedition",
        description: "One Rider. One Motorcycle. Infinite Possibilities.",
        creator: "@yogeshalekari",
        images: ["/og-image.jpg"]
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#FF6B35" },
        { media: "(prefers-color-scheme: dark)", color: "#0B0D0F" },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" data-theme="sand-dunes">
            <head>
                {/* Preconnect to Google Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body
                className={`
                    ${inter.variable} 
                    ${bebasNeue.variable} 
                    ${oswald.variable} 
                    ${playfair.variable} 
                    antialiased 
                    bg-theme-bg 
                    text-theme-text
                    overflow-x-hidden
                `}
                suppressHydrationWarning
            >
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
