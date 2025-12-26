"use client";

import { MapContainer, TileLayer, Polyline, CircleMarker, Tooltip, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useMemo, useId } from "react";
import L from "leaflet";

interface MapContentProps {
    coordinates: [number, number][];
    center: [number, number];
    zoom: number;
    color: string;
}

// Component to fit bounds to the route
function FitBounds({ coordinates }: { coordinates: [number, number][] }) {
    const map = useMap();
    
    useEffect(() => {
        if (coordinates && coordinates.length > 1) {
            const timer = setTimeout(() => {
                try {
                    const bounds = L.latLngBounds(coordinates.map(c => [c[0], c[1]] as L.LatLngTuple));
                    map.fitBounds(bounds, { padding: [50, 50], maxZoom: 5 });
                    map.invalidateSize();
                } catch (e) {
                    console.log("Bounds error:", e);
                }
            }, 200);
            return () => clearTimeout(timer);
        }
    }, [coordinates, map]);
    
    return null;
}

export default function MapContent({ coordinates, center, zoom, color }: MapContentProps) {
    const uniqueId = useId();
    
    // Memoize coordinates to prevent unnecessary re-renders
    const validCoordinates = useMemo(() => {
        if (!coordinates || coordinates.length === 0) return [];
        return coordinates.filter(c => c && c.length === 2 && !isNaN(c[0]) && !isNaN(c[1]));
    }, [coordinates]);

    if (validCoordinates.length === 0) {
        return (
            <div className="w-full h-full bg-brand-charcoal/50 flex items-center justify-center min-h-[300px]">
                <div className="text-text-secondary">No route data available</div>
            </div>
        );
    }

    // Get evenly spaced waypoint markers (show every 5th point to reduce clutter)
    const waypointMarkers = validCoordinates.filter((_, idx) => idx > 0 && idx < validCoordinates.length - 1 && idx % 5 === 0);

    return (
        <MapContainer
            key={uniqueId}
            center={center}
            zoom={zoom}
            scrollWheelZoom={true}
            dragging={true}
            zoomControl={true}
            attributionControl={false}
            className="w-full h-full"
            style={{ background: "#1a1d21", minHeight: "350px" }}
        >
            {/* Dark themed map tiles */}
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; OpenStreetMap'
            />
            
            {/* Auto-fit bounds */}
            <FitBounds coordinates={validCoordinates} />
            
            {/* Route line - outer glow */}
            <Polyline
                positions={validCoordinates}
                pathOptions={{
                    color: color,
                    weight: 12,
                    opacity: 0.15,
                    lineCap: "round",
                    lineJoin: "round"
                }}
            />
            
            {/* Route line - middle glow */}
            <Polyline
                positions={validCoordinates}
                pathOptions={{
                    color: color,
                    weight: 6,
                    opacity: 0.4,
                    lineCap: "round",
                    lineJoin: "round"
                }}
            />
            
            {/* Route line - main */}
            <Polyline
                positions={validCoordinates}
                pathOptions={{
                    color: color,
                    weight: 3,
                    opacity: 1,
                    lineCap: "round",
                    lineJoin: "round"
                }}
            />
            
            {/* Waypoint markers (sparse for cleaner look) */}
            {waypointMarkers.map((coord, idx) => (
                <CircleMarker
                    key={`waypoint-${idx}`}
                    center={coord}
                    radius={3}
                    pathOptions={{
                        color: color,
                        fillColor: "#ffffff",
                        fillOpacity: 0.9,
                        weight: 2
                    }}
                />
            ))}
            
            {/* Start marker */}
            <CircleMarker
                center={validCoordinates[0]}
                radius={12}
                pathOptions={{
                    color: "#ffffff",
                    fillColor: "#22c55e",
                    fillOpacity: 1,
                    weight: 3
                }}
            >
                <Tooltip permanent direction="top" offset={[0, -14]}>
                    <span style={{ fontWeight: "bold", color: "#22c55e", fontSize: "12px" }}>START</span>
                </Tooltip>
            </CircleMarker>
            
            {/* End/Current marker */}
            <CircleMarker
                center={validCoordinates[validCoordinates.length - 1]}
                radius={12}
                pathOptions={{
                    color: "#ffffff",
                    fillColor: color,
                    fillOpacity: 1,
                    weight: 3
                }}
            >
                <Tooltip permanent direction="top" offset={[0, -14]}>
                    <span style={{ fontWeight: "bold", color: color, fontSize: "12px" }}>END</span>
                </Tooltip>
            </CircleMarker>
        </MapContainer>
    );
}

