"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Palette, Check, Image as ImageIcon, X } from "lucide-react";
import { useState, useRef } from "react";
import { useTheme, ThemeType } from "@/context/ThemeContext";

const themes: { id: ThemeType; name: string; icon: typeof Sun; colors: string[]; description: string }[] = [
    { 
        id: "dark", 
        name: "Dark Mode", 
        icon: Moon,
        colors: ["#0B0D0F", "#1A1D21", "#FF6B35"],
        description: "Easy on eyes, perfect for night"
    },
    { 
        id: "light", 
        name: "Light Mode", 
        icon: Sun,
        colors: ["#FAFAFA", "#111827", "#EA580C"],
        description: "Clean & bright for daytime"
    },
    { 
        id: "sand-dunes", 
        name: "Sand Dunes", 
        icon: Palette,
        colors: ["#2C1810", "#8B4513", "#DEB887"],
        description: "Warm African desert vibes"
    },
];

export default function ThemeSwitcher() {
    const { theme, setTheme, backgroundImage, setBackgroundImage } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [showBgInput, setShowBgInput] = useState(false);
    const [bgUrl, setBgUrl] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const currentTheme = themes.find(t => t.id === theme) || themes[0];
    const Icon = currentTheme.icon;

    const handleBgUrlSubmit = () => {
        if (bgUrl.trim()) {
            setBackgroundImage(bgUrl.trim());
            setBgUrl("");
            setShowBgInput(false);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setBackgroundImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const clearBackground = () => {
        setBackgroundImage(null);
        localStorage.removeItem("rw-bg-image");
    };

    return (
        <div className="fixed bottom-8 left-8 z-50">
            {/* Main Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 rounded-full bg-theme-card border border-theme-border shadow-lg flex items-center justify-center text-theme-text hover:border-theme-accent transition-colors"
            >
                <Icon className="w-6 h-6" />
            </motion.button>

            {/* Theme Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="absolute bottom-16 left-0 w-72 p-4 rounded-2xl bg-theme-card border border-theme-border shadow-2xl"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-theme-text font-bold">Theme Settings</h3>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="text-theme-text-secondary hover:text-theme-text"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Theme Options */}
                        <div className="space-y-2 mb-4">
                            {themes.map((t) => {
                                return (
                                    <button
                                        key={t.id}
                                        onClick={() => setTheme(t.id)}
                                        className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
                                            theme === t.id
                                                ? "bg-theme-accent/20 border border-theme-accent"
                                                : "bg-theme-bg/50 border border-transparent hover:border-theme-border"
                                        }`}
                                    >
                                        <div className="flex items-center gap-1">
                                            {t.colors.map((color, i) => (
                                                <div
                                                    key={i}
                                                    className="w-4 h-4 rounded-full border border-black/20"
                                                    style={{ backgroundColor: color }}
                                                />
                                            ))}
                                        </div>
                                        <div className="flex-1 text-left">
                                            <span className="text-theme-text text-sm font-medium block">
                                                {t.name}
                                            </span>
                                            <span className="text-theme-text-muted text-xs">
                                                {t.description}
                                            </span>
                                        </div>
                                        {theme === t.id && (
                                            <Check className="w-4 h-4 text-theme-accent" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Divider */}
                        <div className="border-t border-theme-border my-4" />

                        {/* Background Image */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-theme-text-secondary text-sm">Background Image</span>
                                {backgroundImage && (
                                    <button
                                        onClick={clearBackground}
                                        className="text-xs text-red-400 hover:text-red-300"
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>

                            {backgroundImage && (
                                <div className="relative w-full h-16 rounded-lg overflow-hidden">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={backgroundImage}
                                        alt="Background preview"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-xs">
                                        Current Background
                                    </div>
                                </div>
                            )}

                            <div className="flex gap-2">
                                <button
                                    onClick={() => fileInputRef.current?.click()}
                                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-theme-bg border border-theme-border text-theme-text-secondary text-xs hover:border-theme-accent transition-colors"
                                >
                                    <ImageIcon className="w-4 h-4" />
                                    Upload
                                </button>
                                <button
                                    onClick={() => setShowBgInput(!showBgInput)}
                                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-theme-bg border border-theme-border text-theme-text-secondary text-xs hover:border-theme-accent transition-colors"
                                >
                                    URL
                                </button>
                            </div>

                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="hidden"
                            />

                            <AnimatePresence>
                                {showBgInput && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                value={bgUrl}
                                                onChange={(e) => setBgUrl(e.target.value)}
                                                placeholder="Enter image URL..."
                                                className="flex-1 px-3 py-2 rounded-lg bg-theme-bg border border-theme-border text-theme-text text-xs focus:border-theme-accent outline-none"
                                            />
                                            <button
                                                onClick={handleBgUrlSubmit}
                                                className="px-3 py-2 rounded-lg bg-theme-accent text-white text-xs font-medium"
                                            >
                                                Set
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

