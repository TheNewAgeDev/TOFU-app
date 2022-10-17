import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from 'pages/Home'

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName='home'>
      <Stack.Screen name='home' options={{ title: 'Home' }} component={Home} />
    </Stack.Navigator>
  )
}

export const Stack = createNativeStackNavigator()

export default Routes
