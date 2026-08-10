/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.html'],
    theme: {
        extend: {
            colors: {
                dark: {
                    900: '#0a0a0f',
                    800: '#12121a',
                    700: '#1a1a25',
                    600: '#242430',
                },
                accent: {
                    blue: '#3b82f6',
                    red: '#ef4444',
                    purple: '#8b5cf6',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
        },
    },
    plugins: [],
};
