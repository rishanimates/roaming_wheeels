"use client";

import { motion } from "framer-motion";
import { Play, ExternalLink, Youtube, Newspaper, Tv, Radio, Award, Calendar, Eye } from "lucide-react";
import { useState } from "react";

const mediaCategories = ["All", "YouTube", "Press", "TV", "Podcasts"];

const youtubeVideos = [
    {
        id: 1,
        title: "Crossing 47 Countries on a Motorcycle | Full Documentary",
        views: "850K",
        duration: "48:32",
        thumbnail: "doc-1",
        featured: true
    },
    {
        id: 2,
        title: "Namibia: The Most Beautiful Country I've Ever Seen",
        views: "456K",
        duration: "22:15",
        thumbnail: "namibia"
    },
    {
        id: 3,
        title: "Almost Stranded in Kazakhstan | Survival Story",
        views: "823K",
        duration: "18:44",
        thumbnail: "kazakh"
    },
    {
        id: 4,
        title: "The Truth About Solo World Travel",
        views: "678K",
        duration: "15:20",
        thumbnail: "solo"
    },
    {
        id: 5,
        title: "Motorcycle Maintenance Essentials for Long Trips",
        views: "234K",
        duration: "25:08",
        thumbnail: "maint"
    },
    {
        id: 6,
        title: "Meeting the Maasai Tribe | Tanzania",
        views: "567K",
        duration: "19:45",
        thumbnail: "maasai"
    }
];

const pressArticles = [
    {
        id: 1,
        videoId: "7s7VnMycoeA",
        title: "Roaming Wheeels Media Coverage 1",
        publication: "News Feature",
        date: "2024",
        type: "Video Report",
        logo: "📰"
    },
    {
        id: 2,
        videoId: "1xkLf0AE6l4",
        title: "Roaming Wheeels Media Coverage 2",
        publication: "News Feature",
        date: "2024",
        type: "Video Report",
        logo: "📰"
    },
    {
        id: 3,
        videoId: "oO8QVPJkUL4",
        title: "Roaming Wheeels Media Coverage 3",
        publication: "News Feature",
        date: "2024",
        type: "Video Report",
        logo: "📰"
    },
    {
        id: 4,
        videoId: "l_fBLKPDr_M",
        title: "Roaming Wheeels Media Coverage 4",
        publication: "News Feature",
        date: "2024",
        type: "Video Report",
        logo: "📰"
    },
    {
        id: 5,
        videoId: "EmjGIqb4-oo",
        title: "Roaming Wheeels Media Coverage 5",
        publication: "News Feature",
        date: "2024",
        type: "Video Report",
        logo: "📰"
    }
];

const tvAppearances = [
    {
        channel: "NDTV",
        show: "The Buck Stops Here",
        date: "Nov 15, 2024",
        icon: Tv
    },
    {
        channel: "Zee News",
        show: "DNA with Sudhir Chaudhary",
        date: "Oct 28, 2024",
        icon: Tv
    },
    {
        channel: "ABP News",
        show: "Master Stroke",
        date: "Oct 10, 2024",
        icon: Tv
    }
];

const podcasts = [
    {
        videoId: "xuqEderflHQ",
        title: "Roaming Wheeels Podcast Episode 1",
        platform: "YouTube",
        icon: Radio
    },
    {
        videoId: "XNQybLH2Xw4",
        title: "Roaming Wheeels Podcast Episode 2",
        platform: "YouTube",
        icon: Radio
    },
    {
        videoId: "qRMrK1UES0w",
        title: "Roaming Wheeels Podcast Episode 3",
        platform: "YouTube",
        icon: Radio
    },
    {
        videoId: "f52ZhkkqXK0",
        title: "Roaming Wheeels Podcast Episode 4",
        platform: "YouTube",
        icon: Radio
    },
    {
        videoId: "X-FkaHxsYAI",
        title: "Roaming Wheeels Podcast Episode 5",
        platform: "YouTube",
        icon: Radio
    },
    {
        videoId: "RfqoNvpYjE4",
        title: "Roaming Wheeels Podcast Episode 6",
        platform: "YouTube",
        icon: Radio
    },
    {
        videoId: "TZA9wVXDB0w",
        title: "Roaming Wheeels Podcast Episode 7",
        platform: "YouTube",
        icon: Radio
    }
];

export default function Media() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

    const thumbnailGradients: Record<string, string> = {
        "doc-1": "from-red-600 via-orange-500 to-yellow-500",
        "namibia": "from-amber-500 via-orange-500 to-red-500",
        "kazakh": "from-blue-600 via-cyan-500 to-teal-500",
        "solo": "from-purple-600 via-pink-500 to-rose-500",
        "maint": "from-slate-600 via-gray-500 to-zinc-500",
        "maasai": "from-green-600 via-emerald-500 to-teal-500"
    };

    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-brand-midnight" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,107,53,0.08),transparent_60%)]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-sm font-medium mb-6">
                        <Youtube className="w-4 h-4" />
                        Media & Press
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        In The <span className="text-gradient">Spotlight</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Featured documentaries, press coverage, interviews, and more.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-16"
                >
                    {mediaCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                                activeCategory === category
                                    ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                                    : "bg-white/5 text-text-secondary hover:bg-white/10 hover:text-white"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* YouTube Section */}
                {(activeCategory === "All" || activeCategory === "YouTube") && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Youtube className="w-6 h-6 text-red-500" />
                            <h3 className="text-2xl font-bold text-white">YouTube Channel</h3>
                            <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-sm">10.7K Subscribers</span>
                        </div>

                        {/* Featured Video */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-3xl overflow-hidden mb-8 cursor-pointer group"
                            onMouseEnter={() => setHoveredVideo(1)}
                            onMouseLeave={() => setHoveredVideo(null)}
                        >
                            <div className={`aspect-video bg-gradient-to-br ${thumbnailGradients["doc-1"]} relative`}>
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all" />
                                
                                {/* Play Button */}
                                <motion.div
                                    animate={{ scale: hoveredVideo === 1 ? 1.1 : 1 }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-red-500 transition-all">
                                        <Play className="w-8 h-8 text-white ml-1" />
                                    </div>
                                </motion.div>

                                {/* Duration Badge */}
                                <div className="absolute bottom-4 right-4 px-3 py-1 rounded bg-black/60 text-white text-sm">
                                    48:32
                                </div>

                                {/* Info Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                    <span className="inline-block px-3 py-1 rounded-full bg-red-500 text-white text-xs font-medium mb-3">
                                        FEATURED DOCUMENTARY
                                    </span>
                                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                        Crossing 47 Countries on a Motorcycle | Full Documentary
                                    </h4>
                                    <div className="flex items-center gap-4 text-white/70 text-sm">
                                        <span className="flex items-center gap-1">
                                            <Eye className="w-4 h-4" />
                                            850K views
                                        </span>
                                        <span>•</span>
                                        <span>48 minutes</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Video Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {youtubeVideos.slice(1).map((video, index) => (
                                <motion.div
                                    key={video.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    onMouseEnter={() => setHoveredVideo(video.id)}
                                    onMouseLeave={() => setHoveredVideo(null)}
                                    className="group cursor-pointer"
                                >
                                    {/* Thumbnail */}
                                    <div className={`aspect-video rounded-xl overflow-hidden bg-gradient-to-br ${thumbnailGradients[video.thumbnail]} relative mb-4`}>
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all" />
                                        
                                        {/* Play Icon */}
                                        <motion.div
                                            animate={{ scale: hoveredVideo === video.id ? 1.1 : 1, opacity: hoveredVideo === video.id ? 1 : 0.8 }}
                                            className="absolute inset-0 flex items-center justify-center"
                                        >
                                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-red-500 transition-all">
                                                <Play className="w-5 h-5 text-white ml-0.5" />
                                            </div>
                                        </motion.div>

                                        {/* Duration */}
                                        <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 text-white text-xs">
                                            {video.duration}
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <h4 className="text-white font-medium mb-1 group-hover:text-red-400 transition-colors line-clamp-2">
                                        {video.title}
                                    </h4>
                                    <div className="flex items-center gap-2 text-text-secondary text-sm">
                                        <Eye className="w-3 h-3" />
                                        {video.views} views
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Subscribe CTA */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="mt-8 text-center"
                        >
                            <a 
                                href="https://www.youtube.com/@roamingwheeels?sub_confirmation=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium transition-all"
                            >
                                <Youtube className="w-5 h-5" />
                                Subscribe on YouTube
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </motion.div>
                    </motion.div>
                )}

                {/* Press Coverage */}
                {(activeCategory === "All" || activeCategory === "Press") && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Newspaper className="w-6 h-6 text-brand-gold" />
                            <h3 className="text-2xl font-bold text-white">Press & News Coverage</h3>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {pressArticles.map((article, index) => (
                                <motion.div
                                    key={article.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group"
                                >
                                    {/* YouTube Embed */}
                                    <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-black">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${article.videoId}`}
                                            title={article.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full h-full"
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="flex items-start gap-3">
                                        <div className="text-2xl">{article.logo}</div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-brand-gold font-medium text-sm">{article.publication}</span>
                                                <span className="px-2 py-0.5 rounded bg-brand-gold/10 text-brand-gold text-xs">
                                                    {article.type}
                                                </span>
                                            </div>
                                            <h4 className="text-white font-medium text-sm mb-1 group-hover:text-brand-gold transition-colors line-clamp-2">
                                                {article.title}
                                            </h4>
                                            <div className="flex items-center gap-2 text-text-secondary text-xs">
                                                <Calendar className="w-3 h-3" />
                                                {article.date}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* TV & Podcasts Row */}
                {(activeCategory === "All" || activeCategory === "TV" || activeCategory === "Podcasts") && (
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* TV Appearances */}
                        {(activeCategory === "All" || activeCategory === "TV") && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <Tv className="w-6 h-6 text-brand-teal" />
                                    <h3 className="text-xl font-bold text-white">TV Appearances</h3>
                                </div>
                                <div className="space-y-4">
                                    {tvAppearances.map((appearance, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-brand-teal/50 transition-all"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-brand-teal font-medium">{appearance.channel}</p>
                                                    <p className="text-white text-sm">{appearance.show}</p>
                                                </div>
                                                <span className="text-text-secondary text-xs">{appearance.date}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Podcasts */}
                        {(activeCategory === "All" || activeCategory === "Podcasts") && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="md:col-span-2"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <Radio className="w-6 h-6 text-purple-400" />
                                    <h3 className="text-xl font-bold text-white">Podcast Features</h3>
                                </div>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {podcasts.map((podcast, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="group"
                                        >
                                            {/* YouTube Embed */}
                                            <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-black">
                                                <iframe
                                                    src={`https://www.youtube.com/embed/${podcast.videoId}`}
                                                    title={podcast.title}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    className="w-full h-full"
                                                />
                                            </div>
                                            
                                            {/* Info */}
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                                                    <Radio className="w-5 h-5 text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-white font-medium text-sm group-hover:text-purple-400 transition-colors line-clamp-2">
                                                        {podcast.title}
                                                    </p>
                                                    <span className="text-purple-400 text-xs">{podcast.platform}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                )}

                {/* Awards Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-brand-gold/10 to-brand-ember/10 border border-brand-gold/20"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-gold to-brand-ember flex items-center justify-center flex-shrink-0">
                            <Award className="w-10 h-10 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">For Media & Collaboration Inquiries</h3>
                            <p className="text-text-secondary mb-4">
                                Interested in featuring Yogesh or collaborating on content? Get in touch with our media team.
                            </p>
                            <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-gold to-brand-ember text-white rounded-full font-medium">
                                Contact Media Team
                                <ExternalLink className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

