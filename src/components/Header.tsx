"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    Menu, X, MapPin, User, Target, Newspaper, 
    Youtube, Camera, Handshake, Mail, ChevronRight 
} from "lucide-react";

interface HeaderProps {
    activeSection: string;
    onSectionChange: (section: string) => void;
}

const navItems = [
    { id: "home", label: "Home", icon: MapPin },
    { id: "about", label: "About", icon: User },
    { id: "mission", label: "Mission", icon: Target },
    { id: "journey", label: "Journey", icon: MapPin },
    { id: "blog", label: "Blog", icon: Newspaper },
    { id: "media", label: "Media", icon: Youtube },
    { id: "gallery", label: "Gallery", icon: Camera },
    { id: "partners", label: "Partners", icon: Handshake },
    { id: "contact", label: "Contact", icon: Mail },
];

export default function Header({ activeSection, onSectionChange }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (sectionId: string) => {
        onSectionChange(sectionId);
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled 
                        ? "bg-brand-midnight/95 backdrop-blur-xl shadow-2xl" 
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <motion.div 
                            className="flex items-center gap-3 cursor-pointer"
                            whileHover={{ scale: 1.02 }}
                            onClick={() => handleNavClick("home")}
                        >
                            <div className="relative">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-ember to-brand-gold flex items-center justify-center">
                                    <span className="text-xl font-bold text-white">RW</span>
                                </div>
                                <motion.div 
                                    className="absolute -inset-1 rounded-full bg-gradient-to-br from-brand-ember to-brand-gold opacity-30 blur-sm"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="text-xl font-bold text-white tracking-tight">
                                    Roaming<span className="text-gradient">Wheels</span>
                                </h1>
                                <p className="text-xs text-text-secondary tracking-widest uppercase">
                                    World Ride Expedition
                                </p>
                            </div>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navItems.slice(0, 7).map((item) => (
                                <motion.button
                                    key={item.id}
                                    onClick={() => handleNavClick(item.id)}
                                    onMouseEnter={() => setHoveredItem(item.id)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                    className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                                        activeSection === item.id 
                                            ? "text-brand-ember" 
                                            : "text-text-secondary hover:text-white"
                                    }`}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {item.label}
                                    
                                    {/* Active indicator */}
                                    {activeSection === item.id && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-ember"
                                        />
                                    )}
                                    
                                    {/* Hover glow */}
                                    <AnimatePresence>
                                        {hoveredItem === item.id && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                className="absolute inset-0 bg-white/5 rounded-lg -z-10"
                                            />
                                        )}
                                    </AnimatePresence>
                                </motion.button>
                            ))}
                        </nav>

                        {/* CTA Button & Mobile Menu Toggle */}
                        <div className="flex items-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleNavClick("contact")}
                                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-brand-ember to-brand-terracotta text-white font-semibold rounded-full text-sm shadow-lg hover:shadow-brand-ember/30 transition-all"
                            >
                                Collaborate
                                <ChevronRight className="w-4 h-4" />
                            </motion.button>

                            {/* Mobile Menu Button */}
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white"
                            >
                                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Progress Bar */}
                <motion.div 
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-brand-ember via-brand-gold to-brand-ember"
                    initial={{ width: "0%" }}
                    animate={{ width: isScrolled ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                />
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        {/* Backdrop */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-brand-charcoal shadow-2xl"
                        >
                            <div className="flex flex-col h-full">
                                {/* Mobile Menu Header */}
                                <div className="flex items-center justify-between p-6 border-b border-white/10">
                                    <div>
                                        <h2 className="text-xl font-bold text-white">Menu</h2>
                                        <p className="text-sm text-text-secondary">Navigate the journey</p>
                                    </div>
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                {/* Navigation Items */}
                                <nav className="flex-1 p-6 overflow-y-auto">
                                    <div className="space-y-2">
                                        {navItems.map((item, index) => {
                                            const Icon = item.icon;
                                            return (
                                                <motion.button
                                                    key={item.id}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.05 }}
                                                    onClick={() => handleNavClick(item.id)}
                                                    className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all ${
                                                        activeSection === item.id 
                                                            ? "bg-brand-ember/20 text-brand-ember" 
                                                            : "text-text-secondary hover:bg-white/5 hover:text-white"
                                                    }`}
                                                >
                                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                                        activeSection === item.id 
                                                            ? "bg-brand-ember/20" 
                                                            : "bg-white/5"
                                                    }`}>
                                                        <Icon size={18} />
                                                    </div>
                                                    <span className="font-medium">{item.label}</span>
                                                    {activeSection === item.id && (
                                                        <motion.div 
                                                            layoutId="mobileActiveIndicator"
                                                            className="ml-auto w-2 h-2 rounded-full bg-brand-ember"
                                                        />
                                                    )}
                                                </motion.button>
                                            );
                                        })}
                                    </div>
                                </nav>

                                {/* Mobile Menu Footer */}
                                <div className="p-6 border-t border-white/10">
                                    <motion.button
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleNavClick("contact")}
                                        className="w-full py-4 bg-gradient-to-r from-brand-ember to-brand-terracotta text-white font-bold rounded-xl flex items-center justify-center gap-2"
                                    >
                                        Start Collaboration
                                        <ChevronRight className="w-5 h-5" />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

