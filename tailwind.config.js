/** @type {import('tailwindcss').Config} */

import pic from "./app/IMG/5.png";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        pred: "#BE1C2D",
        pblack: "#211C1D",
        pdark: "#3A3A3C",
        sred: "#E13346",
        sblack: "#E13346",
        sdark: "#E13346",
        tred: "#E86674",
        light: "#F3F2F1",
      },
    },
  },
};
