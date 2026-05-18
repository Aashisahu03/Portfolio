'use client';

import React, { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
    const [capacity, setCapacity] = useState(0);

    useEffect(() => {
        let current = 0;
        const target = 40;
        const interval = setInterval(() => {
            current += 1;
            if (current > target) clearInterval(interval);
            else setCapacity(current);
        }, 15);
        return () => clearInterval(interval);
    }, []);

    const radius = 80;
    const circumference = Math.PI * radius;
    const dashOffset = circumference * (1 - capacity / 100);

    const wrapperStyle: React.CSSProperties = {
        position: "relative",
        display: "inline-block",
        padding: "3px",
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "pointer",
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
        padding: "clamp(8px, 1.5vw, 10px) clamp(16px, 4vw, 32px)",
        fontSize: "clamp(13px, 1.8vw, 16px)",
        zIndex: 1,
        display: "inline-block",
    };

    return (
        <div style={{ position: "relative", width: "100vw", minHeight: "100vh", overflow: "hidden", color: "white" }}>

            {/* Video Background */}
            <div style={{
                position: "absolute",
                top: 0, left: 0,
                width: "100%", height: "100%",
                zIndex: -1,
                pointerEvents: "none",
            }}>
                <iframe
                    src="https://player.cloudinary.com/embed/?cloud_name=ds19st86q&public_id=video-output-54F25EFE-D04E-4D75-A2BD-FFD80C8FA07A-1_jdiype&player[autoplay]=true&player[loop]=true&player[muted]=true&player[controls]=false"
                    allow="autoplay; fullscreen"
                    style={{ width: "100%", height: "100%", border: "none", objectFit: "cover" }}
                />
            </div>

            {/* Dark overlay */}
            <div style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.4)",
                pointerEvents: "none",
            }} />

            <section
                id="contact"
                style={{
                    position: "relative",
                    zIndex: 1,
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "clamp(1rem, 4vw, 2rem)",
                    gap: "clamp(1rem, 3vw, 2rem)",
                }}
            >
                <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "1100px" }}>

                    {/* ── Top Glassmorphic Box ── */}
                    <div
                        style={{
                            width: "100%",
                            padding: "clamp(1.5rem, 4vw, 3rem)",
                            borderRadius: "24px",
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            backdropFilter: "blur(15px)",
                            WebkitBackdropFilter: "blur(15px)",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            gap: "clamp(1rem, 3vw, 2rem)",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "clamp(1rem, 3vw, 2rem)",
                        }}
                    >
                        {/* Left: Heading + description */}
                        <div style={{ flex: "1 1 280px", minWidth: 0 }}>
                            <h2
                                style={{
                                    fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
                                    fontWeight: 700,
                                    background: "linear-gradient(to bottom right, #0a1f44 0%, #cce0ff 70%, #ffffff 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    marginBottom: "1rem",
                                }}
                            >
                                What are you waiting for?
                                <br />
                                Let's work together!
                            </h2>

                            <p
                                style={{
                                    color: "#e5e5e5",
                                    lineHeight: 1.6,
                                    fontSize: "clamp(0.85rem, 1.8vw, 1rem)",
                                    maxWidth: "600px",
                                }}
                            >
                                I am currently working to capacity. I am also available now for smaller tasks and later for larger ones.
                                <br />
                                Use one of the contact options below.
                            </p>
                        </div>

                        {/* Right: Semi-circle meter */}
                        <div style={{
                            flex: "1 1 180px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            <svg
                                viewBox="0 0 200 100"
                                style={{ width: "clamp(140px, 25vw, 200px)", height: "auto" }}
                            >
                                <circle cx="100" cy="100" r={radius} fill="none" stroke="#333" strokeWidth="20" />
                                <circle
                                    cx="100" cy="100" r={radius}
                                    fill="none"
                                    stroke="url(#gradient)"
                                    strokeWidth="20"
                                    strokeDasharray={circumference}
                                    strokeDashoffset={dashOffset}
                                    strokeLinecap="round"
                                    transform="rotate(-180 100 100)"
                                />
                                <defs>
                                    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0%" stopColor="#2b3a6f" />
                                        <stop offset="100%" stopColor="#ffffff" />
                                    </linearGradient>
                                    <filter id="glow">
                                        <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>
                                <circle
                                    cx="100" cy="100" r={radius}
                                    fill="none"
                                    stroke="url(#gradient)"
                                    strokeWidth="20"
                                    strokeDasharray={circumference}
                                    strokeDashoffset={dashOffset}
                                    strokeLinecap="round"
                                    transform="rotate(-180 100 100)"
                                    style={{ filter: "url(#glow)" }}
                                />
                            </svg>

                            <div style={{ marginTop: "0.75rem", color: "#fff", fontSize: "clamp(0.85rem, 1.8vw, 1rem)" }}>
                                {capacity}% Free Capacity
                            </div>
                        </div>
                    </div>

                    {/* ── Bottom Black Glassmorphic Box ── */}
                    <div
                        style={{
                            width: "100%",
                            padding: "clamp(1.5rem, 4vw, 3rem)",
                            borderRadius: "24px",
                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                            backdropFilter: "blur(15px)",
                            WebkitBackdropFilter: "blur(15px)",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                            border: "1px solid rgba(255,255,255,0.05)",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            textAlign: "center",
                            color: "#fff",
                            gap: "clamp(1rem, 3vw, 2rem)",
                            flexWrap: "wrap",
                            marginBottom: "clamp(1rem, 3vw, 2rem)",
                        }}
                    >
                        {/* Section 1: Email */}
                        <div style={{
                            flex: "1 1 200px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "1rem",
                        }}>
                            <h3 style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", fontWeight: 700 }}>E-mail</h3>
                            <p style={{ fontSize: "clamp(0.8rem, 1.6vw, 1rem)", lineHeight: 1.6 }}>
                                Please send me an e-mail using the contact form. I'll get back to you as soon as possible.
                            </p>
                            <a
                                style={{ textDecoration: "none" }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const email = "aashisahu0302@gmail.com";
                                    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
                                    const newWindow = window.open(gmailUrl, "_blank");
                                    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
                                        window.location.href = `mailto:${email}`;
                                    }
                                }}
                            >
                                <div style={wrapperStyle}>
                                    <div style={borderLayerStyle} />
                                    <span style={innerStyle}>Send Message</span>
                                </div>
                            </a>
                        </div>

                        {/* Section 2: Social Media */}
                        <div style={{
                            flex: "1 1 200px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "1rem",
                        }}>
                            <h3 style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", fontWeight: 700 }}>Social Media</h3>
                            <p style={{ fontSize: "clamp(0.8rem, 1.6vw, 1rem)", lineHeight: 1.6 }}>
                                Follow me on the following platforms.
                            </p>
                            <a
                                href="https://www.linkedin.com/in/aashisahu0302"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#fff",
                                    textDecoration: "none",
                                    fontSize: "clamp(2rem, 5vw, 2.8rem)",
                                    marginTop: "0.5rem",
                                }}
                            >
                                <FaLinkedin />
                            </a>
                        </div>

                        {/* Section 3: Resume */}
                        <div style={{
                            flex: "1 1 200px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "1rem",
                        }}>
                            <h3 style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", fontWeight: 700 }}>Resume</h3>
                            <p style={{ fontSize: "clamp(0.8rem, 1.6vw, 1rem)", lineHeight: 1.6 }}>
                                Download my latest resume to see my experience and projects.
                            </p>
                            <a
                                href="https://drive.google.com/file/d/1UodRETGm1zq-oSZAi5p68C7qQJQfVdou/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none" }}
                            >
                                <div style={wrapperStyle}>
                                    <div style={borderLayerStyle} />
                                    <span style={innerStyle}>Resume</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <style>{`
                    @keyframes spin {
                        0%   { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}</style>
            </section>
        </div>
    );
}