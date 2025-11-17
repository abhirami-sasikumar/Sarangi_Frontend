module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        maroon: "#7a1f1f",
        rose: {
          50: "#fff1f2",
          100: "#ffe4e6",
        },
        amber: {
          50: "#fffbeb",
          100: "#fef3c7",
        }
      },
      backgroundSize: {
        '400': '400% 400%',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        gentleFlow: {
      '0%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
      '100%': { backgroundPosition: '0% 50%' },
    },
      },
    animation: {
    fadeUp: 'fadeUp 0.7s ease-out forwards',
    fadeIn: 'fadeIn 1s ease-in forwards',
    float: 'float 3s ease-in-out infinite',
    gentleFlow: 'gentleFlow 12s ease-in-out infinite',
  },
    },
  },
  plugins: [],
}
