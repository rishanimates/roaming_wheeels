"use client";

import { useConsent } from "@/context/ConsentContext";
import { motion, AnimatePresence } from "framer-motion";

export default function ConsentBanner() {
    const { consent, acceptConsent, declineConsent } = useConsent();

    if (consent !== null) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
            >
                <div className="max-w-4xl mx-auto bg-theme-bg/95 backdrop-blur-md border border-theme-accent/20 rounded-2xl shadow-2xl p-6 md:flex md:items-center md:justify-between gap-6">
                    <div className="flex-1 mb-4 md:mb-0">
                        <h3 className="text-xl font-bebas tracking-wider text-theme-accent mb-2">Cookie Consent</h3>
                        <p className="text-theme-text/80 text-sm md:text-base leading-relaxed">
                            We use cookies to enhance your experience, analyze site traffic, and serve personalized content. 
                            To comply with EU regulations (GDPR), we need your consent to use these technologies. 
                            You can choose to accept all or decline non-essential tracking.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button
                            onClick={declineConsent}
                            className="px-6 py-2.5 rounded-full border border-theme-accent/30 text-theme-text hover:bg-theme-accent/10 transition-colors text-sm font-medium whitespace-nowrap"
                        >
                            Decline All
                        </button>
                        <button
                            onClick={acceptConsent}
                            className="px-8 py-2.5 rounded-full bg-theme-accent text-theme-bg font-bold hover:scale-105 transition-all shadow-lg text-sm whitespace-nowrap"
                        >
                            Accept All
                        </button>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

