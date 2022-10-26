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

    primary: '#243673',
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

    primary: '#243673',
    secondary: '#0A9640',
    tertiary: '#FFFFFF',
    quaternary: '#555555',
    error: '#aa2211',

    white: '#FFFFFF',
    black: '#000000'
  },
  ...THEME
}

export const themeNavigation = (theme, isDark) => {
  const { white, black } = theme.colors

  return {
    ...NavigationTheme,
    dark: false,
    colors: {
      ...NavigationTheme.colors,
      background: theme.colors.backgroundPrimary,
      primary: theme.colors.quaternary,
      card: theme.colors.backgroundPrimary,
      text: theme.colors.tertiary,
      border: isDark ? black : white,
      notification: theme.colors.error
    }
  }
}
