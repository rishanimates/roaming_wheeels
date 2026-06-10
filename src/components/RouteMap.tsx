"use client";

import { useState, useEffect } from "react";

// More detailed coordinates with intermediate waypoints for road-like routes
const legCoordinates: Record<number, [number, number][]> = {
    1: [
        // Mumbai, India (start)
        [19.076, 72.877],
        // Flight path Mumbai to Tehran (shown as dotted line by fewer points)
        [20.5, 70.5], [22.0, 68.0], [24.5, 64.0], [27.5, 60.0], [30.0, 56.0],
        // Tehran, Iran
        [32.42, 53.68],
        // Iran to Turkey (road)
        [33.5, 52.0], [34.8, 50.2], [35.69, 51.42], [36.5, 48.5], [37.55, 45.07], 
        [38.42, 43.23], [39.92, 32.85],
        // Turkey to Greece  
        [40.98, 29.02], [41.01, 28.97], [40.64, 22.94], [39.64, 22.41], [37.98, 23.72],
        // Greece through Balkans
        [40.85, 22.42], [41.99, 21.42], [41.32, 19.81], [42.44, 19.26], [43.34, 17.81],
        [43.85, 18.41], [44.81, 16.43], [45.81, 15.98], [46.05, 14.50],
        // To Italy, Switzerland, France
        [45.46, 12.33], [45.06, 10.99], [44.41, 8.93], [43.71, 7.26], [45.75, 4.85],
        [46.94, 7.44], [47.37, 8.54], [48.85, 2.35],
        // To UK
        [49.44, 0.10], [51.50, -0.12],
        // Belgium, Luxembourg, Germany
        [50.85, 4.35], [49.61, 6.13], [50.11, 8.68], [52.52, 13.40],
        // Austria, Slovakia, Hungary
        [48.20, 16.37], [48.14, 17.10], [47.49, 19.04],
        // Romania, Serbia, Bulgaria
        [44.42, 26.10], [44.78, 20.44], [42.69, 23.32],
        // Back through Turkey
        [41.01, 28.97], [39.92, 32.85],
        // Caucasus
        [41.71, 44.82], [40.17, 44.51], [40.40, 49.86],
        // Back to Iran
        [38.07, 46.29], [35.69, 51.42], [32.42, 53.68],
        // Gulf states (road)
        [29.5, 53.0], [27.47, 53.39], [25.27, 55.29], [26.22, 50.58],
        // Back to India (flight path - fewer points)
        [25.5, 58.0], [24.0, 62.0], [23.0, 66.0], [22.0, 70.0],
        // Mumbai, India (return)
        [19.07, 72.87]
    ],
    2: [
        // Mumbai-India to Nepal
        [19.076, 72.877], // Mumbai, India
        [23.02, 72.57],   // Ahmedabad
        [26.91, 75.79],   // Jaipur
        [28.61, 77.20],   // Delhi
        [27.17, 78.00],   // Agra
        [26.84, 80.94],   // Lucknow
        [27.71, 85.32],   // Kathmandu, Nepal
        // Nepal to Tibet, China
        [28.20, 85.93],   // Border (Kodari)
        [29.25, 89.64],   // Shigatse, Tibet
        [29.65, 91.17],   // Lhasa, Tibet
        // Tibet, China to Central Asia
        [32.05, 92.10],   // Nagqu
        [35.86, 93.08],   // Qinghai
        [43.80, 87.58],   // Urumqi
        // Kazakhstan
        [43.23, 76.94],   // Almaty, Kazakhstan
        // Kyrgyzstan
        [42.87, 74.56],   // Bishkek, Kyrgyzstan
        // Uzbekistan
        [41.31, 69.27],   // Tashkent, Uzbekistan
        [39.65, 66.95],   // Samarkand, Uzbekistan
        // Kazakhstan again
        [43.65, 68.32],   // Turkistan, Kazakhstan
        [51.16, 71.44],   // Astana, Kazakhstan
        // Russia
        [54.98, 73.36],   // Omsk, Russia
        [55.75, 37.61],   // Moscow, Russia
        [59.93, 30.31],   // St. Petersburg, Russia
        // Estonia
        [59.43, 24.75],   // Tallinn, Estonia
        // Latvia
        [56.94, 24.10],   // Riga, Latvia
        // Finland
        [60.17, 24.94],   // Helsinki, Finland
        [66.50, 25.73],   // Rovaniemi, Finland (Arctic Circle)
        // Norway (heading north)
        [69.97, 23.27],   // Alta, Norway
        // Nordkapp, Norway
        [71.17, 25.79],   // Nordkapp, Norway
        // Sweden (heading south)
        [67.86, 20.23],   // Kiruna, Sweden
        [65.58, 22.15],   // Luleå, Sweden
        [59.33, 18.07],   // Stockholm, Sweden
        // Denmark
        [55.68, 12.57],   // Copenhagen, Denmark
        // Germany
        [53.55, 9.99],    // Hamburg, Germany
        // Netherlands
        [52.37, 4.89],    // Amsterdam, Netherlands
        // Belgium
        [50.85, 4.35],    // Brussels, Belgium
        // France
        [48.85, 2.35],    // Paris, France
        // UK-London
        [51.50, -0.12]    // London, UK
    ],
    3: [
        // UK-London
        [51.50, -0.12],
        // France
        [50.95, 1.85],
        // Belgium
        [50.85, 4.35],
        // Netherlands
        [52.37, 4.89],
        // Belgium again
        [50.41, 4.44],
        // Paris, France
        [48.85, 2.35],
        // Barcelona, Spain
        [41.38, 2.17],
        // Morocco
        [35.78, -5.81], [34.03, -6.83], [33.97, -6.84],
        // Down West Africa coast (Western Sahara, Mauritania, Senegal, Gambia, Guinea, Sierra Leone, Liberia)
        [31.63, -8.00], [27.15, -13.20], [24.21, -12.88], [21.45, -15.96],
        [18.08, -15.97], [16.27, -16.16], [14.71, -17.46], [13.45, -16.57],
        [11.86, -15.60], [9.64, -13.57], [8.48, -13.23], [6.30, -10.79],
        // Ivory Coast to Nigeria
        [6.82, -5.28], [5.35, -4.00], [5.60, -0.18], [6.17, 1.23], [6.49, 2.62],
        [6.45, 3.39], [9.08, 7.49],
        // Central Africa: Cameroon, Gabon, Congo, ROC, DRC
        [7.38, 9.11], [6.12, 10.27], [3.84, 11.50], [1.65, 10.16],
        [0.25, 9.45],   // Libreville to Republic of Congo border
        [-1.50, 11.50], // ROC
        [-4.26, 15.24], // Brazzaville (ROC)
        [-4.32, 15.31], // Kinshasa (DRC)
        [-5.85, 13.45], // DRC to Angola border (Boma)
        // Angola & Namibia
        [-8.83, 13.23], [-12.37, 16.32],
        [-17.86, 15.77], [-22.55, 17.08], [-26.20, 18.06],
        // South Africa - Cape of Good Hope
        [-33.92, 18.42], [-34.36, 18.47],
        // Lesotho
        [-29.31, 27.48],
        // eSwatini
        [-26.31, 31.14],
        // Mozambique
        [-25.96, 32.58],
        // Madagascar
        [-22.00, 40.00], [-18.88, 47.51],
        // return to Mozambique
        [-19.83, 34.83],
        // Zimbabwe
        [-17.82, 31.05],
        // Zambia
        [-15.41, 28.28],
        // Tanzania
        [-8.90, 33.45],
        // Burundi
        [-3.38, 29.36],
        // Rwanda
        [-1.94, 30.06],
        // Uganda
        [-0.31, 32.58],
        // Kenya
        [-1.29, 36.82],
        // Indian Ocean crossing
        [3.0, 48.0], [8.0, 56.0], [13.0, 64.0],
        // Mumbai, India
        [19.076, 72.877]
    ]
};

// Map center and zoom for each leg
const legMapConfig: Record<number, { center: [number, number]; zoom: number }> = {
    1: { center: [38, 40], zoom: 3 },
    2: { center: [48, 55], zoom: 2 },
    3: { center: [8, -2], zoom: 3 }
};

// Route colors for each leg
const legColors: Record<number, string> = {
    1: "#22c55e", // Green
    2: "#3b82f6", // Blue  
    3: "#f97316"  // Orange
};

interface RouteMapProps {
    legId: number;
}

export default function RouteMap({ legId }: RouteMapProps) {
    const [MapComponent, setMapComponent] = useState<React.ComponentType<{
        coordinates: [number, number][];
        center: [number, number];
        zoom: number;
        color: string;
    }> | null>(null);
    
    useEffect(() => {
        // Dynamic import on client side
        import("./MapContent").then((mod) => {
            setMapComponent(() => mod.default);
        });
    }, []);

    const coordinates = legCoordinates[legId] || [];
    const config = legMapConfig[legId] || { center: [20, 0] as [number, number], zoom: 2 };
    const color = legColors[legId] || "#f97316";

    if (!MapComponent) {
        return (
            <div className="w-full h-full bg-brand-charcoal/50 flex items-center justify-center min-h-[300px]">
                <div className="text-text-secondary animate-pulse">Loading map...</div>
            </div>
        );
    }

    return (
        <MapComponent 
            key={`map-${legId}`}
            coordinates={coordinates}
            center={config.center}
            zoom={config.zoom}
            color={color}
        />
    );
}

