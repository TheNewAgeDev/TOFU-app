import { useSelector } from 'react-redux'

import { THEME_DARK, THEME_LIGHT } from '#/theme'

const useTheme = (getStyles) => {
  const theme = useSelector(state => state.setting.theme)
  const isDark = theme === 'dark'

  const activeTheme = theme === 'dark' ? THEME_DARK : THEME_LIGHT
  const styles = getStyles && typeof getStyles === 'function' ? getStyles(activeTheme, isDark) : null

  return {
    theme: activeTheme,
    isDark,
    styles
  }
}

export default useTheme
