"use client";

import { useState, useEffect } from "react";
import { FaReact } from "react-icons/fa"; // make sure react-icons is installed

export default function ScrollIcon() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity & vertical position based on scroll
  const maxScroll = 300; // how far to scroll before fully visible
  const progress = Math.min(scrollY / maxScroll, 1); // 0 → 1

  const iconStyle = {
    transform: `translateY(${50 - progress * 50}px)`, // start lower, move up
    opacity: progress, // fade in
    transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
    fontSize: "4rem",
    color: "#61DBFB", // React blue
    zIndex: 10,
  };

  return (
    <div style={{ minHeight: "200vh", padding: "2rem" }}>
      <div
        style={{
          position: "sticky",
          top: "40vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          borderRadius: "12px",
          width: "200px",
          height: "200px",
          margin: "0 auto",
          zIndex: 5,
        }}
      >
        <FaReact style={iconStyle} />
      </div>
    </div>
  );
}
