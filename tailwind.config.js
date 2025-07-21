// tailwind.config.js
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                '3xl': '1600px',
                '4xl': '1920px',
                '5xl': '2500px',
            },
            keyframes: {
                marqueeLeft: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(calc(-100% - var(--gap)))' },
                },
                marqueeRight: {
                    from: { transform: 'translateX(calc(-100% - var(--gap)))' },
                    to: { transform: 'translateX(0)' },
                },
                borderBeam: {
                    '0%': { offsetDistance: '0%' },
                    '100%': { offsetDistance: '100%' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                fadeInUp: {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
            },
            animation: {
                marqueeLeft: 'marqueeLeft var(--duration,30s) linear infinite',
                marqueeRight: 'marqueeRight var(--duration,30s) linear infinite',
                borderBeam: 'borderBeam var(--duration,2s) linear infinite',
                wiggle: 'wiggle 1s ease-in-out infinite',
                fadeInUp: 'fadeInUp 0.5s ease-out forwards',
            },
            boxShadow: {
                red: '0 4px 6px -1px rgba(255, 0, 0, 0.5), 0 2px 4px -1px rgba(255, 0, 0, 0.3)',
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}
