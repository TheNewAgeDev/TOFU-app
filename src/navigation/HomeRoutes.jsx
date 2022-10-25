import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from 'views/Home'

const HomeRoutes = () => {
  return (
    <Tab.Navigator initialRouteName='start'>
      <Tab.Screen name='start' options={{ title: 'Empezar' }} component={Home} />
      <Tab.Screen name='continue' options={{ title: 'Continuar' }} component={Home} />
      <Tab.Screen name='ends' options={{ title: 'Finalizados' }} component={Home} />
    </Tab.Navigator>
  )
}

const Tab = createBottomTabNavigator()

export default HomeRoutes
