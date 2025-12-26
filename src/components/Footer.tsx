"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Twitter, Linkedin, ArrowUp, Heart, MapPin } from "lucide-react";

interface FooterProps {
    onNavigate: (section: string) => void;
}

const quickLinks = [
    { label: "Home", section: "home" },
    { label: "About", section: "about" },
    { label: "Mission", section: "mission" },
    { label: "Journey", section: "journey" },
    { label: "Blog", section: "blog" },
    { label: "Media", section: "media" },
    { label: "Gallery", section: "gallery" },
    { label: "Partners", section: "partners" },
    { label: "Contact", section: "contact" }
];

const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" }
];

export default function Footer({ onNavigate }: FooterProps) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-brand-charcoal border-t border-white/10">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-ember to-brand-gold flex items-center justify-center">
                                <span className="text-xl font-bold text-white">RW</span>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white">Roaming<span className="text-gradient">Wheels</span></h2>
                                <p className="text-xs text-text-secondary">World Ride Expedition</p>
                            </div>
                        </div>
                        <p className="text-text-secondary mb-6 leading-relaxed">
                            From a remote village in India to the world stage—bridging continents, 
                            cultures, and communities on two wheels.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:border-brand-ember hover:bg-brand-ember/20 transition-all"
                                    >
                                        <Icon size={18} />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6">Explore</h3>
                        <ul className="space-y-3">
                            {quickLinks.slice(0, 5).map((link) => (
                                <li key={link.section}>
                                    <button
                                        onClick={() => onNavigate(link.section)}
                                        className="text-text-secondary hover:text-brand-ember transition-colors text-sm"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* More Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6">More</h3>
                        <ul className="space-y-3">
                            {quickLinks.slice(5).map((link) => (
                                <li key={link.section}>
                                    <button
                                        onClick={() => onNavigate(link.section)}
                                        className="text-text-secondary hover:text-brand-ember transition-colors text-sm"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                            <li>
                                <a href="#" className="text-text-secondary hover:text-brand-ember transition-colors text-sm">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-text-secondary hover:text-brand-ember transition-colors text-sm">
                                    Terms of Use
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6">Stay Updated</h3>
                        <p className="text-text-secondary text-sm mb-4">
                            Get the latest updates from the road directly to your inbox.
                        </p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-text-muted focus:border-brand-ember focus:outline-none transition-all text-sm"
                            />
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-3 bg-gradient-to-r from-brand-ember to-brand-terracotta text-white font-semibold rounded-xl text-sm"
                            >
                                Subscribe
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Live Location Banner */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Live
                            </span>
                            <span className="text-text-secondary text-sm flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                Currently riding through: <span className="text-white font-medium">Tanzania, East Africa</span>
                            </span>
                        </div>
                        <button
                            onClick={() => onNavigate("journey")}
                            className="text-brand-ember text-sm font-medium hover:underline"
                        >
                            Track Live Location →
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                            <p className="text-text-muted text-sm flex items-center gap-1">
                                © 2025 Roaming Wheels. Made with <Heart className="w-4 h-4 text-brand-ember" /> from the road.
                            </p>
                            <span className="hidden sm:block text-text-muted">•</span>
                            <p className="text-text-muted text-sm">
                                Powered by{" "}
                                <a 
                                    href="https://latitudes.in" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-brand-ember hover:text-brand-gold transition-colors font-medium"
                                >
                                    Latitudes Technologies Private Ltd
                                </a>
                            </p>
                        </div>
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors text-sm group"
                        >
                            Back to Top 
                            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-ember group-hover:border-brand-ember transition-all">
                                <ArrowUp className="w-4 h-4" />
                            </div>
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
