import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        white: "#FFFFFF",
        black: "#171717",
        light: "#F3F3F9",
        background: "#F3F3F3",
        outline: "#E9E9E9",
        gray: "#D4D4D4",

        primary: {
          DEFAULT: "#1B4946",
          100: "#E5EFEE",
          200: "#48B3AB",
        },

        secondary: {
          DEFAULT: "#76172F",
          100: "#BC2747",
        },

        accent: {
          DEFAULT: "#F4D690",
        },

        success: {
          DEFAULT: "#05B756",
          dark: "#037A39",
          light: "#E6F8EF",
        },

        info: {
          DEFAULT: "#2F80ED",
          dark: "#1F559E",
          light: "#EBF3FE",
        },

        error: {
          DEFAULT: "#EB3428",
          dark: "#9D231B",
          light: "#FDEBEA",
        },

        dark: {
          100: "#B9B9B9",
          200: "#888888",
          300: "#474747",
          400: "#191919",
        },
      },
      spacing: {
        90: "20rem",
        96: "24rem",
        98: "28rem",
        100: "30rem",
        128: "32rem",
        easispace: "11rem",
      },
    },
  },
  plugins: [],
};
export default config;
