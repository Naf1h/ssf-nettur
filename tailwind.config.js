/** Design tokens: SSF Nettur Swiss-grid system. */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0B132B', 2: '#131D3B' },
        brand: { blue: '#0F4C81', green: '#16A34A' },
        ink: { DEFAULT: '#0F172A', muted: '#475569' },
        line: '#E2E8F0',
        alt: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        head: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        ml: ['"Anek Malayalam"', 'Inter', 'sans-serif'],
      },
      borderRadius: { DEFAULT: '2px', sm: '2px', md: '4px', lg: '4px', xl: '4px' },
      maxWidth: { page: '1240px' },
      zIndex: { header: '40', menu: '50', skip: '60' },
    },
  },
  plugins: [],
};
