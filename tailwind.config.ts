import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#BFA2DB',      // Lavender - Buttons, Icons, Highlights
        secondary: '#A2D2FF',    // Soft Blue - Background accents, cards
        accent: {
          yellow: '#FFE066',     // Warm Yellow - Highlights, success alerts, premium
          green: '#C1F0DC'       // Mint Green - Text bubbles, suggestions
        },
        character: '#FDDDE6',    // Baby Pink - Friendly character tones
        neutral: {
          light: '#FAFAFA',      // Snow White - Main background
          dark: '#3A3A3A'        // Soft Charcoal - Text, menu titles
        },
        success: '#A9E44D',      // Lime Green - Correct answers
        error: '#FF6B6B',        // Coral Red - Mistakes, alerts
        premium: '#FFD700'       // Royal Gold - Crown, Premium Tags
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        'sf-pro': ['SF Pro Display', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      }
    },
  },
  plugins: [],
}

export default config