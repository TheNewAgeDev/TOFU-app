import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from 'pages/Home'
import Login from 'pages/Login'

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='login'>
      <Stack.Screen name='home' options={{ title: 'Inicio' }} component={Home} />
      <Stack.Screen name='login' options={{ title: 'Inicia Sesión' }} component={Login} />
    </Stack.Navigator>
  )
}

export const Stack = createNativeStackNavigator()

export default Routes
