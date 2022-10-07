module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'background': '#171717',
      },
      keyframes: {
        liner: {
          '0%': { transform: 'rotateX(0.0deg)' },
          '50%': { transform: 'rotateX(90deg)' },
          '100%': { transform: 'rotateX(0.0deg)' },
        },
      },
      animation: {
        'music-liner': 'liner 1s ease-in-out infinite',
        'music-liner1': 'liner 0.8s ease-in-out infinite',
        'music-liner2': 'liner 0.6s ease-in-out infinite',
        'music-liner3': 'liner 0.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
