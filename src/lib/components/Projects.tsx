"use client";
import React from "react";

export default function PreviousActivities() {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "4rem 2rem",
                backgroundColor: "#0a0a0a", // dark background
            }}
        >
            {/* Title */}
            <h1
                style={{
                    fontSize: "3rem",
                    fontWeight: "800",
                    background: "linear-gradient(to bottom right, #2b3a6f, #ffffff)", // blue → whitish
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 0 8px rgba(43, 58, 111, 0.5)", // subtle glow
                    marginBottom: "2rem",
                }}
            >
                Previous Activities
            </h1>

            {/* Placeholder content */}
            <p
                style={{
                    fontSize: "1.125rem",
                    color: "#e5e5e5",
                    maxWidth: "600px",
                    textAlign: "center",
                    lineHeight: 1.6,
                }}
            >
                Here you can showcase your past projects, work, or achievements. Later, you can replace this placeholder with your projects or activity cards.
            </p>

            {/* Example section to add projects later */}
            <div
                style={{
                    marginTop: "3rem",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1.5rem",
                    justifyContent: "center",
                    width: "100%",
                    maxWidth: "1200px",
                }}
            >
                {/* Project cards can be added here later */}
            </div>
        </div>
    );
}
