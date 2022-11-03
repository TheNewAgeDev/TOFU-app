module.exports = {
  name: 'Evaluación Docente | Unipaz',
  version: '1.0.0',
  slug: 'edupaz',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  extra: {
    apiUrl: process.env.API_URL
  },
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#243673'
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: [
    '**/*'
  ],
  ios: {
    supportsTablet: true
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#243673'
    }
  },
  web: {
    favicon: './assets/favicon.png'
  }
}
