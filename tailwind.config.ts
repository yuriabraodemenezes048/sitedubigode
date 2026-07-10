import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1440px" },
    },
    extend: {
      colors: {
        // Base neutra — muito espaço em branco quente
        sand: "#E9E1D4",
        cream: "#F5F1EA",
        paper: "#FBF9F5",
        ink: "#111110",
        graphite: "#26251F",
        stone: "#8C877B",
        // Acentos da marca (extraídos dos rótulos reais)
        flame: "#C1352B", // LoveGin
        tropical: "#15693B", // Tropicaipi / Caipi
        ocean: "#2B6E8F",
        sunset: "#E27D33",
        gold: "#C4A24C",
      },
      fontFamily: {
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Escala fluida para headlines gigantes com respiração
        "fluid-sm": "clamp(0.9rem, 0.85rem + 0.3vw, 1.05rem)",
        "fluid-lg": "clamp(1.25rem, 1rem + 1vw, 1.75rem)",
        "fluid-xl": "clamp(2rem, 1.4rem + 3vw, 3.75rem)",
        "fluid-2xl": "clamp(2.75rem, 1.5rem + 6vw, 6.5rem)",
        "fluid-3xl": "clamp(3.5rem, 1rem + 11vw, 11rem)",
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-quint": "cubic-bezier(0.83, 0, 0.17, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
