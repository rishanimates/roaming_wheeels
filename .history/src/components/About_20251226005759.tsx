"use client";

import { motion } from "framer-motion";
import { Award, MapPin, Mountain, Briefcase, Flag, Globe, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function About() {
    const achievements = [
        { icon: MapPin, value: "180,000+", label: "KMs Across India", color: "text-brand-ember" },
        { icon: Globe, value: "27", label: "Countries Explored", color: "text-brand-teal" },
        { icon: Mountain, value: "A Grade", label: "ABVMAS Mountaineer", color: "text-brand-gold" },
        { icon: Briefcase, value: "Architect", label: "Profession", color: "text-purple-400" },
    ];

    const timeline = [
        {
            year: "Origin",
            title: "The Humble Beginning",
            description: "Born in a remote village in Maharashtra, India. A first-generation learner with dreams bigger than circumstances.",
            icon: "🏘️"
        },
        {
            year: "Training",
            title: "Mountaineering & Architecture",
            description: "Graduated from Mumbai University. Trained at ABVMAS with 'A' Grade certification. Learning to conquer physical and mental peaks.",
            icon: "🎓"
        },
        {
            year: "2018-2023",
            title: "Exploring India",
            description: "180,000+ kilometers across India. Every road, every mountain, every story prepared for what was to come.",
            icon: "🏍️"
        },
        {
            year: "Leg 1",
            title: "Mumbai to London & Back",
            description: "136 days. 27 countries. 29,000 kilometers. The first chapter of an extraordinary world ride.",
            icon: "🌍"
        },
        {
            year: "Leg 2",
            title: "Euro-Africa Odyssey",
            description: "Currently underway: Silk Route through Central Asia, across Europe, and down through the African continent.",
            icon: "🔥"
        }
    ];

    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-midnight via-brand-charcoal to-brand-midnight" />
            
            {/* Decorative Lines */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-ember/30 to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-ember/30 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-medium mb-6">
                        <Flag className="w-4 h-4" />
                        The Rider
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Meet <span className="text-gradient">Yogesh Alekari</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Architect by profession. Mountaineer by training. Explorer by heart.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
                    {/* Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Profile Image */}
                        <ProfileImage />

                        {/* Floating Achievement Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="absolute -bottom-8 -right-8 p-6 rounded-2xl bg-brand-charcoal border border-white/10 shadow-2xl max-w-xs"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-ember to-brand-gold flex items-center justify-center flex-shrink-0">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Leg 1 Complete</h4>
                                    <p className="text-text-secondary text-sm">Mumbai → London → Mumbai</p>
                                    <div className="flex gap-3 mt-2 text-xs">
                                        <span className="text-brand-ember">136 Days</span>
                                        <span className="text-brand-gold">27 Countries</span>
                                        <span className="text-brand-teal">29K KM</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Bio Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-6">
                                From a Remote Village to <br />
                                <span className="text-gradient">The World Stage</span>
                            </h3>
                            <div className="space-y-4 text-text-secondary leading-relaxed">
                                <p>
                                    Growing up in a small village in Maharashtra, the world beyond the horizon 
                                    seemed like a distant dream. But dreams, when nurtured with determination, 
                                    have a way of becoming reality.
                                </p>
                                <p>
                                    Armed with a degree in Architecture from Mumbai University and an &apos;A&apos; Grade 
                                    mountaineering certification from ABVMAS, Yogesh learned early that the greatest 
                                    structures are built not just with materials, but with unwavering will.
                                </p>
                                <p>
                                    Before taking on the world, he conquered India—logging over 180,000 kilometers 
                                    across every terrain the subcontinent could offer. Each road prepared him for 
                                    the next, each challenge sharpened his resolve.
                                </p>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            {achievements.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all"
                                    >
                                        <Icon className={`w-5 h-5 ${item.color} mb-2`} />
                                        <div className="text-2xl font-bold text-white">{item.value}</div>
                                        <div className="text-xs text-text-secondary uppercase tracking-wider">{item.label}</div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Quote */}
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-ember/10 to-transparent border border-brand-ember/20">
                            <p className="text-white italic text-lg leading-relaxed">
                                &ldquo;The motorcycle is not just a vehicle—it&apos;s a passport to human connection. 
                                It slows you down enough to truly see the world and fast enough to chase your dreams.&rdquo;
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Timeline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <h3 className="text-3xl font-bold text-white text-center mb-16">The Journey So Far</h3>
                    
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 top-24 bottom-0 w-px bg-gradient-to-b from-brand-ember via-brand-gold to-brand-teal hidden md:block" />

                    <div className="space-y-8 md:space-y-0">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                            >
                                {/* Content */}
                                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className={`p-6 rounded-2xl bg-brand-charcoal/50 border border-white/10 hover:border-white/20 transition-all inline-block max-w-md ${
                                        index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                                    }`}>
                                        <span className="text-brand-ember font-bold text-sm">{item.year}</span>
                                        <h4 className="text-xl font-bold text-white mt-1 mb-2">{item.title}</h4>
                                        <p className="text-text-secondary text-sm">{item.description}</p>
                                    </div>
                                </div>

                                {/* Center Icon */}
                                <div className="w-16 h-16 rounded-full bg-brand-charcoal border-4 border-brand-ember flex items-center justify-center text-2xl z-10">
                                    {item.icon}
                                </div>

                                {/* Spacer for opposite side */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
