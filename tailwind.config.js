/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        white: 'var(--white)',
        lightWhite: 'var(--light-white)',
        lighterWhite: 'var(--lighter-white)',
        gray: {
          light: 'var(--gray-light)',
          DEFAULT: 'var(--gray)',
          dark: 'var(--gray-dark)',
          darker: 'var(--gray-darker)',
          darkest: 'var(--gray-darkest)',
        },
        blue: {
          light: 'var(--blue-light)',
          lighter: 'var(--blue-lighter)',
          lightest: 'var(--blue-lightest)',
          DEFAULT: 'var(--blue)',
          dark: 'var(--blue-dark)',
        },
        purple: {
          light: 'var(--purple-light)',
          DEFAULT: 'var(--purple)',
        },
        red: {
          light: 'var(--red-light)',
          lighter: 'var(--red-lighter)',
          lightest: 'var(--red-lightest)',
          DEFAULT: 'var(--red)',
          dark: 'var(--red-dark)',
        },
        orangeYellow: {
          light: 'var(--orange-yellow-light)',
          DEFAULT: 'var(--orange-yellow)',
          dark: 'var(--orange-yellow-dark)',
        },
      },
      fontFamily: {
        'openSans': 'var(--font-open-sans)',
        'museoSans': 'var(--font-museo-sans-rounded)',
        'comfortaa': 'var(--font-comfortaa)',
        'segoe': 'var(--font-segoe-ui)',
        'gibson': 'var(--font-gibson)',
        'custom1': 'var(--font-custom1)',
        'custom2': 'var(--font-custom2)',
      },
      fontSize: {
        'menu': 'var(--font-size-navbar-menu)',
        'title': 'var(--font-size-main-title)',
        'description': 'var(--font-size-main-description)',
      },
    },
  },
  plugins: [],
}