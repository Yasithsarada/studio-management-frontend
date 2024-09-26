// module.exports = {
//     plugins: [
//       require('postcss-import'),
//       require('tailwindcss/nesting')(require('postcss-nesting')),
//       require('autoprefixer'),
//       require('tailwindcss'),
//     ]
//   }

module.exports = {
    plugins: {
      'tailwindcss/nesting': {},  // Add this line to support nested CSS
      tailwindcss: {},
      autoprefixer: {},
    },
  }
  