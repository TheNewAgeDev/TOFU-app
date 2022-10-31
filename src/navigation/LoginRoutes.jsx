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
      <Stack.Screen name='user' options={{ title: 'Evaluación Docente' }} component={UserRoutes} />
      <Stack.Screen name='login' options={{ title: 'Inicia Sesión | Evaluación Docente' }} component={Login} />
      <Stack.Screen name='program' options={{ title: 'Seleccionar Programa | Evaluación Docente' }} component={Program} />
    </Stack.Navigator>
  )
}

const Stack = createNativeStackNavigator()

export default InitialRoutes
