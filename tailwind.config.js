/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }, 
      colors: {
        text: '#201F1F', 
        hotpink: '#FFAEBC',
        tiffanyblue: '#A0E7E5',
        mint: '#B4F8C8',
        yellow: '#FBE7C6',
      },
    },
  },
  plugins: [require("daisyui")],
}
