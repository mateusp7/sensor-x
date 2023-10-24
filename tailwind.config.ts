import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#247BA0",
          2: "#F2AF29",
          3: "#FFFCFF",
          4: "#0C0C0C",
          5: "#3EB94B",
        },
        neutral: {
          1: "#1C1D22",
          2: "#33343A",
          3: "#45464E",
          4: "#53545C",
          5: "#8B8D97",
          6: "#A6A8B1",
          7: "#BEC0CA",
        },
        alerts: {
          warning: "#FF9B1C",
          success: "#519C66",
          error: "#CC5F5F",
        },
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
      },
    },
  },
  plugins: [],
}
export default config
