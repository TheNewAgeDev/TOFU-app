import { useEffect } from 'react'
import { View, StyleSheet, Appearance } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useDispatch } from 'react-redux'

import useTheme from 'hooks/useTheme'
import { setTheme } from 'features/themeSlice'
import { Constants } from 'utils'
import { themeNavigation } from '#/theme'

import Home from 'pages/Home'
import Login from 'pages/Login'

const InitialRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='login'>
      <Stack.Screen name='home' options={{ title: 'Inicio' }} component={Home} />
      <Stack.Screen name='login' options={{ title: 'Inicia Sesión' }} component={Login} />
    </Stack.Navigator>
  )
}

const Routes = () => {
  const { theme, styles } = useTheme(getStyles)
  const dispatch = useDispatch()

  useEffect(() => {
    Appearance.addChangeListener(scheme => {
      dispatch(setTheme(scheme.colorScheme))
    })
  }, [])

  return (
    <NavigationContainer theme={themeNavigation(theme)}>
      <View style={styles.container}>
        <InitialRoutes />
      </View>
    </NavigationContainer>
  )
}

const getStyles = theme => StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backgroundPrimary
  }
})

const Stack = createNativeStackNavigator()

export default Routes
