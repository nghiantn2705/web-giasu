module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '24px',
        sm: '16px',
        md: '20px',
        lg: '16px',
        xl: '20px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1320px',
    },
    animation: {
      'lds-spinner': 'lds-spinner 1200ms cubic-bezier(0.5, 0, 0.5, 1)',
    },
    keyframes: {
      'lds-spinner': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
    },
  },
  plugins: [],
};
