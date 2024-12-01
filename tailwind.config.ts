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
        "pixel": ["Pixelify Sans", "sans-serif"]
      },
      boxShadow: {
        "header": "0px 16px 35px 1px rgba(207,201,207,1)",
        "footer": "0px -16px 35px 1px rgba(207,201,207,1)",
      }
    },
  },
  plugins: [],
};
export default config;
