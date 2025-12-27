"use client";

import { motion } from "framer-motion";
import { Handshake, Building2, Globe, Shield, Star, ArrowRight, CheckCircle, Sparkles } from "lucide-react";

const currentPartners = [
    {
        name: "Rotary International",
        type: "Global Partner",
        logo: "🌐",
        description: "Supporting the Vasudhaiva Kutumbakam mission across continents",
        color: "from-blue-500 to-cyan-500"
    },
    {
        name: "Maharashtra Motor Vehicle Dept",
        type: "Road Safety Partner",
        logo: "🛡️",
        description: "Official road safety awareness campaign partner",
        color: "from-orange-500 to-red-500"
    },
    {
        name: "ABVMAS",
        type: "Training Partner",
        logo: "⛰️",
        description: "Mountaineering and adventure training institution",
        color: "from-green-500 to-emerald-500"
    },
    {
        name: "Royal Enfield",
        type: "Equipment Partner",
        logo: "🏍️",
        description: "The trusted machine for the world expedition",
        color: "from-yellow-500 to-orange-500"
    }
];

const collaborationTypes = [
    {
        icon: Building2,
        title: "Brand Partnership",
        description: "Associate your brand with an authentic adventure story reaching millions globally",
        benefits: ["Global exposure across 32+ countries", "Authentic content integration", "Social media amplification", "Event appearances"]
    },
    {
        icon: Globe,
        title: "Tourism Boards",
        description: "Showcase your destination through organic travel content and storytelling",
        benefits: ["Destination documentaries", "Cultural storytelling", "Adventure route features", "Travel guide content"]
    },
    {
        icon: Shield,
        title: "NGO & Causes",
        description: "Amplify your message through a platform reaching adventure enthusiasts worldwide",
        benefits: ["Road safety campaigns", "Cultural awareness", "Environmental advocacy", "Youth inspiration programs"]
    },
    {
        icon: Star,
        title: "Media & Content",
        description: "Exclusive interviews, documentaries, and content collaborations",
        benefits: ["Exclusive story rights", "Documentary features", "Podcast appearances", "Article contributions"]
    }
];

const impactMetrics = [
    { value: "15M+", label: "Social Reach" },
    { value: "10.7K", label: "YouTube Subscribers" },
    { value: "47+", label: "Countries Covered" },
    { value: "500+", label: "Media Features" }
];

export default function Partners() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal via-brand-midnight to-brand-charcoal" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(42,157,143,0.08),transparent_60%)]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-medium mb-6">
                        <Handshake className="w-4 h-4" />
                        Partnerships
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Partners & <span className="text-gradient">Collaborations</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                        Join the journey. Partner with a story that inspires millions and creates meaningful global impact.
                    </p>
                </motion.div>

                {/* Impact Metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
                >
                    {impactMetrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{metric.value}</div>
                            <div className="text-sm text-text-secondary uppercase tracking-wider">{metric.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Current Partners */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <h3 className="text-2xl font-bold text-white text-center mb-12">Current Partners</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {currentPartners.map((partner, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group p-6 rounded-2xl bg-brand-charcoal/50 border border-white/5 hover:border-white/20 transition-all text-center"
                            >
                                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${partner.color} flex items-center justify-center mx-auto mb-4 text-4xl group-hover:scale-110 transition-transform`}>
                                    {partner.logo}
                                </div>
                                <h4 className="text-lg font-bold text-white mb-1">{partner.name}</h4>
                                <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-brand-teal text-xs font-medium mb-3">
                                    {partner.type}
                                </span>
                                <p className="text-text-secondary text-sm">{partner.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Collaboration Opportunities */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-white mb-4">Collaboration Opportunities</h3>
                        <p className="text-text-secondary max-w-2xl mx-auto">
                            Multiple ways to align your brand with an authentic, inspiring global adventure.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {collaborationTypes.map((collab, index) => {
                            const Icon = collab.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-ember/30 transition-all"
                                >
                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-ember to-brand-gold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-ember transition-colors">
                                                {collab.title}
                                            </h4>
                                            <p className="text-text-secondary mb-4">{collab.description}</p>
                                            <div className="space-y-2">
                                                {collab.benefits.map((benefit, i) => (
                                                    <div key={i} className="flex items-center gap-2 text-sm">
                                                        <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                                                        <span className="text-text-secondary">{benefit}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Value Proposition */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-brand-ember/20 via-brand-charcoal to-brand-gold/20 border border-brand-ember/30 overflow-hidden relative"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-ember/20 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/20 rounded-full blur-[100px]" />
                    
                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <Sparkles className="w-12 h-12 text-brand-gold mx-auto mb-6" />
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Why Partner With Roaming Wheeels?
                        </h3>
                        <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                            This isn&apos;t just a motorcycle journey—it&apos;s a movement. A story of determination, 
                            cultural connection, and proving that dreams have no boundaries. Your brand becomes 
                            part of this inspiring narrative reaching millions worldwide.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 text-left">
                            <div className="p-4 rounded-xl bg-white/5">
                                <h4 className="text-brand-ember font-bold mb-2">Authentic Story</h4>
                                <p className="text-text-secondary text-sm">
                                    Not manufactured content—real experiences, real emotions, real impact.
                                </p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5">
                                <h4 className="text-brand-gold font-bold mb-2">Global Reach</h4>
                                <p className="text-text-secondary text-sm">
                                    Engaged audience across 32+ countries, multiple platforms, diverse demographics.
                                </p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5">
                                <h4 className="text-brand-teal font-bold mb-2">Meaningful Impact</h4>
                                <p className="text-text-secondary text-sm">
                                    Align with road safety, cultural unity, and inspiring the next generation.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-3xl font-bold text-white mb-4">Ready to Join the Journey?</h3>
                    <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                        Let&apos;s explore how your brand can be part of this extraordinary adventure.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(255, 107, 53, 0.4)" }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-ember to-brand-terracotta text-white font-bold rounded-full text-lg shadow-xl"
                    >
                        <Handshake className="w-5 h-5" />
                        Start a Conversation
                        <ArrowRight className="w-5 h-5" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}

