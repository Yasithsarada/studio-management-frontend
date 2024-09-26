// module.exports = {
//     plugins: [
//       require('postcss-import'),
//       require('tailwindcss/nesting')(require('postcss-nesting')),
//       require('autoprefixer'),
//       require('tailwindcss'),
//     ]
//   }

// postcss.config.js
module.exports = {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': 'postcss-nesting',
      tailwindcss: {},
      'postcss-preset-env': {
        features: { 'nesting-rules': false },
      },
    }
  }