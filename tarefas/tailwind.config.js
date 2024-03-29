module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'img-tarefa': "url('/images/bem.jpg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}