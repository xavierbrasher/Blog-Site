/** @type {import('tailwindcss').Config} */
module.exports = {
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#bddff9",
                    secondary: "#22ad7c",
                    accent: "#1f569e",
                    neutral: "#1E1D2A",
                    "base-100": "#232D43",
                    info: "#368AF2",
                    success: "#1ABCA7",
                    warning: "#E9B62B",
                    error: "#DF304D",
                },
            },
        ],
    },
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
};
