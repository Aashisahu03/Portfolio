"use client";
import React, { useEffect, useRef } from "react";

const CodingBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const symbols = ["{ }", "< />", ";", "const", "let", "=>", "()", "if()", "else", "return"];
        const particles: {
            x: number;
            y: number;
            speedX: number;
            speedY: number;
            size: number;
            symbol: string;
            color: string;
        }[] = [];

        // helper for random color in gloomy blue shades
        const randomBlue = () => {
            const blues = ["#6ea8fe", "#4a90e2", "#5dade2", "#7fb3d5", "#aec6cf"];
            return blues[Math.floor(Math.random() * blues.length)];
        };

        // initialize particles
        for (let i = 0; i < 60; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                speedX: (Math.random() - 0.5) * 1.5,
                speedY: (Math.random() - 0.5) * 1.5,
                size: Math.random() * 18 + 12,
                symbol: symbols[Math.floor(Math.random() * symbols.length)],
                color: randomBlue(),
            });
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                ctx.font = `${p.size}px monospace`;
                ctx.fillStyle = p.color;
                ctx.globalAlpha = 0.7;
                ctx.fillText(p.symbol, p.x, p.y);

                p.x += p.speedX;
                p.y += p.speedY;

                // bounce back from edges
                if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
                if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
            });

            requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-screen h-screen -z-10"
        />
    );
};

export default CodingBackground;
