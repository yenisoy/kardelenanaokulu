/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Çocuklara hitap eden, velilere güven veren modern pastel palet
        kardelen: {
          orange: '#FF9E57',
          'orange-soft': '#FFC599',
          'orange-tint': '#FFF1E6',
          sky: '#6EC6E8',
          'sky-soft': '#AEE0F2',
          'sky-tint': '#EAF7FC',
          green: '#8FCB6A',
          'green-soft': '#BEE3A5',
          'green-tint': '#F0F9E9',
          cream: '#FFFBF5',
          ink: '#3A3A4A',
          'ink-soft': '#6B6B7B',
        },
      },
      fontFamily: {
        display: ['"Fredoka"', 'system-ui', 'sans-serif'],
        body: ['"Nunito"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        blob: '42% 58% 60% 40% / 45% 45% 55% 55%',
      },
      boxShadow: {
        soft: '0 18px 40px -18px rgba(255, 158, 87, 0.35)',
        card: '0 20px 50px -24px rgba(58, 58, 74, 0.28)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-22px) rotate(6deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        wiggle: 'wiggle 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
