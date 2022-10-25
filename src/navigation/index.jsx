import { useEffect } from 'react'
import { Appearance } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useDispatch } from 'react-redux'

import useTheme from 'hooks/useTheme'
import { setTheme } from 'features/themeSlice'
import { themeNavigation } from '#/theme'

import LoginRoutes from '#/navigation/LoginRoutes'

const Routes = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()

  useEffect(() => {
    Appearance.addChangeListener(scheme => {
      dispatch(setTheme(scheme.colorScheme))
    })
  }, [])

  return (
    <NavigationContainer theme={themeNavigation(theme)}>
      <LoginRoutes />
    </NavigationContainer>
  )
}

export default Routes