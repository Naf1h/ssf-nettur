/** Design tokens from the SSF Nettur design rules. */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: { DEFAULT: '#FFFFFF', alt: '#F8FAFC', dark: '#0B192C' },
        brand: { blue: '#0F4C81', green: '#16A34A' },
        ink: { DEFAULT: '#0F172A', muted: '#475569' },
        line: '#E2E8F0',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Noto Sans Malayalam"', 'system-ui', 'sans-serif'],
        ml: ['"Noto Sans Malayalam"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      maxWidth: { page: '1200px' },
      zIndex: { header: '40', menu: '50', skip: '60' },
    },
  },
  plugins: [],
};
