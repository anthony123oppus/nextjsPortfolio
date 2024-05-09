/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      screens: {
        xsm: '400px',
        sm: '540px',
        md: '668px',
        lg: '960px',
        xl: '1200px',
        xxl: '1370px',
        xxxl: '1400px'
      },
      extend: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          // explosion: 'url("/bg-explosion.png")',
          // hero: 'url("/hero-bg.jpg")',
          compbg: 'url("/compbg1.png")',
          textbg: 'url("/rounded-text.png")',
          // workbg: 'url("/contact-form-bg.png")',
          // site: 'url("/site-bg.svg")',
          // lightblue: 'url(/color-bg.svg)',
          // darkblue: 'url(/darkblue-bg.svg)',
          // active: 'url(/active-bg.svg)',
          // preview: 'url(/top-mes.svg)',
        },
        boxShadow:{
          myshadow: '5px 8px 20px 0 gray',
          insideshadow: 'inset 2px 2px 8px 2px rgba(0,0,0,0.4)'
        },
        animation: {
          'spin-slow': 'spin 6s linear infinite',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
  },
  plugins: [],
}
