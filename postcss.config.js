module.exports = {
  plugins: [
    require('postcss-preset-env')({ stage: 1 }),  // Use PostCSS preset
    require('autoprefixer'),
    require('cssnano')({ preset: 'default' })
  ]
}