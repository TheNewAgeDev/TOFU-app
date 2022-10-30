import { createNativeStackNavigator } from '@react-navigation/native-stack'

import useTheme from 'hooks/useTheme'

import Login from 'views/Login'
import Program from 'views/Program'

import UserRoutes from '#/navigation/HomeRoutes'
import { screenOptions } from '#/navigation/CustomNavs'

const InitialRoutes = () => {
  const { theme } = useTheme()

  return (
    <Stack.Navigator screenOptions={{ ...screenOptions(theme), headerShown: false }} initialRouteName='login'>
      <Stack.Screen name='user' options={{ title: 'Inicio' }} component={UserRoutes} />
      <Stack.Screen name='login' options={{ title: 'Inicia Sesión' }} component={Login} />
      <Stack.Screen name='program' options={{ title: 'Programa' }} component={Program} />
    </Stack.Navigator>
  )
}

const Stack = createNativeStackNavigator()

export default InitialRoutes
