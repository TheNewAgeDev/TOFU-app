import { useEffect } from 'react'
import { Appearance } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useDispatch } from 'react-redux'

import useTheme from 'hooks/useTheme'
import { setTheme } from 'features/settingSlice'
import { themeNavigation } from '#/theme'

import LoginRoutes from '#/navigation/LoginRoutes'

const Routes = () => {
  const { theme, isDark } = useTheme()
  const dispatch = useDispatch()

  useEffect(() => {
    const suscribeAppearance = Appearance.addChangeListener(scheme => {
      dispatch(setTheme(scheme.colorScheme))
    })

    return () => {
      suscribeAppearance.remove()
    }
  }, [])

  return (
    <NavigationContainer theme={themeNavigation(theme, isDark)}>
      <LoginRoutes />
    </NavigationContainer>
  )
}

export default Routes
