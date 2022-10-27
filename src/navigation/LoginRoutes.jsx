import { createNativeStackNavigator } from '@react-navigation/native-stack'

import useTheme from 'hooks/useTheme'

import Login from 'views/Login'
import Program from 'views/Program'

import HomeRoutes from '#/navigation/HomeRoutes'
import { screenOptions } from '#/navigation/CustomNavs'

const InitialRoutes = () => {
  const { theme } = useTheme()

  return (
    <Stack.Navigator screenOptions={{ ...screenOptions(theme), headerShown: false }} initialRouteName='login'>
      <Stack.Screen name='home' options={{ title: 'Inicio' }} component={HomeRoutes} />
      <Stack.Screen name='login' options={{ title: 'Inicia Sesión' }} component={Login} />
      <Stack.Screen name='program' options={{ title: 'Programa' }} component={Program} />
    </Stack.Navigator>
  )
}

const Stack = createNativeStackNavigator()

export default InitialRoutes
