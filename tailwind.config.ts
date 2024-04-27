import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:
    {
      screens: {
        'sm-phone': '320px',
        'md-phone': '375px',
        'lg-phone': '425px',
        '3xl': '1920px',
        // sm	640px	@media (min-width: 640px) { ... }
        // md	768px	@media (min-width: 768px) { ... }
        // lg	1024px	@media (min-width: 1024px) { ... }
        // xl	1280px	@media (min-width: 1280px) { ... }
        // 2xl	1536px	@media (min-width: 1536px) { ... }
      },
      rotate: {
        '30': '30deg',
        '45': '45deg',
        '60': '60deg',
        '225': '225deg',
      },
      width: {
        "100%": "100%",
        "165%": '165%',
        "15px": '15px',
        "60px": '60px',
        "150px": '150px',
        "200px": '200px',
      },
      height: {
        "1px": "1px",
        "15px": "15px",
        "60px": "60px",
        "200px": "200px",
        "700px": "700px",
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
      top: {
        "10px": "10px",
        "20px": "20px",
        "30px": "30px",
        "40px": "40px",
        "50px": "50px",
        "60px": "60px",
        "70px": "70px",
        "700px": "700px",
        "100%": "100%",
        "50%": "50%",

      },
      left: {
        "700px": "700px",

      },
      right: {
        "700px": "700px",

      },
      bottom: {
        "700px": "700px",
      },
      gap: {
        "10px": "10px",
        "20px": "20px",
        "30px": "30px",
        "40px": "40px",
        "50px": "50px",
        "60px": "60px",
        "70px": "70px",
        "80px": "80px",
        "90px": "90px",
        "100px": "100px",
      },
      fontFamily: {
        // 'inter': ['inter', 'sans-serif'],
      },
      backgroundImage: {
        'background': "url('/image/Desktop_Bg.svg')",
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // 'dog-bg': "url('/image/Dog.svg')",
        // 'dog-rat':"url('/image/Desktop.svg')",
      },
      colors: {
        'grey': '#F1F1F1',
        'beige_bg': '#F5EEE6',
        'blue_button': '86B6F6'
      }
    },
  },
  plugins: [
    require('tailwindcss-3d'),
    require('autoprefixer'),

  ],
}
export default config
