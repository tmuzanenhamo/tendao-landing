import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Taken from Zimbabwean school uniforms rather than a SaaS palette.
        shirt: '#FFFFFF',
        chalk: '#EEF2EF',
        blazer: { DEFAULT: '#1E5641', deep: '#143D2E', soft: '#DCE8E1' },
        ink: { DEFAULT: '#16241E', muted: '#4A5751' },
        maroon: { DEFAULT: '#7B2232', soft: '#F3E3E5' },
        khaki: { DEFAULT: '#C8A456', soft: '#F5EEDB', deep: '#7A6025' },
      },
      fontFamily: {
        display: ['var(--font-bitter)', 'Georgia', 'serif'],
        sans: ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
        // The product's own face, so fragments look like the real app.
        app: ['var(--font-roboto)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: { page: '76rem' },
    },
  },
  plugins: [],
};

export default config;
