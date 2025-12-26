"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, ChevronLeft, ChevronRight, Heart, Download, Share2, MapPin } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Landscapes", "Culture", "Adventure", "Wildlife", "Portraits"];

const galleryItems = [
    {
        id: 1,
        title: "Sossusvlei Sunrise",
        location: "Namibia",
        category: "Landscapes",
        featured: true,
        gradient: "from-orange-500 via-red-500 to-yellow-500",
        likes: 4521,
        span: "col-span-2 row-span-2"
    },
    {
        id: 2,
        title: "Maasai Warriors",
        location: "Tanzania",
        category: "Culture",
        featured: false,
        gradient: "from-amber-600 via-orange-500 to-red-600",
        likes: 2847,
        span: "col-span-1 row-span-1"
    },
    {
        id: 3,
        title: "Norwegian Fjords",
        location: "Norway",
        category: "Landscapes",
        featured: false,
        gradient: "from-blue-600 via-cyan-500 to-teal-500",
        likes: 3156,
        span: "col-span-1 row-span-1"
    },
    {
        id: 4,
        title: "Silk Road Sunset",
        location: "Uzbekistan",
        category: "Adventure",
        featured: false,
        gradient: "from-purple-600 via-pink-500 to-orange-500",
        likes: 2234,
        span: "col-span-1 row-span-2"
    },
    {
        id: 5,
        title: "Desert Elephant",
        location: "Namibia",
        category: "Wildlife",
        featured: false,
        gradient: "from-gray-600 via-yellow-600 to-orange-500",
        likes: 5632,
        span: "col-span-1 row-span-1"
    },
    {
        id: 6,
        title: "Kazakh Nomad",
        location: "Kazakhstan",
        category: "Portraits",
        featured: false,
        gradient: "from-emerald-600 via-teal-500 to-cyan-500",
        likes: 1987,
        span: "col-span-1 row-span-1"
    },
    {
        id: 7,
        title: "Table Mountain View",
        location: "South Africa",
        category: "Landscapes",
        featured: true,
        gradient: "from-blue-500 via-purple-500 to-pink-500",
        likes: 4123,
        span: "col-span-2 row-span-1"
    },
    {
        id: 8,
        title: "Moroccan Medina",
        location: "Morocco",
        category: "Culture",
        featured: false,
        gradient: "from-red-600 via-orange-500 to-yellow-500",
        likes: 2654,
        span: "col-span-1 row-span-1"
    },
    {
        id: 9,
        title: "Victoria Falls",
        location: "Zambia",
        category: "Landscapes",
        featured: false,
        gradient: "from-cyan-500 via-blue-500 to-purple-600",
        likes: 3897,
        span: "col-span-1 row-span-1"
    },
    {
        id: 10,
        title: "Sahara Night Camp",
        location: "Morocco",
        category: "Adventure",
        featured: false,
        gradient: "from-indigo-600 via-purple-600 to-pink-500",
        likes: 2156,
        span: "col-span-1 row-span-1"
    },
    {
        id: 11,
        title: "Lion Encounter",
        location: "Serengeti",
        category: "Wildlife",
        featured: false,
        gradient: "from-yellow-500 via-orange-500 to-red-500",
        likes: 6234,
        span: "col-span-1 row-span-1"
    },
    {
        id: 12,
        title: "Alpine Pass",
        location: "Switzerland",
        category: "Adventure",
        featured: false,
        gradient: "from-slate-600 via-gray-500 to-white",
        likes: 2987,
        span: "col-span-1 row-span-1"
    }
];

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [hoveredImage, setHoveredImage] = useState<number | null>(null);

    const filteredItems = activeCategory === "All" 
        ? galleryItems 
        : galleryItems.filter(item => item.category === activeCategory);

    const selectedItem = galleryItems.find(item => item.id === selectedImage);

    const handlePrev = () => {
        if (selectedImage === null) return;
        const currentIndex = galleryItems.findIndex(item => item.id === selectedImage);
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : galleryItems.length - 1;
        setSelectedImage(galleryItems[prevIndex].id);
    };

    const handleNext = () => {
        if (selectedImage === null) return;
        const currentIndex = galleryItems.findIndex(item => item.id === selectedImage);
        const nextIndex = currentIndex < galleryItems.length - 1 ? currentIndex + 1 : 0;
        setSelectedImage(galleryItems[nextIndex].id);
    };

    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-brand-midnight" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-6">
                        <Camera className="w-4 h-4" />
                        Visual Journey
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Journey in <span className="text-gradient">Frames</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Capturing the beauty, culture, and spirit of the road less traveled.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                                activeCategory === category
                                    ? "bg-purple-500 text-white shadow-lg shadow-purple-500/30"
                                    : "bg-white/5 text-text-secondary hover:bg-white/10 hover:text-white"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Masonry Gallery Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                onMouseEnter={() => setHoveredImage(item.id)}
                                onMouseLeave={() => setHoveredImage(null)}
                                onClick={() => setSelectedImage(item.id)}
                                className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                                    item.featured ? item.span : ""
                                }`}
                            >
                                {/* Image Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                                
                                {/* Overlay */}
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: hoveredImage === item.id ? 1 : 0 }}
                                    className="absolute inset-0 bg-black/50 transition-opacity"
                                />
                                
                                {/* Content */}
                                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ 
                                            y: hoveredImage === item.id ? 0 : 20, 
                                            opacity: hoveredImage === item.id ? 1 : 0 
                                        }}
                                        className="space-y-2"
                                    >
                                        <div className="flex items-center gap-2 text-white/80 text-xs">
                                            <MapPin className="w-3 h-3" />
                                            {item.location}
                                        </div>
                                        <h3 className="text-white font-bold text-lg">{item.title}</h3>
                                        <div className="flex items-center gap-2 text-white/60 text-xs">
                                            <Heart className="w-3 h-3" />
                                            {item.likes.toLocaleString()}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Category Badge - Always visible */}
                                <div className="absolute top-3 left-3">
                                    <span className="px-2 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs">
                                        {item.category}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedImage !== null && selectedItem && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        >
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedImage(null)}
                                className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                            />

                            {/* Content */}
                            <div className="relative z-10 w-full max-w-5xl">
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Image */}
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    className={`aspect-video rounded-2xl overflow-hidden bg-gradient-to-br ${selectedItem.gradient}`}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center text-white/20">
                                        <Camera className="w-20 h-20" />
                                    </div>
                                </motion.div>

                                {/* Navigation */}
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>

                                {/* Info Bar */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="mt-6 flex items-center justify-between"
                                >
                                    <div>
                                        <h3 className="text-white text-2xl font-bold">{selectedItem.title}</h3>
                                        <div className="flex items-center gap-2 text-text-secondary mt-1">
                                            <MapPin className="w-4 h-4" />
                                            {selectedItem.location}
                                            <span className="px-2 py-0.5 rounded bg-white/10 text-xs ml-2">
                                                {selectedItem.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                                            <Heart className="w-4 h-4" />
                                            {selectedItem.likes.toLocaleString()}
                                        </button>
                                        <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                                            <Share2 className="w-4 h-4" />
                                        </button>
                                        <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                                            <Download className="w-4 h-4" />
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
