/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'my-yellow': '#CEDC00',
        'my-darkgreen': '#00352f',
        'my-green': '#00594f',
        'tyre-yellow': '#dcd000',
        'my-black': '#0c0c0c',
        'tw-blue':'#0ca5e9',
        'tw-purple':'#4f46e5',
        'tw-lightBlue':'#1cb0ed',
        'tw-solidBlue':'#1b93ef',
        'apple-grey':'#f6f5f8',
        'apple-black':'#85888b',
        'tw-black':'#222B45',
        'tw-grey':'#334155',
        'title-blue':'#134a72',

      },
      fontSize: {
        'xxs': '0.6rem', // 8px
        'xxxs': '0.43rem',
        'mdlg': '0.9rem',
      },
    },
  },
  plugins: [],
}
