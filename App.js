import { Provider as StoreProvider } from 'react-redux'
import { StatusBar } from 'expo-status-bar'

import Navigation from '#/navigation'
import store from '#/store'

const App = () => {
  return (
    <StoreProvider store={store}>
      <StatusBar style='auto' />

      <Navigation />
    </StoreProvider>
  )
}

export default App
