import { useSelector } from 'react-redux'

import { THEME_DARK, THEME_LIGHT } from '#/theme'

const useTheme = (getStyles) => {
  const theme = useSelector(state => state.theme.theme)

  const activeTheme = theme === 'dark' ? THEME_DARK : THEME_LIGHT
  const styles = getStyles && typeof getStyles === 'function' ? getStyles(activeTheme) : null

  return {
    isDark: theme === 'dark',
    theme: activeTheme,
    styles
  }
}

export default useTheme
