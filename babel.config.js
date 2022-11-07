module.exports = function (api) {
  api.cache(true)

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: '.env.local',
          safe: true
        }
      ],
      [
        'module-resolver',
        {
          alias: {
            components: './src/components',
            hooks: './src/hooks',
            layouts: './src/layouts',
            views: './src/views',
            features: './src/features',
            utils: './src/utils',

            '#': './src',
            assets: './assets'
          }
        }
      ]
    ]
  }
}
