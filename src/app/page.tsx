"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Journey from "@/components/Journey";
import Blog from "@/components/Blog";
import Media from "@/components/Media";
import Gallery from "@/components/Gallery";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useTheme } from "@/context/ThemeContext";

// Section configuration
const sections = [
    { id: "home", component: Hero },
    { id: "about", component: About },
    { id: "mission", component: Mission },
    { id: "journey", component: Journey },
    { id: "blog", component: Blog },
    { id: "media", component: Media },
    { id: "gallery", component: Gallery },
    { id: "partners", component: Partners },
    { id: "contact", component: Contact },
];

export default function Home() {
    const [activeSection, setActiveSection] = useState("home");
    const mainRef = useRef<HTMLDivElement>(null);
    const sectionRefs = useRef<Map<string, HTMLDivElement>>(new Map());
    const { backgroundImage } = useTheme();

    // Handle section navigation
    const handleSectionChange = (sectionId: string) => {
        setActiveSection(sectionId);
        
        // Scroll to section
        const sectionElement = sectionRefs.current.get(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    // Track active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;
            
            for (const [id, element] of sectionRefs.current.entries()) {
                const { offsetTop, offsetHeight } = element;
                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                    setActiveSection(id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Set section ref
    const setSectionRef = (id: string) => (el: HTMLDivElement | null) => {
        if (el) {
            sectionRefs.current.set(id, el);
        }
    };

    return (
        <div className="relative min-h-screen bg-theme-bg transition-colors duration-300">
            {/* Background Image */}
            {backgroundImage && (
                <div 
                    className="bg-image-overlay"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                />
            )}
            
            {/* Noise texture overlay */}
            <div className="noise-overlay" />
            
            {/* Theme Switcher */}
            <ThemeSwitcher />
            
            {/* Fixed Header */}
            <Header 
                activeSection={activeSection} 
                onSectionChange={handleSectionChange} 
            />

            {/* Main Content */}
            <main ref={mainRef} className="relative">
                {/* Hero Section - Special treatment */}
                <div ref={setSectionRef("home")}>
                    <Hero onNavigate={handleSectionChange} />
                </div>

                {/* Other Sections */}
                {sections.slice(1).map((section) => {
                    const Component = section.component;
                    return (
                        <div 
                            key={section.id} 
                            ref={setSectionRef(section.id)}
                            id={section.id}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Component />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    );
                })}
            </main>

            {/* Footer */}
            <Footer onNavigate={handleSectionChange} />

            {/* Floating Action Buttons */}
            <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-3">
                {/* Live Location Indicator */}
                <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSectionChange("journey")}
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-ember to-brand-gold text-white shadow-lg shadow-brand-ember/30 flex items-center justify-center group relative"
                >
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-brand-midnight animate-pulse" />
                    <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                        />
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                        />
                    </svg>
                    
                    {/* Tooltip */}
                    <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-brand-charcoal text-white text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        Track Live Location
                    </span>
                </motion.button>
            </div>

            {/* Progress Indicator Dots (Mobile) */}
            <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2">
                {sections.map((section) => (
                    <motion.button
                        key={section.id}
                        onClick={() => handleSectionChange(section.id)}
                        whileHover={{ scale: 1.2 }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            activeSection === section.id 
                                ? "bg-brand-ember scale-125" 
                                : "bg-white/20 hover:bg-white/40"
                        }`}
                        title={section.id.charAt(0).toUpperCase() + section.id.slice(1)}
                    />
                ))}
            </div>
        </div>
    );
}
