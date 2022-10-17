import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Provider as StoreProvider } from 'react-redux'

import Navigation from '#/navigation'
import store from '#/store'

export default function App () {
  return (
    <StoreProvider store={store}>
      <StatusBar style='dark' />

      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </StoreProvider>
  )
}
