import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        "grey-600": "#666666",
        "grey-200": "#E0E0E0",
      },
      fontFamily: {
        pretendard: ["Pretendard Variable", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
        mono: ["DM Mono", "monospace"],
      },
    },
  },
  plugins: [],
}

export default config
