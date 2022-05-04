const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project
  content: [
    './public/**/*.html',
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})


module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['>1%']
    }),
    require('stylelint'),
    require("postcss-unused-var"),
    require("css-mqpacker"),
    require('cssnano')({
      preset: 'default',
    }),
    purgecss
  ]
}
