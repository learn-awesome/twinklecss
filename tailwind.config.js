const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    display: ['responsive', 'group-hover','group-focus']
  },
  plugins: [
    require('@tailwindcss/ui')({
      layout: 'sidebar',
    })
  ],
}
