import { createNativeStackNavigator } from '@react-navigation/native-stack'

import useUser from 'hooks/useUser'
import useTheme from 'hooks/useTheme'

import Login from 'views/Login'
import Program from 'views/Program'

import UserRoutes from '#/navigation/HomeRoutes'
import { screenOptions } from '#/navigation/CustomNavs'

const InitialRoutes = () => {
  const { theme } = useTheme()
  const { isAuth } = useUser()

  const AuthRoutes = (
    <>
      <Stack.Screen
        name='program'
        options={{ title: 'Seleccionar Programa | Evaluación Docente' }}
        component={Program}
      />
      <Stack.Screen name='user' options={{ title: 'Evaluación Docente' }} component={UserRoutes} />
    </>
  )

  const LoginRoutes = (
    <Stack.Screen name='login' options={{ title: 'Inicia Sesión | Evaluación Docente' }} component={Login} />
  )

  return (
    <Stack.Navigator screenOptions={{ ...screenOptions(theme), headerShown: false }}>
      {
        isAuth ? AuthRoutes : LoginRoutes
      }
    </Stack.Navigator>
  )
}

const Stack = createNativeStackNavigator()

export default InitialRoutes
