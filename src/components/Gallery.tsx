"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, ChevronLeft, ChevronRight, Heart, Download, Share2, MapPin } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const categories = ["All", "Landscapes", "Culture", "Adventure", "Wildlife", "Portraits"];

const galleryItems = [
    {
        id: 1,
        title: "Majestic Peaks",
        location: "Himalayas",
        category: "Landscapes",
        featured: true,
        image: "/images/gallery/landscape/landscape_001.jpg",
        likes: 4521,
        span: "col-span-2 row-span-2"
    },
    {
        id: 2,
        title: "Border Crossing",
        location: "Nepal-China Border",
        category: "Culture",
        featured: false,
        image: "/images/gallery/culture/culture_001.jpg",
        likes: 2847,
        span: "col-span-1 row-span-1"
    },
    {
        id: 3,
        title: "Mountain Serenity",
        location: "Norway",
        category: "Landscapes",
        featured: false,
        image: "/images/gallery/landscape/landscape_002.jpg",
        likes: 3156,
        span: "col-span-1 row-span-1"
    },
    {
        id: 4,
        title: "The Long Road",
        location: "Silk Route",
        category: "Adventure",
        featured: false,
        image: "/images/gallery/adventure/adventure_001.jpg",
        likes: 2234,
        span: "col-span-1 row-span-2"
    },
    {
        id: 5,
        title: "Wild Encounter",
        location: "Arctic Circle",
        category: "Wildlife",
        featured: false,
        image: "/images/gallery/wildlife/wildlife_001.jpg",
        likes: 5632,
        span: "col-span-1 row-span-1"
    },
    {
        id: 6,
        title: "Local Hospitality",
        location: "Tibet",
        category: "Portraits",
        featured: false,
        image: "/images/gallery/portraits/portraits_001.jpg",
        likes: 1987,
        span: "col-span-1 row-span-1"
    },
    {
        id: 7,
        title: "Glacial Valley",
        location: "Northern Europe",
        category: "Landscapes",
        featured: true,
        image: "/images/gallery/landscape/landscape_003.jpg",
        likes: 4123,
        span: "col-span-2 row-span-1"
    },
    {
        id: 8,
        title: "Ancient Spirit",
        location: "Central Asia",
        category: "Culture",
        featured: false,
        image: "/images/gallery/culture/culture_002.jpg",
        likes: 2654,
        span: "col-span-1 row-span-1"
    },
    {
        id: 9,
        title: "Reflections",
        location: "Norway Fjords",
        category: "Landscapes",
        featured: false,
        image: "/images/gallery/landscape/landscape_004.jpg",
        likes: 3897,
        span: "col-span-1 row-span-1"
    },
    {
        id: 10,
        title: "Night Camp",
        location: "Himalayas",
        category: "Adventure",
        featured: false,
        image: "/images/gallery/adventure/adventure_002.jpg",
        likes: 2156,
        span: "col-span-1 row-span-1"
    },
    {
        id: 11,
        title: "Reindeer Path",
        location: "Finland",
        category: "Wildlife",
        featured: false,
        image: "/images/gallery/wildlife/wildlife_002.jpg",
        likes: 6234,
        span: "col-span-1 row-span-1"
    },
    {
        id: 12,
        title: "The Rider",
        location: "Silk Route",
        category: "Adventure",
        featured: false,
        image: "/images/gallery/adventure/adventure_003.jpg",
        likes: 2987,
        span: "col-span-1 row-span-1"
    },
    {
        id: 13,
        title: "Sunset Expedition",
        location: "Central Asia",
        category: "Adventure",
        featured: false,
        image: "/images/gallery/adventure/adventure_005.jpg",
        likes: 3421,
        span: "col-span-1 row-span-1"
    },
    {
        id: 14,
        title: "Local Life",
        location: "remote village",
        category: "Portraits",
        featured: false,
        image: "/images/gallery/portraits/portraits_002.jpg",
        likes: 2154,
        span: "col-span-1 row-span-1"
    },
    {
        id: 15,
        title: "Ancient Landmark",
        location: "Silk Route",
        category: "Culture",
        featured: false,
        image: "/images/gallery/culture/culture_003.jpg",
        likes: 2876,
        span: "col-span-1 row-span-1"
    },
    {
        id: 16,
        title: "Mountain Vista",
        location: "Tibet",
        category: "Landscapes",
        featured: false,
        image: "/images/gallery/landscape/landscape_005.jpg",
        likes: 4321,
        span: "col-span-1 row-span-1"
    },
    {
        id: 17,
        title: "Culture Exchange",
        location: "remote village",
        category: "Culture",
        featured: false,
        image: "/images/gallery/culture/culture_005.jpg",
        likes: 3122,
        span: "col-span-1 row-span-1"
    },
    {
        id: 18,
        title: "Expedition Moment",
        location: "Himalayas",
        category: "Adventure",
        featured: false,
        image: "/images/gallery/adventure/adventure_007.jpg",
        likes: 3876,
        span: "col-span-1 row-span-1"
    },
    {
        id: 19,
        title: "Local Portrait",
        location: "Tibet",
        category: "Portraits",
        featured: false,
        image: "/images/gallery/portraits/portraits_005.jpg",
        likes: 2432,
        span: "col-span-1 row-span-1"
    },
    {
        id: 20,
        title: "Wild Reindeer",
        location: "Norway",
        category: "Wildlife",
        featured: false,
        image: "/images/gallery/wildlife/wildlife_003.jpg",
        likes: 5123,
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
                                {/* Image Background */}
                                <div className="absolute inset-0 bg-brand-midnight">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                    />
                                </div>
                                
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
                                    className="aspect-video rounded-2xl overflow-hidden bg-brand-midnight relative"
                                >
                                    <Image
                                        src={selectedItem.image}
                                        alt={selectedItem.title}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
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
