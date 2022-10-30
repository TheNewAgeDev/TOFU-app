import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import useTheme from 'hooks/useTheme'

import Survey from 'views/Survey'
import StartEval from 'views/StartEval'
import ContinueEval from 'views/ContinueEval'
import EndEval from 'views/EndEval'

import { screenOptionsTab, screenOptions } from '#/navigation/CustomNavs'

const UserRoutes = () => {
  const { theme } = useTheme()

  return (
    <Stack.Navigator screenOptions={screenOptions(theme)} initialRouteName='home'>
      <Stack.Screen name='home' options={{ title: 'Inicio' }} component={HomeRoutes} />
      <Stack.Screen name='survey' options={{ title: 'Encuesta' }} component={Survey} />
    </Stack.Navigator>
  )
}

const HomeRoutes = () => {
  const { theme } = useTheme()

  return (
    <Tab.Navigator screenOptions={{ ...screenOptionsTab(theme), headerShown: false }} initialRouteName='start'>
      <Tab.Screen name='start' options={{ title: 'Empezar', tabBarBadge: 3 }} component={StartEval} />
      <Tab.Screen name='continue' options={{ title: 'Continuar' }} component={ContinueEval} />
      <Tab.Screen name='ends' options={{ title: 'Finalizados' }} component={EndEval} />
    </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default UserRoutes
