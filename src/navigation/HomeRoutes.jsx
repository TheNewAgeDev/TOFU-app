import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import StartEval from 'views/StartEval'
import ContinueEval from 'views/ContinueEval'
import EndEval from 'views/EndEval'

const HomeRoutes = () => {
  return (
    <Tab.Navigator initialRouteName='start'>
      <Tab.Screen name='start' options={{ title: 'Empezar' }} component={StartEval} />
      <Tab.Screen name='continue' options={{ title: 'Continuar' }} component={ContinueEval} />
      <Tab.Screen name='ends' options={{ title: 'Finalizados' }} component={EndEval} />
    </Tab.Navigator>
  )
}

const Tab = createBottomTabNavigator()

export default HomeRoutes
