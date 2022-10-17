module.exports = function (api) {
  api.cache(true)

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '#': './src',
            components: './src/components',
            hooks: './src/hooks',
            pages: './src/pages',
            features: './src/features',
            utils: './src/utils'
          }
        }
      ]
    ]
  }
}
