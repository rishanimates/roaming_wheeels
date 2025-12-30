import type { Metadata } from "next";
import { Inter, Bebas_Neue, Oswald, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { ConsentProvider } from "@/context/ConsentContext";
import ConsentBanner from "@/components/ConsentBanner";
import Script from "next/script";

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
    metadataBase: new URL("https://roamingwheeels.com"),
    title: "Roaming Wheeels | World Ride Expedition by Yogesh Alekari",
    description: "Meet Yogesh Alekari - Passionate international motorcycle rider connecting people across 32+ countries. Experience his journey of cultural exchange, meetups, and sharing Indian values with the world. Vasudhaiva Kutumbakam - The World is One Family.",
    keywords: [
        "motorcycle expedition",
        "world ride",
        "Yogesh Alekari",
        "Roaming Wheeels",
        "adventure travel",
        "India to London",
        "India to Europe Silk Route",
        "motorcycle journey",
        "travel blogger",
        "adventure YouTuber",
        "road safety",
        "Vasudhaiva Kutumbakam"
    ],
    authors: [{ name: "Yogesh Alekari", url: "https://roamingwheeels.com" }],
    creator: "Roaming Wheeels",
    publisher: "Roaming Wheeels",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://roamingwheeels.com",
        siteName: "Roaming Wheeels",
        title: "Roaming Wheeels | World Ride Expedition",
        description: "Passionate international motorcycle rider connecting people, cultures & hearts. Sharing Indian values with the world.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1089,
                height: 1200,
                alt: "Roaming Wheeels - Yogesh Alekari World Ride Expedition"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Roaming Wheeels | World Ride Expedition",
        description: "Connecting people, cultures & hearts across borders. Sharing Indian values with the world.",
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
        icon: "/images/logo.jpg",
        apple: "/images/logo.jpg",
    },
    manifest: "/site.webmanifest",
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
                {/* Google Consent Mode Default State */}
                <Script id="google-consent-mode" strategy="beforeInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        
                        // Default consent to 'denied' as per EU regulations
                        gtag('consent', 'default', {
                            'ad_storage': 'denied',
                            'analytics_storage': 'denied',
                            'ad_user_data': 'denied',
                            'ad_personalization': 'denied',
                            'wait_for_update': 500
                        });
                    `}
                </Script>

                {/* Google Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-4NWY827NSD"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-4NWY827NSD');
                    `}
                </Script>

                <ConsentProvider>
                    <ThemeProvider>
                        {children}
                        <ConsentBanner />
                    </ThemeProvider>
                </ConsentProvider>
            </body>
        </html>
    );
}
