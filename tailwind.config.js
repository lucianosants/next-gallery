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
                primary: 'var(--primary)',
                on_primary: 'var(--on-primary)',
                primary_container: 'var(--primary-container)',
                on_primary_container: 'var(--on-primary-container)',
                secondary: 'var(--secondary)',
                on_secondary: 'var(--on-secondary)',
                secondary_container: 'var(--secondary-container)',
                on_secondary_container: 'var(--on-secondary-container)',
                tertiary: 'var(--tertiary)',
                on_tertiary: 'var(--on-tertiary)',
                tertiary_container: 'var(--tertiary-container)',
                on_tertiary_container: 'var(--on-tertiary-container)',
                error: 'var(--error)',
                on_error: 'var(--on-error)',
                error_container: 'var(--error-container)',
                on_error_container: 'var(--on-error-container)',
                background: 'var(--background)',
                on_background: 'var(--on-background)',
                surface: 'var(--surface)',
                on_surface: 'var(--on-surface)',
                outline: 'var(--outline)',
                surface_variant: 'var(--surface-variant)',
                on_surface_variant: 'var(--on-surface-variant)',
            },
        },
    },
    plugins: [],
};
