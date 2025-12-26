"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Navigation, Flag, Compass, Mountain, Globe, ChevronRight } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamic import to avoid SSR issues with Leaflet
const RouteMap = dynamic(() => import("./RouteMap"), { 
    ssr: false,
    loading: () => <div className="w-full h-full bg-brand-charcoal/30 animate-pulse rounded-2xl" />
});

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
            "India", "Iran", "Turkey", "Greece", "North Macedonia", "Albania", "Montenegro", 
            "Bosnia Herzegovina", "Croatia", "Slovenia", "Italy", "Switzerland", "France", "UK", 
            "Belgium", "Luxembourg", "Germany", "Austria", "Slovakia", "Romania", "Hungary", 
            "Serbia", "Bulgaria", "Turkey", "Georgia", "Azerbaijan", "Armenia", "Iran", "UAE", "Bahrain", "India"
        ],
        highlights: [
            { name: "Persepolis Ruins", location: "Iran", icon: "🏛️" },
            { name: "Santorini Island", location: "Greece", icon: "🏝️" },
            { name: "Adriatic Coast", location: "Croatia", icon: "🌊" },
            { name: "Swiss Alps", location: "Switzerland", icon: "🏔️" },
            { name: "Tower Bridge", location: "London, UK", icon: "🌉" },
            { name: "Caucasus Mountains", location: "Georgia", icon: "⛰️" }
        ]
    },
    {
        id: 2,
        title: "Leg 2: India to Europe via Silk Route",
        status: "Completed",
        distance: "25,000 km",
        duration: "120 Days",
        countries: 17,
        year: "2025",
        color: "from-blue-500 to-cyan-500",
        route: [
            "India", "Nepal", "China/Tibet", "Kazakhstan", "Kyrgyzstan", "Uzbekistan", "Kazakhstan", 
            "Russia", "Estonia", "Latvia", "Finland", "Norway", "Sweden", "Denmark", "Germany", 
            "Netherlands", "Belgium", "France", "UK"
        ],
        highlights: [
            { name: "Everest Region", location: "Nepal/Tibet", icon: "🏔️" },
            { name: "Silk Road Cities", location: "Uzbekistan", icon: "🕌" },
            { name: "Issyk-Kul Lake", location: "Kyrgyzstan", icon: "🏞️" },
            { name: "Baltic States", location: "Estonia/Latvia", icon: "🏰" },
            { name: "Norwegian Fjords", location: "Norway", icon: "🌊" },
            { name: "Arctic Circle", location: "Finland", icon: "❄️" }
        ]
    },
    {
        id: 3,
        title: "Leg 3: Euro-Africa Odyssey",
        status: "In Progress",
        distance: "35,000 km",
        duration: "150+ Days",
        countries: 30,
        year: "2025-26",
        color: "from-brand-ember to-brand-gold",
        route: [
            "London", "France", "Spain", "Morocco", "Western Sahara", "Mauritania", 
            "Senegal", "Gambia", "Guinea", "Sierra Leone", "Liberia", "Ivory Coast", "Ghana", "Togo", "Benin", "Nigeria", "Cameroon", "Gabon", "Congo", "Angola", "Namibia", "South Africa"
        ],
        highlights: [
            { name: "Sahara Desert", location: "Morocco", icon: "🐪" },
            { name: "Dakar City", location: "Senegal", icon: "🌴" },
            { name: "Gold Coast", location: "Ghana", icon: "🏖️" },
            { name: "Sossusvlei Dunes", location: "Namibia", icon: "🏜️" },
            { name: "Victoria Falls", location: "Zambia", icon: "💧" },
            { name: "Table Mountain", location: "South Africa", icon: "⛰️" }
        ]
    }
];

export default function Journey() {
    const [activeLeg, setActiveLeg] = useState(3);

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
                        Three epic legs spanning continents, cultures, and countless stories.
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

                {/* Active Leg Details - Only render the active leg to force map remount */}
                <AnimatePresence mode="wait">
                {legs.filter(leg => leg.id === activeLeg).map((leg) => (
                    <motion.div
                        key={`leg-content-${leg.id}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
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

                        {/* Route Overview with Map */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-2xl bg-white/5 border border-white/10 mb-8 overflow-hidden"
                        >
                            {/* Map Background */}
                            <div className="relative h-[300px] md:h-[400px]">
                                <RouteMap key={`route-map-${leg.id}-${activeLeg}`} legId={leg.id} />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-transparent to-transparent pointer-events-none" />
                                {/* Title overlay */}
                                <div className="absolute top-4 left-4 z-10">
                                    <h4 className="text-xl font-bold text-white flex items-center gap-2 drop-shadow-lg">
                                        <Globe className="w-5 h-5 text-brand-teal" />
                                        Route Overview
                                    </h4>
                                </div>
                            </div>
                            
                            {/* Route Countries List */}
                            <div className="p-6 bg-brand-charcoal/50">
                                <div className="flex flex-wrap gap-2">
                                    {leg.route.map((place, idx) => (
                                        <span 
                                            key={idx}
                                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition-colors"
                                        >
                                            <MapPin className="w-3 h-3 text-brand-ember" />
                                            {place}
                                            {idx < leg.route.length - 1 && (
                                                <ChevronRight className="w-3 h-3 text-text-secondary" />
                                            )}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Leg-specific Highlights */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Mountain className="w-5 h-5 text-brand-gold" />
                                Expedition Highlights - {leg.title.split(":")[0]}
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                {leg.highlights.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className={`p-4 rounded-xl bg-gradient-to-br ${
                                            leg.id === 1 ? "from-green-500/20 to-emerald-500/20 border-green-500/20 hover:border-green-500/50" :
                                            leg.id === 2 ? "from-blue-500/20 to-cyan-500/20 border-blue-500/20 hover:border-blue-500/50" :
                                            "from-brand-ember/20 to-brand-gold/20 border-brand-ember/20 hover:border-brand-ember/50"
                                        } border text-center cursor-pointer transition-all`}
                                    >
                                        <div className="text-2xl mb-2">{item.icon}</div>
                                        <div className="font-bold text-white text-xs leading-tight mb-1">{item.name}</div>
                                        <div className="text-[10px] text-text-secondary uppercase tracking-wider">{item.location}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
                </AnimatePresence>

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

