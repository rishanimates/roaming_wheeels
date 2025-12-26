"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Flag, Compass, Mountain, Globe, ChevronRight } from "lucide-react";
import { useState } from "react";

const legs = [
    {
        id: 1,
        title: "Leg 1: Mumbai to London & Back",
        status: "Completed",
        distance: "29,000 km",
        duration: "136 Days",
        countries: 27,
        year: "2023",
        color: "from-green-500 to-emerald-500",
        route: [
            "Mumbai", "Nepal", "China", "Kazakhstan", "Russia", 
            "Scandinavia", "Western Europe", "London", "Return via Same Route"
        ]
    },
    {
        id: 2,
        title: "Leg 2: Euro-Africa Odyssey",
        status: "In Progress",
        distance: "40,000+ km",
        duration: "150+ Days",
        countries: 32,
        year: "2024-25",
        color: "from-brand-ember to-brand-gold",
        sections: [
            {
                name: "Part A: Silk Route",
                route: ["India", "Nepal", "China", "Kazakhstan", "Kyrgyzstan", "Tajikistan", "Uzbekistan", "Russia", "Finland", "Scandinavia", "Western Europe", "Spain"]
            },
            {
                name: "Part B: African Odyssey",
                route: ["Morocco", "Mauritania", "Senegal", "Ghana", "Nigeria", "Cameroon", "Gabon", "Congo", "Angola", "Namibia", "South Africa", "Mozambique", "Tanzania", "Kenya", "Ethiopia", "Return to India"]
            }
        ]
    }
];

const highlights = [
    { name: "Sossusvlei Dunes", location: "Namibia", icon: "🏜️" },
    { name: "Mount Kilimanjaro", location: "Tanzania", icon: "🏔️" },
    { name: "Victoria Falls", location: "Zambia", icon: "💧" },
    { name: "Table Mountain", location: "South Africa", icon: "⛰️" },
    { name: "Silk Road Cities", location: "Central Asia", icon: "🕌" },
    { name: "Sahara Desert", location: "Morocco", icon: "🐪" },
    { name: "Norwegian Fjords", location: "Norway", icon: "🌊" },
    { name: "Kazakh Steppe", location: "Kazakhstan", icon: "🌾" }
];

export default function Journey() {
    const [activeLeg, setActiveLeg] = useState(2);

    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-brand-deep-blue" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,107,53,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(42,157,143,0.1),transparent_50%)]" />
            
            {/* Grid pattern */}
            <div 
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-ember/10 text-brand-ember text-sm font-medium mb-6">
                        <Compass className="w-4 h-4" />
                        The Route
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        The <span className="text-gradient">World Ride</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Two epic legs spanning continents, cultures, and countless stories.
                    </p>
                </motion.div>

                {/* Leg Selector */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center gap-4 mb-16"
                >
                    {legs.map((leg) => (
                        <button
                            key={leg.id}
                            onClick={() => setActiveLeg(leg.id)}
                            className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                                activeLeg === leg.id
                                    ? "bg-gradient-to-r from-brand-ember to-brand-gold text-white shadow-lg"
                                    : "bg-white/5 text-text-secondary hover:bg-white/10 hover:text-white"
                            }`}
                        >
                            {leg.status === "Completed" ? (
                                <Flag className="w-4 h-4" />
                            ) : (
                                <Navigation className="w-4 h-4" />
                            )}
                            Leg {leg.id}
                            {leg.status === "In Progress" && (
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            )}
                        </button>
                    ))}
                </motion.div>

                {/* Active Leg Details */}
                {legs.map((leg) => (
                    <motion.div
                        key={leg.id}
                        initial={{ opacity: 0 }}
                        animate={{ 
                            opacity: activeLeg === leg.id ? 1 : 0,
                            display: activeLeg === leg.id ? "block" : "none"
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`p-8 md:p-10 rounded-3xl bg-gradient-to-br ${leg.color} mb-12 relative overflow-hidden`}
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
                            
                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                                    <div>
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                                            leg.status === "Completed" 
                                                ? "bg-white/20 text-white" 
                                                : "bg-white text-brand-ember"
                                        }`}>
                                            {leg.status.toUpperCase()}
                                        </span>
                                        <h3 className="text-3xl md:text-4xl font-bold text-white">{leg.title}</h3>
                                        <p className="text-white/80 mt-2">{leg.year}</p>
                                    </div>
                                    
                                    <div className="grid grid-cols-3 gap-6 md:gap-10">
                                        <div className="text-center">
                                            <div className="text-3xl md:text-4xl font-bold text-white">{leg.distance}</div>
                                            <div className="text-sm text-white/70 uppercase tracking-wider">Distance</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl md:text-4xl font-bold text-white">{leg.duration}</div>
                                            <div className="text-sm text-white/70 uppercase tracking-wider">Duration</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl md:text-4xl font-bold text-white">{leg.countries}</div>
                                            <div className="text-sm text-white/70 uppercase tracking-wider">Countries</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Route Details */}
                        {leg.id === 1 && leg.route && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 mb-12"
                            >
                                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <Globe className="w-5 h-5 text-brand-teal" />
                                    Route Overview
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {leg.route.map((place, idx) => (
                                        <span 
                                            key={idx}
                                            className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-white/10 text-white text-sm"
                                        >
                                            <MapPin className="w-3 h-3 text-brand-ember" />
                                            {place}
                                            {idx < leg.route.length - 1 && (
                                                <ChevronRight className="w-4 h-4 text-text-secondary ml-1" />
                                            )}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {leg.id === 2 && leg.sections && (
                            <div className="grid md:grid-cols-2 gap-6 mb-12">
                                {leg.sections.map((section, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-6 rounded-2xl bg-white/5 border border-white/10"
                                    >
                                        <h4 className={`text-xl font-bold mb-4 ${
                                            index === 0 ? "text-brand-teal" : "text-brand-ember"
                                        }`}>
                                            {section.name}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {section.route.map((place, idx) => (
                                                <span 
                                                    key={idx}
                                                    className="px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-sm"
                                                >
                                                    {place}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                ))}

                {/* Highlights */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <h3 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center gap-2">
                        <Mountain className="w-6 h-6 text-brand-gold" />
                        Expedition Highlights
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {highlights.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="p-5 rounded-xl bg-gradient-to-br from-brand-ember/20 to-brand-gold/20 border border-brand-ember/20 text-center cursor-pointer hover:border-brand-ember/50 transition-all"
                            >
                                <div className="text-3xl mb-2">{item.icon}</div>
                                <div className="font-bold text-white text-sm leading-tight mb-1">{item.name}</div>
                                <div className="text-xs text-text-secondary uppercase tracking-wider">{item.location}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Live Tracker CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 mb-6">
                        <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                        Currently riding through Africa
                    </div>
                    <div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 bg-gradient-to-r from-brand-ember to-brand-gold text-white font-bold rounded-full shadow-lg flex items-center gap-2 mx-auto"
                        >
                            <MapPin className="w-5 h-5" />
                            Track Live Location
                            <ChevronRight className="w-5 h-5" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

