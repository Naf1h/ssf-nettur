/** Precision minimalism: SSF Nettur design tokens. */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        alabaster: '#FAF9F6',
        obsidian: '#090D16',
        ink: { DEFAULT: '#0B1220', muted: '#5B6472' },
        flag: { blue: '#0EA5E9', green: '#10B981' },
      },
      fontFamily: {
        sans: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { frame: '1320px' },
      zIndex: { dock: '50', skip: '60' },
    },
  },
  plugins: [],
};
