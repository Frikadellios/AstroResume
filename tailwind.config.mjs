/** @type {import('tailwindcss').Config} */
export const darkMode = ['class']
export const content = [
  './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
]
export const theme = {
  container: {
    center: true,
    padding: '2rem',
    screens: {
      '2xl': '1400px',
    },
  },
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
  },
  extend: {
    colors: {
      brand: {
        50: '#F0FFFF',
        100: '#D6FFFE',
        200: '#9EFFFD',
        300: '#29FFFB',
        400: '#00F5F1',
        500: '#00ECE8',
        600: '#00D6D3',
        700: '#00BDBA',
        800: '#009E9B',
        900: '#00706E',
        950: '#005250',
      },
      bgmain: {
        50: '#E4E8EC',
        100: '#CCD3DC',
        200: '#98A7B8',
        300: '#647991',
        400: '#414E5E',
        500: '#1D232A',
        600: '#171C21',
        700: '#111418',
        800: '#0D0F12',
        900: '#060809',
        950: '#020303',
      },
      customPrimary: 'rgb(99, 102, 241)',
      customSecondary: 'rgb(161, 163, 247)',
      customDarkBg1: 'rgb(31, 32, 35)',
      customDarkBg2: 'rgb(38, 39, 43)',
      customDarkBg3: 'rgb(48, 49, 54)',
      customDarkBg3Hover: 'rgb(55, 56, 62)',
      customContentSubtitle: 'rgb(178, 184, 205)',
      customGrayBorder: 'rgb(255,255,255,0.1)',
      customGrayText: 'rgb(174, 178, 183)',
      customDarkBgTransparent: 'rgb(31, 32, 35, 0.7)',
      customDarkBgTransparentDarker: 'rgb(0,0,0,0.5)',
      customDarkBgTransparentLighter: 'rgb(48, 49, 54, 0.7)',
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))',
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
    keyframes: {
      background: {
        '0%, 100%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
      },
      text: {
        '0%, 100%': {
          'background-size': '200% 200%',
          'background-position': 'left center',
        },
        '50%': {
          'background-size': '200% 200%',
          'background-position': 'right center',
        },
      },
      blob: {
        '0%, 100%': {
          transform: 'translate(0, 0) scale(1)',
        },
        '25%': {
          transform: 'translate(20px, -50px) scale(1.1)',
        },
        '50%': {
          transform: 'translate(0, 20px) scale(1)',
        },
        '75%': {
          transform: 'translate(-20px, -15px) scale(0.9)',
        },
      },
      'accordion-down': {
        from: { height: 0 },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: 0 },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
      blob: 'blob 10s infinite',
      border: 'background ease infinite',
      text: 'text 5s ease infinite',
    },
    screens: {
      xs: '530px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xll: '1400px',
      '2xl': '1536px',
    },
  },
}

export const plugins = [
  require('tailwindcss-animate'),
  require('@tailwindcss/typography'),
  require('daisyui'),
  require('@tailwindcss/aspect-ratio'),
]
