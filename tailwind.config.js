/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/screens/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#f4aeff',
                on_primary: '#56006a',
                primary_container: '#712184',
                on_primary_container: '#fdd6ff',
                secondary: '#d6c0d6',
                on_secondary: '#3b2b3c',
                secondary_container: '#524153',
                on_secondary_container: '#f3dbf2',
                tertiary: '#d8baff',
                on_tertiary: '#440584',
                tertiary_container: '#5b299b',
                on_tertiary_container: '#eddcff',
                error: '#ffb4ab',
                on_error: '#690005',
                error_container: '#93000a',
                on_error_container: '#ffdad6',
                background: '#1e1a1e',
                on_background: '#e8e0e4',
                surface: '#1e1a1e',
                on_surface: '#e8e0e4',
                outline: '#988d97',
                surface_variant: '#4d444c',
                on_surface_variant: '#cfc3cd',
            },
        },
    },
    plugins: [],
};
