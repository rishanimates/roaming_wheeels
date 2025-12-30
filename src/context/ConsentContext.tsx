"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";

interface ConsentContextType {
    consent: boolean | null; // null = not yet decided, true = accepted, false = declined
    acceptConsent: () => void;
    declineConsent: () => void;
}

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

// Define gtag type for window
type GtagFunction = (
    command: "consent" | "config" | "js" | "event",
    ...args: unknown[]
) => void;

// Helper to get initial consent from localStorage
function getInitialConsent(): boolean | null {
    if (typeof window === "undefined") return null;
    try {
        const saved = localStorage.getItem("cookie-consent");
        if (saved === "true") return true;
        if (saved === "false") return false;
    } catch {
        // localStorage not available
    }
    return null;
}

export function ConsentProvider({ children }: { children: ReactNode }) {
    // Start with null to prevent hydration mismatch, then update in useEffect
    const [consent, setConsent] = useState<boolean | null>(null);

    useEffect(() => {
        const savedConsent = getInitialConsent();
        if (savedConsent !== null) {
            queueMicrotask(() => {
                setConsent(savedConsent);
            });
        }
    }, []);

    const updateConsent = useCallback((value: boolean) => {
        setConsent(value);
        localStorage.setItem("cookie-consent", value.toString());

        // Update Google Consent Mode
        if (typeof window !== "undefined") {
            const gtag = (window as unknown as { gtag: GtagFunction }).gtag;
            if (typeof gtag === "function") {
                gtag("consent", "update", {
                    ad_storage: value ? "granted" : "denied",
                    analytics_storage: value ? "granted" : "denied",
                    ad_user_data: value ? "granted" : "denied",
                    ad_personalization: value ? "granted" : "denied",
                });
            }
        }
    }, []);

    const acceptConsent = () => updateConsent(true);
    const declineConsent = () => updateConsent(false);

    return (
        <ConsentContext.Provider value={{ consent, acceptConsent, declineConsent }}>
            {children}
        </ConsentContext.Provider>
    );
}

export function useConsent() {
    const context = useContext(ConsentContext);
    if (context === undefined) {
        throw new Error("useConsent must be used within a ConsentProvider");
    }
    return context;
}
