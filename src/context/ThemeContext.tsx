"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type ThemeType = "dark" | "light" | "sand-dunes";

interface ThemeContextType {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
    backgroundImage: string | null;
    setBackgroundImage: (url: string | null) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<ThemeType>("sand-dunes");
    const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Load saved theme from localStorage
        const savedTheme = localStorage.getItem("rw-theme") as ThemeType;
        const savedBg = localStorage.getItem("rw-bg-image");
        
        if (savedTheme && ["dark", "light", "sand-dunes"].includes(savedTheme)) {
            setTheme(savedTheme);
        }
        if (savedBg) {
            setBackgroundImage(savedBg);
        }
    }, []);

    useEffect(() => {
        if (mounted) {
            // Save theme to localStorage
            localStorage.setItem("rw-theme", theme);
            
            // Update document class
            document.documentElement.classList.remove("theme-dark", "theme-light", "theme-sand-dunes");
            document.documentElement.classList.add(`theme-${theme}`);
            
            // Update data attribute for CSS
            document.documentElement.setAttribute("data-theme", theme);
        }
    }, [theme, mounted]);

    useEffect(() => {
        if (mounted && backgroundImage) {
            localStorage.setItem("rw-bg-image", backgroundImage);
        }
    }, [backgroundImage, mounted]);

    // Prevent flash of wrong theme
    if (!mounted) {
        return null;
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, backgroundImage, setBackgroundImage }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

