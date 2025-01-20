import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      width: {
        "30": "7.5rem",
        "31": "7.75rem",
        "33": "8.25rem",
        "34": "8.5rem",
      },
      height: {
        "double-screen": "200vh",
      },
    },
  },
  plugins: [],
} satisfies Config;
