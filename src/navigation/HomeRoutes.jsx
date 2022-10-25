import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from 'views/Home'

const HomeRoutes = () => {
  return (
    <Stack.Navigator initialRouteName='start'>
      <Stack.Screen name='start' options={{ title: 'Empezar' }} component={Home} />
      <Stack.Screen name='continue' options={{ title: 'Continuar' }} component={Home} />
      <Stack.Screen name='ends' options={{ title: 'Finalizados' }} component={Home} />
    </Stack.Navigator>
  )
}

const Stack = createNativeStackNavigator()

export default HomeRoutes
