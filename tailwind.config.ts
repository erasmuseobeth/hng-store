import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
 
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'custom-grad': 'linear-gradient(90deg, rgba(66, 138, 246, 0.09) 0%, rgba(9, 81, 190, 0.30) 54.17%, rgba(66, 138, 246, 0.09) 99.47%)',
      },
      boxShadow: {
        custom: '0px 4px 4px 0px rgba(50, 50, 71, 0.08), 0px 4px 8px 0px rgba(50, 50, 71, 0.06)',
        'custom1': '-2px 2px 15px -1px rgba(113, 113, 113, 0.12)',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        '8px': '8px',
      },
      spacing: {
        '82px': '82px',
        '100px': '100px',
        '8px': '8px',
        '4px': '4px',
      },
      flex: {
        '1-0-0': '1 0 0',
      },
    
    },
  },
  plugins: [],
};
export default config;
