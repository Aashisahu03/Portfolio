'use client';

import { useEffect, useState, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';

interface HeroSectionProps {
    showGlassmorphic: boolean;
    contactRef: React.RefObject<HTMLDivElement | null>; // ✅ allow null
}

export default function HeroSection({ showGlassmorphic = true, contactRef }: HeroSectionProps) {
    const [scale, setScale] = useState(1);
    const [section, setSection] = useState(0);
    const backgroundRef = useRef<HTMLDivElement>(null);

    const wrapperStyle: React.CSSProperties = {
        position: "relative",
        display: "inline-block",
        padding: "3px",
        borderRadius: "12px",
        overflow: "hidden",
        cursor: 'pointer',
    };

    const borderLayerStyle: React.CSSProperties = {
        position: "absolute",
        inset: 0,
        borderRadius: "12px",
        background: "conic-gradient(yellow 0deg, transparent 90deg, transparent 270deg, yellow 360deg)",
        animation: "spin 2s linear infinite",
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        padding: "3px",
        boxSizing: "border-box",
    };

    const innerStyle: React.CSSProperties = {
        position: "relative",
        background: "black",
        color: "white",
        borderRadius: "8px",
        padding: "10px 32px",
        zIndex: 1,
        display: "inline-block",
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const zoom = Math.max(0.5, 1 - scrollY / 1000);
            setScale(zoom);

            if (backgroundRef.current) {
                backgroundRef.current.style.transform = `translateX(-${scrollY}px) scale(${zoom})`;
            }

            if (scrollY < 300) setSection(0);
            else if (scrollY < 800) setSection(1);
            else setSection(2);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const renderContent = () => (
        <>
            <h1
                className="text-[10vw] font-extrabold text-transparent tracking-tight"
                style={{
                    WebkitTextStroke: '2px white',
                    textShadow: '0 0 12px rgba(96, 165, 250, 0.6)',
                }}
            >
                AASHI SAHU.
            </h1>

            <div>
                {(() => {
                    switch (section) {
                        case 0:
                            return (
                                <h2
                                    className="text-[4vw] font-extrabold text-transparent tracking-tight mt-4"
                                    style={{
                                        WebkitTextStroke: '2px white',
                                        textShadow: '0 0 10px rgba(96, 165, 250, 0.6)',
                                    }}
                                >
                                    <Typewriter
                                        words={[
                                            'SOFTWARE ENGINEER.',
                                            'CREATIVE DEVELOPER.',
                                            'PROBLEM SOLVER.',
                                        ]}
                                        loop={0}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1500}
                                    />
                                </h2>
                            );
                        case 1:
                            return (
                                <div
                                    style={wrapperStyle}
                                    onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            contactRef.current?.scrollIntoView({ behavior: "smooth" });
                                        }
                                    }}
                                >
                                    <div style={borderLayerStyle}></div>
                                    <span style={innerStyle}>Contact me</span>

                                    <style>{`
                    @keyframes spin {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }
                  `}</style>
                                </div>
                            );
                        default:
                            return null;
                    }
                })()}
            </div>
        </>
    );

    return (
        <div className="relative h-screen w-screen overflow-hidden text-white">
            <div
                ref={backgroundRef}
                className="fixed top-0 left-0 h-screen w-screen z-[-2] pointer-events-none transition-transform duration-200 ease-out"
                style={{ transformOrigin: 'center' }}
            >
                <iframe
                    src="https://player.cloudinary.com/embed/?cloud_name=ds19st86q&public_id=video-output-725AAD8B-D574-41DF-9C77-0B7B0BCEEBCE-1_ukgfhe&player[autoplay]=true&player[loop]=true&player[muted]=true&player[controls]=false"
                    allow="autoplay; fullscreen"
                    className="w-full h-full"
                    style={{ border: 'none' }}
                />
            </div>

            {showGlassmorphic && (
                <div className="fixed top-0 left-0 h-screen w-screen z-10 pointer-events-none">
                    <div className="w-full h-screen flex items-center justify-center">
                        <div
                            className="shadow-2xl rounded-2xl w-[1200px] h-[500px] pointer-events-auto flex items-center justify-center"
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)',
                                borderRadius: '1rem',
                            }}
                        >
                            <div className="text-center">{renderContent()}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
