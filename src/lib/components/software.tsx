"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const symbols = [
    "{", "}", "(", ")", ";", "<", ">", "=", "+", "-", "*", "/",
    "const", "let", "=>", "if", "else", "return", "function", "</>"
];

const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Next.js",
    "Tailwind CSS",
    "GraphQL",
    "MongoDB",
    "Express",
    "Redux",
    "Jest",
    "Docker",
    "Git"
];

export default function Software() {
    const [items, setItems] = useState<
        { id: number; x: number; y: number; symbol: string; color: string; direction: string }[]
    >([]);

    useEffect(() => {
        const blues = ["#6ea8fe", "#4a90e2", "#5dade2", "#7fb3d5", "#aec6cf"]; // soft gloomy blues
        const directions = ["horizontal", "vertical", "diagonal"]; // movement types
        const newItems = Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            symbol: symbols[Math.floor(Math.random() * symbols.length)],
            color: blues[Math.floor(Math.random() * blues.length)],
            direction: directions[Math.floor(Math.random() * directions.length)],
        }));
        setItems(newItems);
    }, []);

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Animated Gradient Background */}
            <motion.div
                className="absolute inset-0"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    backgroundImage: "linear-gradient(-45deg, #1e3a8a, #3b82f6, #60a5fa, #93c5fd)",
                    backgroundSize: "400% 400%",
                }}
            />

            {/* Floating Coding Symbols */}
            {items.map((item) => {
                let animation: any = {};

                if (item.direction === "horizontal") {
                    animation = { x: ["-10vw", "110vw"], y: [0, 0] };
                } else if (item.direction === "vertical") {
                    animation = { y: ["-10vh", "110vh"], x: [0, 0] };
                } else if (item.direction === "diagonal") {
                    animation = { x: ["-10vw", "110vw"], y: ["-10vh", "110vh"] };
                }

                return (
                    <motion.div
                        key={item.id}
                        className="absolute font-mono"
                        style={{
                            left: `${item.x}%`,
                            top: `${item.y}%`,
                            color: item.color,
                            fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", // slightly bigger
                            fontWeight: "bold",
                            opacity: 0.85, // more visible
                            textShadow: "0 0 10px rgba(80,150,255,0.8)", // glow effect
                        }}
                        animate={animation}
                        transition={{
                            duration: Math.random() * 15 + 12,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {item.symbol}
                    </motion.div>
                );
            })}

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    maxWidth: "1200px",
                    height: "600px",
                    padding: "2.5rem",
                    borderRadius: "24px",
                    backgroundColor: "rgba(30, 30, 30, 0.55)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.7)",
                    zIndex: 10,
                    overflow: "hidden",
                    margin: "4rem auto 0 auto",
                    alignItems: "flex-start", // align left and right columns at the top
                    paddingTop: "6rem"

                }}
            >
                {/* LEFT SIDE - Skills */}
                <div
                    style={{
                        flex: 0.45,
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "4rem",
                        alignContent: "flex-start",
                    }}
                >
                    {[
                        "React.js", "Node.js", "TypeScript", "Next.js", "Tailwind",
                        "Neo4j", "Docker", "GitHub",
                        "HTML", "CSS", "JavaScript", "Python",
                    ].map((skill) => (
                        <div
                            key={skill}
                            style={{
                                padding: "0.5rem 1rem",
                                fontSize: "0.875rem",
                                fontWeight: 600,
                                color: "#e5e5e5",
                                borderRadius: "12px",
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                                backdropFilter: "blur(6px)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}
                        >
                            {skill}
                        </div>
                    ))}
                </div>

                {/* RIGHT SIDE - Content */}
                <div
                    style={{
                        flex: 0.55,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start", // align content to the left
                        justifyContent: "flex-start", // top-align
                        textAlign: "left", // left-align text
                        paddingLeft: "1.5rem",
                        gap: "1.5rem",

                    }}
                >
                    <h1
                        style={{
                            fontSize: "3rem",
                            fontWeight: "800",
                            background: "linear-gradient(to bottom right, #2b3a6f, #ffffff)", // lighter dark blue → white
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            textShadow: "0 0 8px rgba(10, 31, 68, 0.5)", // subtle glow
                            margin: 0,
                        }}
                    >
                        Software
                    </h1>

                    {/* Content */}
                    <p
                        style={{
                            fontSize: "1.125rem",
                            color: "#e5e5e5",
                            lineHeight: 1.6,
                            maxWidth: "600px",
                            margin: 0,
                        }}
                    >
                        Building software is like constructing a house: without a solid foundation, even the best features can fail. Clear planning and thoughtful design are key.
                    </p>
                    <p
                        style={{
                            fontSize: "1.125rem",
                            color: "#e5e5e5",
                            lineHeight: 1.6,
                            maxWidth: "600px",
                            margin: 0,
                        }}
                    >
                        I excel at both guiding projects and hands-on coding. Reliability, clear communication, and a strong foundation ensure ideas become lasting, seamless realities.
                    </p>


                    {/* Structured Skill Buttons */}
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "1rem",
                            justifyContent: "flex-start", // align buttons to left
                            paddingTop: "1rem",
                        }}
                    >
                        {["Website", "Web App", "Mobile App", "Tools", "Fullstack"].map((item) => (
                            <div
                                key={item}
                                style={{
                                    padding: "0.5rem 1.25rem",
                                    borderRadius: "12px",
                                    fontWeight: 500,
                                    color: "#fff",
                                    background: "linear-gradient(135deg, #1e3a8a, #374151, #4b5563)",
                                    border: "1px solid rgba(255, 255, 255, 0.2)",
                                    backdropFilter: "blur(12px)",
                                    boxShadow: "0 4px 15px rgba(30, 58, 138, 0.5), 0 0 20px rgba(75, 85, 99, 0.3)",
                                    textAlign: "center",
                                }}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    );
}
