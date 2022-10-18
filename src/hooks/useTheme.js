import { useState } from 'react'
import { Appearance } from 'react-native'

import { THEME_DARK, THEME_LIGHT } from '#/theme'

const useTheme = (getStyles) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme())

  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme)
  })

  const activeTheme = theme === 'dark' ? THEME_DARK : THEME_LIGHT
  const styles = getStyles && typeof getStyles === 'function' ? getStyles(activeTheme) : null

  return {
    isDark: theme === 'dark',
    theme: activeTheme,
    styles
  }
}

export default useTheme
