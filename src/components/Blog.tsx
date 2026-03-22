"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, MapPin, Heart, MessageCircle, Bookmark, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";
import { BlogPost } from "@/sanity/lib/types";
import Image from "next/image";

// Type for formatted posts used in UI
interface FormattedPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    location: string;
    category: string;
    featured: boolean;
    likes: number;
    comments: number;
    image: string;
    slug: string;
}

const blogPosts: FormattedPost[] = [
    {
        id: 1,
        title: "The Night I Slept Under Namibian Stars",
        excerpt: "Engine trouble in the middle of the Sossusvlei dunes taught me that sometimes, breakdowns lead to the most beautiful experiences.",
        date: "Dec 15, 2024",
        readTime: "8 min read",
        location: "Sossusvlei, Namibia",
        category: "Adventures",
        featured: true,
        likes: 2847,
        comments: 156,
        image: "gradient-1",
        slug: "namibian-stars"
    },
    {
        id: 2,
        title: "Crossing the Kazakh Steppe: 500km of Nothing",
        excerpt: "What happens when the GPS fails, fuel runs low, and the horizon stretches endlessly? You discover what you're truly made of.",
        date: "Nov 28, 2024",
        readTime: "12 min read",
        location: "Kazakhstan",
        category: "Challenges",
        featured: true,
        likes: 3421,
        comments: 203,
        image: "gradient-2",
        slug: "kazakh-steppe"
    },
    {
        id: 3,
        title: "Tea with Strangers: Persian Hospitality",
        excerpt: "How a language barrier became a bridge to one of the most memorable meals of my journey.",
        date: "Nov 10, 2024",
        readTime: "6 min read",
        location: "Tehran, Iran",
        category: "Culture",
        featured: false,
        likes: 1956,
        comments: 89,
        image: "gradient-3",
        slug: "persian-hospitality"
    },
    {
        id: 4,
        title: "The Art of Motorcycle Maintenance on the Road",
        excerpt: "Lessons from fixing a broken chain in the middle of nowhere with nothing but basic tools and determination.",
        date: "Oct 25, 2024",
        readTime: "10 min read",
        location: "Uzbekistan",
        category: "Tips",
        featured: false,
        likes: 2103,
        comments: 134,
        image: "gradient-4",
        slug: "motorcycle-maintenance"
    },
    {
        id: 5,
        title: "When a Child Asked: 'Is India Real?'",
        excerpt: "A young boy in Tanzania changed my perspective on why we travel and what it means to share our world.",
        date: "Oct 12, 2024",
        readTime: "5 min read",
        location: "Arusha, Tanzania",
        category: "Reflections",
        featured: false,
        likes: 4521,
        comments: 267,
        image: "gradient-5",
        slug: "is-india-real"
    },
    {
        id: 6,
        title: "Riding Through the Atlas Mountains",
        excerpt: "Morocco's serpentine roads, ancient kasbahs, and the warmth of Berber hospitality.",
        date: "Sep 30, 2024",
        readTime: "9 min read",
        location: "Atlas Mountains, Morocco",
        category: "Adventures",
        featured: false,
        likes: 1876,
        comments: 98,
        image: "gradient-6",
        slug: "atlas-mountains"
    }
];

const categories = ["All", "Adventures", "Challenges", "Culture", "Tips", "Reflections"];

// Helper to format Sanity posts to match the UI structure
function formatSanityPost(post: BlogPost, index: number): FormattedPost {
    return {
        id: index + 1,
        title: post.title,
        excerpt: post.excerpt,
        date: new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        readTime: `${post.readTime} min read`,
        location: post.location,
        category: post.category,
        featured: post.featured,
        likes: Math.floor(Math.random() * 3000) + 1000,
        comments: Math.floor(Math.random() * 200) + 50,
        image: post.featuredImage || `gradient-${(index % 6) + 1}`,
        slug: post.slug.current,
    };
}

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredPost, setHoveredPost] = useState<number | null>(null);
    const [posts, setPosts] = useState<FormattedPost[]>(blogPosts);

    // Fetch posts from Sanity
    useEffect(() => {
        async function fetchPosts() {
            try {
                // Check if Sanity is configured
                if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
                    console.log('Sanity not configured, using mock data');
                    return;
                }

                const sanityPosts: BlogPost[] = await client.fetch(postsQuery);
                
                if (sanityPosts && sanityPosts.length > 0) {
                    const formattedPosts = sanityPosts.map((post, index) => formatSanityPost(post, index));
                    setPosts(formattedPosts);
                }
            } catch (error) {
                console.error('Error fetching posts from Sanity:', error);
                console.log('Using mock data as fallback');
            }
        }

        fetchPosts();
    }, []);

    const filteredPosts = activeCategory === "All" 
        ? posts 
        : posts.filter(post => post.category === activeCategory);

    const featuredPosts = posts.filter(post => post.featured);
    const regularPosts = filteredPosts.filter(post => !post.featured);

    const gradientClasses: Record<string, string> = {
        "gradient-1": "from-orange-500 via-pink-500 to-purple-600",
        "gradient-2": "from-blue-500 via-teal-500 to-emerald-600",
        "gradient-3": "from-amber-500 via-orange-500 to-red-600",
        "gradient-4": "from-slate-500 via-gray-600 to-zinc-700",
        "gradient-5": "from-green-500 via-emerald-500 to-teal-600",
        "gradient-6": "from-purple-500 via-violet-500 to-indigo-600"
    };

    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal via-brand-midnight to-brand-charcoal" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,107,53,0.05),transparent_50%)]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 text-brand-gold text-sm font-medium mb-6">
                        <TrendingUp className="w-4 h-4" />
                        Road Chronicles
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Stories From <span className="text-gradient">The Road</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Experiences, challenges, and revelations from 40,000+ kilometers of world exploration.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-16"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                                activeCategory === category
                                    ? "bg-brand-ember text-white shadow-lg shadow-brand-ember/30"
                                    : "bg-white/5 text-text-secondary hover:bg-white/10 hover:text-white"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Featured Posts - Only show when "All" is selected */}
                {activeCategory === "All" && (
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {featuredPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onMouseEnter={() => setHoveredPost(post.id)}
                                onMouseLeave={() => setHoveredPost(null)}
                                className="group relative rounded-3xl overflow-hidden cursor-pointer"
                            >
                                {/* Background Image or Gradient */}
                                {post.image && post.image.startsWith('http') ? (
                                    <>
                                        <Image 
                                            src={post.image} 
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </>
                                ) : (
                                    <div className={`absolute inset-0 bg-gradient-to-br ${gradientClasses[post.image]} opacity-80 group-hover:opacity-100 transition-opacity`} />
                                )}
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                {/* Content */}
                                <div className="relative z-10 p-8 min-h-[400px] flex flex-col justify-end">
                                    {/* Category Badge */}
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium mb-4 w-fit">
                                        {post.category}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">
                                        {post.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-white/80 mb-6 line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    {/* Meta */}
                                    <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm mb-6">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {post.readTime}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            {post.location}
                                        </span>
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4 text-white/60 text-sm">
                                            <span className="flex items-center gap-1">
                                                <Heart className="w-4 h-4" />
                                                {post.likes.toLocaleString()}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MessageCircle className="w-4 h-4" />
                                                {post.comments}
                                            </span>
                                        </div>
                                        
                                        <motion.div
                                            animate={{ x: hoveredPost === post.id ? 5 : 0 }}
                                            className="flex items-center gap-2 text-white font-medium"
                                        >
                                            Read Story
                                            <ArrowRight className="w-4 h-4" />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                )}

                {/* Regular Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regularPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredPost(post.id)}
                            onMouseLeave={() => setHoveredPost(null)}
                            className="group bg-brand-charcoal/50 rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all cursor-pointer"
                        >
                            {/* Image Placeholder */}
                            <div className="h-48 relative overflow-hidden">
                                {post.image && post.image.startsWith('http') ? (
                                    <>
                                        <Image 
                                            src={post.image} 
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/20" />
                                    </>
                                ) : (
                                    <>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClasses[post.image]}`} />
                                        <div className="absolute inset-0 bg-black/20" />
                                    </>
                                )}
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                                        {post.category}
                                    </span>
                                </div>
                                <button className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                                    <Bookmark className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-3 text-text-secondary text-xs mb-3">
                                    <span className="flex items-center gap-1">
                                        <MapPin className="w-3 h-3" />
                                        {post.location}
                                    </span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>

                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-ember transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                    <div className="flex items-center gap-3 text-text-secondary text-xs">
                                        <span className="flex items-center gap-1">
                                            <Heart className="w-3 h-3" />
                                            {post.likes.toLocaleString()}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MessageCircle className="w-3 h-3" />
                                            {post.comments}
                                        </span>
                                    </div>
                                    <span className="text-xs text-text-secondary">{post.date}</span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Load More */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-medium transition-all border border-white/10 hover:border-white/20 flex items-center gap-2 mx-auto">
                        Load More Stories
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

