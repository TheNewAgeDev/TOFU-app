import { Platform } from 'react-native'
import { DefaultTheme as NavigationTheme } from '@react-navigation/native'

const THEME = {
  fontSizes: {
    body: 14,
    subHeading: 16,
    title: 20
  },
  fonts: {
    main: Platform.select({
      ios: 'System',
      android: 'System',
      default: 'System'
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700'
  }
}

export const THEME_LIGHT = {
  colors: {
    backgroundPrimary: '#FFFFFF',
    backgroundSecondary: '#243673',

    primary: '#1237BB',
    secondary: '#0A9640',
    tertiary: '#000000',
    quaternary: '#555555',
    error: '#aa2211',

    white: '#FFFFFF',
    black: '#000000'
  },
  ...THEME
}

export const THEME_DARK = {
  colors: {
    backgroundPrimary: '#151515',
    backgroundSecondary: '#243673',

    primary: '#1237BB',
    secondary: '#0A9640',
    tertiary: '#FFFFFF',
    quaternary: '#555555',
    error: '#E6B0AA',

    white: '#FFFFFF',
    black: '#000000'
  },
  ...THEME
}

export const themeNavigation = theme => {
  const { white, black, backgroundPrimary, error } = theme.colors

  return {
    ...NavigationTheme,
    dark: false,
    colors: {
      ...NavigationTheme.colors,
      background: backgroundPrimary,
      primary: white,
      card: backgroundPrimary,
      text: white,
      border: black,
      notification: error
    }
  }
}
