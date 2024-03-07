/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "brand-1": "#151527",
                "brand-2": "#172032",
                "text-brand-1": "#fff"
            }
        }
    },
    plugins: []
}
