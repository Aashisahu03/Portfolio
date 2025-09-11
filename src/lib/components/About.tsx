'use client';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="bg-black text-white text-center py-24 min-h-screen flex items-center">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <p className="text-lg mb-4">I craft experiences, not just products.</p>
                <p className="text-lg mb-4">Designing elegant, immersive, modern web applications.</p>
                <p className="text-lg">
                    I'm a passionate web developer with a focus on creating user-friendly and visually appealing web applications...
                </p>
            </div>
        </section>
    );
}
