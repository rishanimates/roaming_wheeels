"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";

interface ConsentContextType {
    consent: boolean | null; // null = not yet decided, true = accepted, false = declined
    acceptConsent: () => void;
    declineConsent: () => void;
}

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

// Type definitions for Google Tag
type GtagArgs = [string, string, Record<string, string | boolean>];
interface WindowWithGtag extends Window {
    gtag?: (...args: GtagArgs) => void;
    dataLayer?: unknown[];
}

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
            const win = window as unknown as WindowWithGtag;
            const consentState = value ? "granted" : "denied";
            const consentConfig = {
                ad_storage: consentState,
                analytics_storage: consentState,
                ad_user_data: consentState,
                ad_personalization: consentState,
                ads_data_redaction: !value,
            };

            if (typeof win.gtag === "function") {
                win.gtag("consent", "update", consentConfig);
            } else if (win.dataLayer) {
                win.dataLayer.push(["consent", "update", consentConfig]);
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
