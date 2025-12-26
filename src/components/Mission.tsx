"use client";

import { motion } from "framer-motion";
import { Globe, Heart, Shield, Users, Sparkles, Quote } from "lucide-react";

export default function Mission() {
    const pillars = [
        {
            icon: Globe,
            title: "Vasudhaiva Kutumbakam",
            subtitle: "The World Is One Family",
            description: "Breaking geographical and cultural boundaries to spread the message that humanity transcends borders.",
            color: "from-brand-teal to-brand-sky",
            stats: "27+ Cultures Connected"
        },
        {
            icon: Shield,
            title: "Road Safety Drive",
            subtitle: "Ride Safe, Reach Safe",
            description: "Partnering with Maharashtra Motor Vehicle Department to promote helmet usage and safe riding practices.",
            color: "from-brand-ember to-brand-terracotta",
            stats: "50K+ Riders Reached"
        },
        {
            icon: Heart,
            title: "Inspire Dreams",
            subtitle: "From Village to World",
            description: "Proving that your background doesn't limit your potential. If a boy from a remote Indian village can ride around the world, so can you.",
            color: "from-brand-gold to-brand-sand",
            stats: "1M+ Dreams Ignited"
        },
        {
            icon: Users,
            title: "People & Meetups",
            subtitle: "Connect, Learn, Share",
            description: "Every journey is about the people I meet. Learning their way of life, understanding their culture, and sharing India's warmth and values.",
            color: "from-purple-500 to-pink-500",
            stats: "1000+ Connections Made"
        }
    ];

    const testimonials = [
        {
            quote: "In Iran, a local Persian family invited me to share a meal despite our complete language barrier. We laughed, ate, and connected purely through smiles and gestures.",
            location: "Tehran, Iran",
            lesson: "Humanity speaks one language"
        },
        {
            quote: "A young lady from Tibet had endless questions about India—the colors, the festivals, the food. Her eyes sparkled as she said, 'Visiting India is my lifelong dream.' In that moment, I realized borders are just lines on maps.",
            location: "Tibet, China",
            lesson: "Curiosity connects worlds"
        },
        {
            quote: "Stranded in the Kazakh steppe with a broken chain, a shepherd appeared out of nowhere. He couldn't speak English, but his generosity needed no translation.",
            location: "Kazakh Steppe, Kazakhstan",
            lesson: "Kindness is universal"
        }
    ];

    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-brand-midnight" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,53,0.08),transparent_70%)]" />
            
            {/* Decorative elements */}
            <div className="absolute top-20 right-20 w-72 h-72 bg-brand-ember/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-ember/10 text-brand-ember text-sm font-medium mb-6">
                        <Sparkles className="w-4 h-4" />
                        The Purpose
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Riding With <span className="text-gradient">Purpose</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                        More than just riding—it&apos;s about connecting with people, understanding their way of living, 
                        experiencing diverse cultures, and sharing the warmth of Indian values with the world.
                    </p>
                </motion.div>

                {/* Mission Statement Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative mb-24 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-brand-charcoal to-brand-slate border border-white/10 overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-ember/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <Quote className="w-12 h-12 text-brand-ember/30 mx-auto mb-6" />
                        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed mb-8 italic">
                            &ldquo;Every stop is a meetup. Every stranger becomes family. I ride not just to explore—but to 
                            connect, learn, and share. 
                            <span className="text-gradient font-medium">The road is my classroom, and humanity is my teacher.</span>&rdquo;
                        </blockquote>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-ember to-brand-gold flex items-center justify-center text-white font-bold">
                                YA
                            </div>
                            <div className="text-left">
                                <p className="text-white font-semibold">Yogesh Alekari</p>
                                <p className="text-text-secondary text-sm">Founder, Roaming Wheeels</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Mission Pillars */}
                <div className="grid md:grid-cols-2 gap-6 mb-24">
                    {pillars.map((pillar, index) => {
                        const Icon = pillar.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group p-8 rounded-2xl bg-brand-charcoal/50 border border-white/5 hover:border-white/20 transition-all duration-300"
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{pillar.title}</h3>
                                <p className="text-brand-gold text-sm font-medium mb-4">{pillar.subtitle}</p>
                                <p className="text-text-secondary leading-relaxed mb-6">{pillar.description}</p>
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="px-3 py-1 rounded-full bg-white/5 text-brand-ember font-medium">
                                        {pillar.stats}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Road Stories */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h3 className="text-3xl font-bold text-white mb-4">Stories From The Road</h3>
                    <p className="text-text-secondary">Moments that defined the meaning of this journey</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((story, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-brand-ember/30 transition-all group"
                        >
                            <Quote className="w-8 h-8 text-brand-ember/20 mb-4" />
                            <p className="text-text-secondary leading-relaxed mb-6 text-sm">
                                &ldquo;{story.quote}&rdquo;
                            </p>
                            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                <span className="text-xs text-brand-gold uppercase tracking-wider">{story.location}</span>
                            </div>
                            <div className="mt-4 px-3 py-2 rounded-lg bg-brand-ember/10 text-brand-ember text-xs font-medium">
                                💡 {story.lesson}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

