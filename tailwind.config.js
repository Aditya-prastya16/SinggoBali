// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'typing': 'typing 2s steps(20, end) infinite',
        'blink': 'blink 1s step-end infinite'
      },
      keyframes: {
        typing: {
          'from': { width: '0%' },
          'to': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
    },
  },
  plugins: [],
};
