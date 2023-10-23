module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-main': "url('/banner-main.png')",
      },
      minHeight: {
        content: 'calc(100vh - 148px)',
      },
    },
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
      'lds-spinner': 'lds-spinner 1200ms linear infinite',
    },
    keyframes: {
      'lds-spinner': {
        '0%': { opacity: '1' },
        '100%': { opacity: '0' },
      },
    },
  },
  plugins: [],
};
