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
        // Base clara e natural — off-white, creme, areia (luz de fim de tarde)
        paper: "#FEFCF8", // marfim / branco quente
        cream: "#F6F0E4", // creme
        sand: "#EADFC9", // areia
        clay: "#E4D6BF", // areia mais quente
        // "ink" agora é um espresso quente (texto), não preto puro
        ink: "#2E2A22",
        graphite: "#544C3E", // texto secundário quente
        stone: "#9C917E", // taupe suave
        // Acentos naturais (pôr do sol / vegetação / madeira)
        flame: "#BC5B33", // terracota / laranja queimado (acento principal)
        terracotta: "#B5623A",
        tropical: "#5F7452", // verde sálvia / oliva
        olive: "#47543B", // verde oliva profundo
        sage: "#8FA07F", // verde sálvia claro
        ocean: "#6E8B7E", // verde-água suave (sem azul vibrante)
        sunset: "#C87D42", // laranja queimado quente
        gold: "#BFA063", // dourado fosco
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
