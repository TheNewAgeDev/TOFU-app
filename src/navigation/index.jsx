import { useEffect } from 'react'
import { Appearance } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useDispatch } from 'react-redux'

import useStatus from 'hooks/useStatus'
import useTheme from 'hooks/useTheme'
import { verify } from 'features/userSlice/thunks'
import { setTheme } from 'features/settingSlice'
import { themeNavigation } from '#/theme'

import LoginRoutes from '#/navigation/LoginRoutes'

const Routes = () => {
  const { theme, isDark } = useTheme()
  const dispatch = useDispatch()
  const { status, setStatus } = useStatus()

  useEffect(() => {
    const verifySesion = async () => {
      setStatus('loading')
      const dispatchReturn = dispatch(verify())

      dispatchReturn.then(() => {
        setStatus('')
      })
    }

    const suscribeAppearance = Appearance.addChangeListener(scheme => {
      dispatch(setTheme(scheme.colorScheme))
    })

    verifySesion()

    return () => {
      suscribeAppearance.remove()
    }
  }, [])

  if (status === 'loading') return null

  return (
    <NavigationContainer theme={themeNavigation(theme, isDark)}>
      <LoginRoutes />
    </NavigationContainer>
  )
}

export default Routes
