/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-sora)', 'sans-serif'],
                cinzel: ['var(--font-cinzel)', 'serif'],
            },
            animation: {
                'border-spin': 'border-spin 2s linear infinite',
                shimmer: 'shimmer 2s linear infinite',
            },
            keyframes: {
                'border-spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                shimmer: {
                    from: {
                        backgroundPosition: '0 0',
                    },
                    to: {
                        backgroundPosition: '-200% 0',
                    },
                },
            },
        },
    },
    darkMode: 'class',
    plugins: [],
}
