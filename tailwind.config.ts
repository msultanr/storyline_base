import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xxxsss: "200px",
        xxxss: "250px",
        xxss: "300px",
        xxs: "350px",
        xs: "400px",
        sm: "600px",
        md: "700px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark"],
  },

}
export default config
