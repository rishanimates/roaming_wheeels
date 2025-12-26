"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Instagram, Youtube, Twitter, Linkedin, MessageCircle, Globe, Clock } from "lucide-react";
import { useState } from "react";

const socialLinks = [
    { icon: Instagram, label: "Instagram", handle: "@roamingwheels", followers: "850K", color: "from-purple-500 to-pink-500" },
    { icon: Youtube, label: "YouTube", handle: "Roaming Wheels", followers: "1.2M", color: "from-red-500 to-red-600" },
    { icon: Twitter, label: "Twitter", handle: "@yogeshalekari", followers: "125K", color: "from-blue-400 to-blue-500" },
    { icon: Linkedin, label: "LinkedIn", handle: "Yogesh Alekari", followers: "45K", color: "from-blue-600 to-blue-700" }
];

const contactReasons = [
    "Brand Partnership",
    "Media Inquiry",
    "Speaking Engagement",
    "Collaboration",
    "General Inquiry"
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        reason: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setFormData({ name: "", email: "", reason: "", message: "" });
        }, 2000);
    };

    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-midnight via-brand-charcoal to-brand-midnight" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,107,53,0.1),transparent_50%)]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-ember/10 text-brand-ember text-sm font-medium mb-6">
                        <MessageCircle className="w-4 h-4" />
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Let&apos;s <span className="text-gradient">Connect</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Whether you&apos;re a brand, media outlet, or fellow adventurer—I&apos;d love to hear from you.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="p-8 md:p-10 rounded-3xl bg-brand-charcoal/50 border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-text-muted focus:border-brand-ember focus:outline-none focus:ring-2 focus:ring-brand-ember/20 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-text-muted focus:border-brand-ember focus:outline-none focus:ring-2 focus:ring-brand-ember/20 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                {/* Reason */}
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-2">
                                        What brings you here?
                                    </label>
                                    <select
                                        value={formData.reason}
                                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-brand-ember focus:outline-none focus:ring-2 focus:ring-brand-ember/20 transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="" className="bg-brand-charcoal">Select a reason</option>
                                        {contactReasons.map((reason) => (
                                            <option key={reason} value={reason} className="bg-brand-charcoal">
                                                {reason}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-text-muted focus:border-brand-ember focus:outline-none focus:ring-2 focus:ring-brand-ember/20 transition-all resize-none"
                                        placeholder="Tell me about your project or inquiry..."
                                    />
                                </div>

                                {/* Submit */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 bg-gradient-to-r from-brand-ember to-brand-terracotta text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                            />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Info & Social */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Quick Contact */}
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-ember/20 to-brand-gold/20 border border-brand-ember/20">
                            <h3 className="text-xl font-bold text-white mb-6">Quick Contact</h3>
                            <div className="space-y-4">
                                <a href="mailto:contact@roamingwheels.com" className="flex items-center gap-4 text-text-secondary hover:text-white transition-colors group">
                                    <div className="w-12 h-12 rounded-xl bg-brand-ember/20 flex items-center justify-center group-hover:bg-brand-ember transition-colors">
                                        <Mail className="w-5 h-5 text-brand-ember group-hover:text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-text-muted">Email</p>
                                        <p className="text-white">contact@roamingwheels.com</p>
                                    </div>
                                </a>
                                <div className="flex items-center gap-4 text-text-secondary">
                                    <div className="w-12 h-12 rounded-xl bg-brand-teal/20 flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-brand-teal" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-text-muted">Based In</p>
                                        <p className="text-white">Mumbai, India (Currently on the road)</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-text-secondary">
                                    <div className="w-12 h-12 rounded-xl bg-brand-gold/20 flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-brand-gold" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-text-muted">Response Time</p>
                                        <p className="text-white">Within 48-72 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-xl font-bold text-white mb-6">Follow the Journey</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href="#"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ scale: 1.02 }}
                                            className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
                                        >
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${social.color} flex items-center justify-center`}>
                                                    <Icon className="w-5 h-5 text-white" />
                                                </div>
                                                <div>
                                                    <p className="text-white font-medium text-sm">{social.label}</p>
                                                    <p className="text-text-secondary text-xs">{social.handle}</p>
                                                </div>
                                            </div>
                                            <p className="text-brand-gold text-sm font-medium">{social.followers} followers</p>
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Media Kit */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                                    <Globe className="w-6 h-6 text-purple-400" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-white font-bold">Media & Press Kit</h4>
                                    <p className="text-text-secondary text-sm">Download brand assets, high-res photos, and press materials.</p>
                                </div>
                                <button className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg font-medium hover:bg-purple-500/30 transition-colors text-sm">
                                    Download
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

