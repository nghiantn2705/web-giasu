module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      linearGradients: {
        'custom-tw':
          'linear-gradient(transparent, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9))',
      },
      colors: {
        'blue-tw': '#2C74B3',
        'blue-tw1': '#205295',
        'blue-tw2': '#144272',
      },
      backgroundImage: {
        'banner-main': "url('/banner-main.png')",
        'banner-home-1': "url('/banner-10.jpg')",
        'banner-home-2': "url('/banner-11.jpg')",
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
