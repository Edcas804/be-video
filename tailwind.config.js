/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "brand-1": "#002857",
                "brand-2": "#002800",
                "border-brand-1": "#002800",
                "text-brand-1": "#fff",
                "brand-rgba-1": "rgba(120,0,208,0.3)"
            }
        }
    },
    plugins: []
}
