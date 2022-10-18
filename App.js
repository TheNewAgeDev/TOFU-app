import { View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as StoreProvider } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'

import useTheme from 'hooks/useTheme'

import Navigation from '#/navigation'
import store from '#/store'
import { themeNavigation } from '#/theme'

const App = () => {
  const { styles, theme } = useTheme(getStyles)

  return (
    <StoreProvider store={store}>
      <StatusBar style='auto' />

      <NavigationContainer theme={themeNavigation(theme)}>
        <View style={styles.container}>
          <Navigation />
        </View>
      </NavigationContainer>
    </StoreProvider>
  )
}

const getStyles = theme => StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backgroundPrimary
  }
})

export default App
