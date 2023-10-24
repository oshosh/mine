import type { Config } from 'tailwindcss';
const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
  plugins: [
    plugin(function ({ addUtilities }: any) {
      // 커스텀 클래스 정의
      const shadowCustom = {
        '.shadow-custom': {
          'box-shadow': '0 0 6px 0 rgba(0, 0, 0, 0.5)',
        },
      };

      addUtilities(shadowCustom);
    }),
  ],
};
export default config;
