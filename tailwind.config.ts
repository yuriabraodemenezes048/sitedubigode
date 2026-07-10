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
      screens: { "2xl": "1320px" },
    },
    extend: {
      colors: {
        // Base clara e quente — nada de preto de fundo
        paper: "#FFFFFF",
        cream: "#FFF7EA",
        sand: "#FDEFD6",
        // Texto (marrom-escuro quente, nunca preto puro)
        ink: "#2A2018",
        graphite: "#5B5044",
        stone: "#9C8E7B",
        // Paleta de verão vibrante
        sun: "#FFC02E", // amarelo sol
        tangerine: "#FF6A1A", // laranja
        lime: "#18B85C", // verde tropical
        sky: "#2FC0E8", // azul piscina
        berry: "#EC3B2B", // vermelho (detalhes)
        grape: "#8B5CF6",
        // Aliases legados mapeados pra nova paleta (compatibilidade)
        flame: "#EC3B2B",
        tropical: "#18B85C",
        sunset: "#FF6A1A",
        gold: "#FFC02E",
        ocean: "#2FC0E8",
      },
      fontFamily: {
        display: ["var(--font-fredoka)", "system-ui", "sans-serif"],
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
        serif: ["var(--font-fredoka)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "fluid-lg": "clamp(1.35rem, 1.1rem + 1vw, 1.9rem)",
        "fluid-xl": "clamp(2.1rem, 1.5rem + 2.6vw, 3.6rem)",
        "fluid-2xl": "clamp(2.8rem, 1.6rem + 5.5vw, 5.75rem)",
        "fluid-3xl": "clamp(3.4rem, 1rem + 10vw, 9rem)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      boxShadow: {
        pop: "0 14px 0 -6px rgba(42,32,24,0.12)",
        card: "0 24px 60px -30px rgba(42,32,24,0.35)",
      },
      transitionTimingFunction: {
        pop: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        wiggle: {
          "0%,100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-slow": "marquee 48s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
