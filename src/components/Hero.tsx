"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Play, ChevronDown, Globe, Compass } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

interface HeroProps {
    onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

    const stats = [
        { value: "32+", label: "Countries" },
        { value: "40K+", label: "Kilometers" },
        { value: "150+", label: "Days" },
        { value: "1M+", label: "Lives Inspired" },
    ];

    return (
        <section 
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Animated Background */}
            <motion.div 
                style={{ scale }}
                className="absolute inset-0 z-0"
            >
                {/* Hero Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/profile.JPEG"
                        alt="Yogesh Alekari - World Ride Expedition"
                        fill
                        className="object-cover object-center opacity-30"
                        priority
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                        }}
                    />
                </div>
                {/* Gradient Background with animated layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-midnight/80 via-brand-charcoal/70 to-brand-deep-blue/80" />
                
                {/* Animated grid pattern */}
                <div 
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,107,53,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,107,53,0.3) 1px, transparent 1px)
                        `,
                        backgroundSize: '100px 100px'
                    }}
                />
                
                {/* Radial glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-ember/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[100px]" />
                
                {/* Road lines animation */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] overflow-hidden opacity-20">
                    <motion.div
                        animate={{ y: ["0%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-full h-20 bg-gradient-to-b from-transparent via-brand-ember to-transparent"
                    />
                </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-32 left-[10%] hidden lg:block"
            >
                <div className="w-20 h-20 rounded-full bg-brand-ember/10 backdrop-blur-sm border border-brand-ember/20 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-brand-ember" />
                </div>
            </motion.div>

            <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-40 right-[10%] hidden lg:block"
            >
                <div className="w-16 h-16 rounded-full bg-brand-gold/10 backdrop-blur-sm border border-brand-gold/20 flex items-center justify-center">
                    <Compass className="w-6 h-6 text-brand-gold" />
                </div>
            </motion.div>

            {/* Main Content */}
            <motion.div 
                style={{ y, opacity }}
                className="relative z-10 text-center px-4 max-w-6xl mx-auto"
            >
                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm font-medium text-brand-gold">
                        <span className="w-2 h-2 rounded-full bg-brand-ember animate-pulse" />
                        World Ride Expedition • Leg 2 Active
                    </span>
                </motion.div>

                {/* Mission Quote */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-brand-sand font-medium tracking-[0.3em] uppercase text-sm mb-6"
                >
                    From Remote Village to World Stage
                </motion.p>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.9] tracking-tight"
                >
                    <span className="text-white">One Rider.</span>
                    <br />
                    <span className="text-white">One Motorcycle.</span>
                    <br />
                    <span className="text-gradient">Infinite Possibilities.</span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Bridging cultures, inspiring dreams, and proving that 
                    <span className="text-white font-medium"> where you come from doesn&apos;t define where you can go.</span>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(255, 107, 53, 0.4)" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onNavigate("journey")}
                        className="group px-8 py-4 bg-gradient-to-r from-brand-ember to-brand-terracotta text-white rounded-full font-bold text-lg shadow-xl flex items-center gap-3"
                    >
                        <MapPin className="w-5 h-5" />
                        Track My Journey
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </motion.button>
                    
                    <motion.button
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onNavigate("media")}
                        className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-full font-bold text-lg flex items-center gap-3 hover:border-brand-ember/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-ember/20 transition-colors">
                            <Play className="w-4 h-4 ml-0.5" />
                        </div>
                        Watch Documentary
                    </motion.button>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-brand-ember/30 transition-all"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                                {stat.value}
                            </div>
                            <div className="text-xs md:text-sm text-text-secondary uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-text-secondary uppercase tracking-widest">Scroll to explore</span>
                <div className="w-8 h-12 border-2 border-white/20 rounded-full flex justify-center p-2">
                    <motion.div 
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-3 bg-brand-ember rounded-full" 
                    />
                </div>
                <ChevronDown className="w-5 h-5 text-text-secondary" />
            </motion.div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-midnight to-transparent z-10" />
        </section>
    );
}
