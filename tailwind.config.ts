import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        hand: ["Caveat", "cursive"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ceria: {
          toska: "#00BFA6",
          dark: "#073B3A",
          ink: "#102A2A",
          kuning: "#FFC107",
          gray: "#F5F5F5",
          mist: "#E8F7F4",
          krem: "#FAF4E8",
          coral: "#F08A73",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.10)",
        card: "0 20px 60px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
