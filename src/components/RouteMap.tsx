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
        // India to Nepal
        [28.61, 77.20], [27.17, 78.00], [26.84, 80.94], [26.45, 83.97], [27.71, 85.32],
        // Nepal to Tibet
        [28.20, 85.93], [28.65, 87.32], [29.25, 89.64], [29.65, 91.17],
        // Tibet to Central Asia
        [31.23, 91.13], [32.05, 92.10], [35.86, 93.08], [38.93, 92.13],
        [42.82, 93.51], [43.80, 87.58], [43.23, 76.94],
        // Kyrgyzstan, Uzbekistan
        [42.87, 74.56], [41.31, 69.27], [39.65, 66.95], [41.29, 69.24],
        // Kazakhstan to Russia  
        [43.65, 68.32], [47.09, 69.85], [51.16, 71.44], [53.21, 63.63],
        [54.98, 73.36], [55.03, 82.92], [55.75, 37.61],
        // Russia to Baltic
        [59.93, 30.31], [59.43, 24.75], [56.94, 24.10],
        // To Finland and Scandinavia
        [60.16, 24.93], [60.45, 22.26], [59.33, 18.06], [59.91, 10.75],
        // Down through Europe
        [57.70, 11.96], [55.67, 12.56], [53.55, 9.99], [52.52, 13.40],
        [52.37, 4.89], [50.85, 4.35], [48.85, 2.35],
        // To UK
        [49.44, 0.10], [51.50, -0.12]
    ],
    3: [
        // London through France to Spain
        [51.50, -0.12], [49.44, 0.10], [48.85, 2.35], [47.21, 1.55],
        [45.76, -0.35], [44.83, -0.57], [43.29, -0.37], [42.69, -1.63],
        [40.41, -3.70], [39.46, -6.37], [37.38, -5.99], [36.72, -4.42],
        [35.78, -5.81],
        // To Morocco
        [35.76, -5.83], [34.03, -6.83], [33.97, -6.84],
        // Down West Africa coast
        [31.63, -8.00], [27.15, -13.20], [24.21, -12.88], [21.45, -15.96],
        [18.08, -15.97], [16.27, -16.16], [14.71, -17.46], [13.45, -16.57],
        [11.86, -15.60], [9.64, -13.57], [8.48, -13.23], [6.30, -10.79],
        // Ivory Coast to Nigeria
        [6.82, -5.28], [5.35, -4.00], [5.60, -0.18], [6.17, 1.23], [6.49, 2.62],
        [6.45, 3.39], [9.08, 7.49],
        // Through Central Africa
        [7.38, 9.11], [6.12, 10.27], [3.84, 11.50], [1.65, 10.16],
        [0.41, 9.46], [-0.80, 11.60], [-4.26, 15.24],
        // To Angola, Namibia, South Africa
        [-6.26, 14.24], [-8.83, 13.23], [-12.37, 16.32], [-15.78, 12.99],
        [-17.86, 15.77], [-22.55, 17.08], [-26.20, 18.06],
        [-30.55, 22.93], [-33.92, 18.42]
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
    
    const [mapKey, setMapKey] = useState(0);

    useEffect(() => {
        // Dynamic import on client side
        import("./MapContent").then((mod) => {
            setMapComponent(() => mod.default);
        });
    }, []);

    // Force re-render when legId changes
    useEffect(() => {
        setMapKey(prev => prev + 1);
    }, [legId]);

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
            key={`map-${legId}-${mapKey}`}
            coordinates={coordinates}
            center={config.center}
            zoom={config.zoom}
            color={color}
        />
    );
}

