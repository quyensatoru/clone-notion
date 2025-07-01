import typography from "@tailwindcss/typography";
import CMDK from "tailwindcss-cmdk";
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        typography,
        CMDK
    ],
}