/** Design tokens: bright, airy SSF Nettur system. */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#102D4A',
        blue: { ssf: '#0F4C81', deep: '#0C3B66' },
        emerald: { ssf: '#10B981' },
        green: { ssf: '#16A34A' },
        ink: { DEFAULT: '#172B3A', muted: '#55657A' },
        alabaster: '#F8FAFC',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 30px rgb(0 0 0 / 0.04)',
        lift: '0 20px 40px rgb(15 76 129 / 0.08)',
      },
      zIndex: { header: '40', menu: '50', skip: '60' },
    },
  },
  plugins: [],
};
