/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        gradientmain: "-webkit-linear-gradient(90deg, hsla(225, 78%, 59%, 1) 0%, hsla(197, 85%, 51%, 1) 100%);",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        hoverlink: "#15A3EF",
        bannerhomepage:"#eaf0fa"

      },
    },
  },
  plugins: [],
};
