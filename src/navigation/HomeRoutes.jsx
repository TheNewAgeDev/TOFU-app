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
      <Stack.Screen name='home' options={{ title: 'Evaluación Docente' }} component={HomeRoutes} />
      <Stack.Screen name='survey' options={{ title: 'Evaluación Docente' }} component={Survey} />
    </Stack.Navigator>
  )
}

const HomeRoutes = () => {
  const { theme } = useTheme()

  return (
    <Tab.Navigator screenOptions={{ ...screenOptionsTab(theme), headerShown: false }} initialRouteName='start'>
      <Tab.Screen
        name='start'
        options={{
          title: 'Empezar | Evaluación Docente',
          tabBarLabel: 'Empezar'
        }}
        component={StartEval}
      />
      <Tab.Screen
        name='continue'
        options={{
          title: 'Continuar | Evaluación Docente',
          tabBarLabel: 'Continuar'
        }}
        component={ContinueEval}
      />
      <Tab.Screen
        name='ends'
        options={{
          title: 'Finalizados | Evaluación Docente',
          tabBarLabel: 'Finalizados'
        }}
        component={EndEval}
      />
    </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default UserRoutes
