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
        primary: {
          blue: '#0A2463',      // Deep ocean blue - trust and stability
          coral: '#FF6B6B',     // Coral reef - energy and engagement
          green: '#48BF84',     // Seafoam green - growth and learning
          gold: '#FFD93D'       // Sunshine gold - positivity and creativity
        },
        secondary: {
          navy: '#1B3B6F',      // Dark navy - professionalism
          teal: '#06BCC1',      // Vibrant teal - innovation
          sage: '#7FB069',      // Sage green - balance
          amber: '#FFA400'      // Warm amber - enthusiasm
        },
        neutral: {
          100: '#F5F7FA',       // Lightest gray
          200: '#E4E7EB',       // Light gray
          300: '#CBD2D9',       // Medium light gray
          400: '#9AA5B1',       // Medium gray
          500: '#7B8794',       // True gray
          600: '#616E7C',       // Medium dark gray
          700: '#52606D',       // Dark gray
          800: '#3E4C59',       // Very dark gray
          900: '#1F2933'        // Darkest gray
        }
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