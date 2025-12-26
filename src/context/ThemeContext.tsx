"use client";

import { createContext, useContext, useState, useLayoutEffect, ReactNode, useCallback } from "react";

export type ThemeType = "dark" | "light" | "sand-dunes";

interface ThemeContextType {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
    backgroundImage: string | null;
    setBackgroundImage: (url: string | null) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Get initial theme - runs during SSR and client-side hydration
function getInitialTheme(): ThemeType {
    if (typeof window === "undefined") return "sand-dunes";
    try {
        const saved = localStorage.getItem("rw-theme");
        if (saved && ["dark", "light", "sand-dunes"].includes(saved)) {
            return saved as ThemeType;
        }
    } catch {
        // localStorage not available
    }
    return "sand-dunes";
}

function getInitialBgImage(): string | null {
    if (typeof window === "undefined") return null;
    try {
        return localStorage.getItem("rw-bg-image");
    } catch {
        return null;
    }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    // Use lazy initialization to avoid hydration mismatch
    const [theme, setThemeState] = useState<ThemeType>("sand-dunes");
    const [backgroundImage, setBackgroundImageState] = useState<string | null>(null);
    const [, setIsHydrated] = useState(false);

    // Hydrate from localStorage - useLayoutEffect to prevent flash
    useLayoutEffect(() => {
        const savedTheme = getInitialTheme();
        const savedBg = getInitialBgImage();
        
        // Apply theme to DOM immediately
        document.documentElement.setAttribute("data-theme", savedTheme);
        
        // Schedule state updates
        queueMicrotask(() => {
            setThemeState(savedTheme);
            if (savedBg) setBackgroundImageState(savedBg);
            setIsHydrated(true);
        });
    }, []);

    // Update theme
    const setTheme = useCallback((newTheme: ThemeType) => {
        setThemeState(newTheme);
        try {
            localStorage.setItem("rw-theme", newTheme);
        } catch { /* ignore */ }
        document.documentElement.classList.remove("theme-dark", "theme-light", "theme-sand-dunes");
        document.documentElement.classList.add(`theme-${newTheme}`);
        document.documentElement.setAttribute("data-theme", newTheme);
    }, []);

    // Update background image
    const setBackgroundImage = useCallback((url: string | null) => {
        setBackgroundImageState(url);
        try {
            if (url) {
                localStorage.setItem("rw-bg-image", url);
            } else {
                localStorage.removeItem("rw-bg-image");
            }
        } catch { /* ignore */ }
    }, []);

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

