'use client';

import { useRef, useEffect, useState } from 'react';

interface FadeInLineProps {
    children: React.ReactNode;
    index: number;
}

export function FadeInLine({ children, index }: FadeInLineProps) {
    const ref = useRef<HTMLParagraphElement>(null);
    const [opacity, setOpacity] = useState(0.3);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const scrollTop = window.scrollY;
            const elementTop = ref.current.offsetTop;
            const windowHeight = window.innerHeight;
            const distance = elementTop - scrollTop;

            let fade = 1 - distance / windowHeight;
            fade = Math.min(Math.max(fade, 0.3), 1);
            setOpacity(fade);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <p
            ref={ref}
            style={{
                opacity,
                transition: 'opacity 0.6s ease',
                color: 'white',
            }}
            className="mb-6"
        >
            {children}
        </p>
    );
}