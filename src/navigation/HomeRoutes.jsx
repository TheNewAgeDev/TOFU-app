import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import useTheme from 'hooks/useTheme'

import StartEval from 'views/StartEval'
import ContinueEval from 'views/ContinueEval'
import EndEval from 'views/EndEval'

import { screenOptionsTab } from '#/navigation/CustomNavs'

const HomeRoutes = () => {
  const { theme } = useTheme()

  return (
    <Tab.Navigator screenOptions={screenOptionsTab(theme)} initialRouteName='start'>
      <Tab.Screen name='start' options={{ title: 'Empezar', tabBarBadge: 3 }} component={StartEval} />
      <Tab.Screen name='continue' options={{ title: 'Continuar' }} component={ContinueEval} />
      <Tab.Screen name='ends' options={{ title: 'Finalizados' }} component={EndEval} />
    </Tab.Navigator>
  )
}

const Tab = createBottomTabNavigator()

export default HomeRoutes
