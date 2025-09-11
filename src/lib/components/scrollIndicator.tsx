'use client';
import { useEffect, useState } from 'react';

export default function ScrollIndicator() {
    const [scrollWidth, setScrollWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            setScrollWidth(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 h-1 bg-blue-500 z-50 transition-all duration-150"
            style={{ width: `${scrollWidth}%` }} />
    );
}
