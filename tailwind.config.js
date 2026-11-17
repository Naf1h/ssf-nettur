/** SSF Nettur dark festival system. */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: { DEFAULT: '#080C14', 2: '#0B111E', 3: '#111827' },
        glow: { emerald: '#10B981', cyan: '#22D3EE', teal: '#2DD4BF', gold: '#F5B544' },
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'Sora', 'system-ui', 'sans-serif'],
        ml: ['"Anek Malayalam"', 'Sora', 'sans-serif'],
      },
      maxWidth: { frame: '1280px' },
      zIndex: { header: '50', menu: '55', skip: '60' },
    },
  },
  plugins: [],
};
