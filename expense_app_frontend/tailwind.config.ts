import {heroui} from '@heroui/theme';
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(button|ripple|spinner).js"
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        primaryHover: 'var(--primary-hover)',
        secondary: 'var(--secondary)',
        secondaryHover: 'var(--secondary-hover)',
        accent: 'var(--accent)',
      },
    },
  },
  plugins: [heroui()],
}

export default config
