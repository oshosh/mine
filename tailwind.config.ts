import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
    extend: {
      colors: {
        white2: '#eeeeee',
        'dark-purple': '#22194D',
        'light-purple': '#A2A1DC',
        'over-lay': '0 0 6px 0 rgba(0, 0, 0, 0.5)',
      },
      boxShadow: {
        'custom-dark': '0 1px 4px 0 rgba(0, 0, 0, 0.35)',
      },
      animation: {
        typing: 'keyword-typing-effect 0.1s linear infinite',
      },
      keyframes: {
        'keyword-typing-effect': {
          '0%': {
            'border-right': '4px solid transparent',
          },
          '100%': {
            'border-right': '4px solid #1d1720',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
