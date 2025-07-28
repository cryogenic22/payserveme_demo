/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1e40af',
        'primary-blue-dark': '#1e3a8a',
        'primary-teal': '#0891b2',
        'primary-teal-dark': '#0e7490',
        'secondary-light-blue': '#dbeafe',
        'secondary-gray': '#6b7280',
        'secondary-dark-gray': '#374151',
        'secondary-light-gray': '#f3f4f6',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        heading: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        arabic: ['Cairo', 'IBM Plex Sans Arabic', 'Noto Sans Arabic', 'sans-serif'],
        mono: ['Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease',
        'fade-in-up': 'fadeInUp 0.6s ease',
        'fade-in-down': 'fadeInDown 0.6s ease',
        'scale-in': 'scaleIn 0.5s ease',
        'slide-in-left': 'slideInLeft 0.6s ease',
        'slide-in-right': 'slideInRight 0.6s ease',
        'float': 'float 3s ease-in-out infinite',
        'pulse': 'pulse 2s infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInDown: {
          from: {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scaleIn: {
          from: {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        slideInLeft: {
          from: {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          from: {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}