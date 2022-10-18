import { View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as StoreProvider } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'

import Navigation from '#/navigation'
import store from '#/store'

const App = () => {
  return (
    <StoreProvider store={store}>
      <StatusBar style='dark' />

      <NavigationContainer>
        <View style={styles.container}>
          <Navigation />
        </View>
      </NavigationContainer>
    </StoreProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  }
})

export default App
