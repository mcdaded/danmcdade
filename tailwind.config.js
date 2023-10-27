module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  // purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        print: { raw: 'print' },
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#689DBB',
          50: '#f7fafc',
          100: '#f0f5f8',
          200: '#d9e7ee',
          300: '#c3d8e4',
          400: '#95bacf',
          500: '#689DBB',
          600: '#5e8da8',
          700: '#4e768c',
          800: '#3e5e70',
          900: '#334d5c',
        },
        secondary: {
          DEFAULT: '#255A60',
          50: '#f4f7f7',
          100: '#e9efef',
          200: '#c9d6d7',
          300: '#a8bdbf',
          400: '#668c90',
          500: '#255A60',
          600: '#215156',
          700: '#1c4448',
          800: '#16363a',
          900: '#122c2f',
        },
        ghostWhite: {
          DEFAULT: '#F4F4F9',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#F4F4F9',
          600: '#D0D0E5',
          700: '#ABABD1',
          800: '#8787BE',
          900: '#6363AA',
        },
        // New colors with kayak
        woodsmoke: {
          50: '#f3f3f3',
          100: '#e6e6e7',
          200: '#c1c1c3',
          300: '#9b9c9f',
          400: '#515156',
          500: '#06070E',
          600: '#05060d',
          700: '#05050b',
          800: '#040408',
          900: '#030307',
        },
        goldenFizz: {
          50: '#fffff4',
          100: '#fffeea',
          200: '#fefdca',
          300: '#fdfbaa',
          400: '#fcf86b',
          500: '#FBF52B',
          600: '#e2dd27',
          700: '#bcb820',
          800: '#97931a',
          900: '#7b7815',
        },
        redRibbon: {
          50: '#fff4f6',
          100: '#ffe8ee',
          200: '#ffc6d3',
          300: '#ffa4b9',
          400: '#ff6085',
          500: '#FF1C50',
          600: '#e61948',
          700: '#bf153c',
          800: '#991130',
          900: '#7d0e27',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
