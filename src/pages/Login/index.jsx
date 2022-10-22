import { View, StyleSheet } from 'react-native'

import useTheme from 'hooks/useTheme'
import { hp } from 'utils'

import Card from 'components/Cards/Main'
import Unipaz from 'components/Icons/unipaz'
import Text from 'components/Styled/Text'

const Login = () => {
  const { styles } = useTheme(getStyles)

  return (
    <View style={styles.container}>
      <Unipaz height='50%' width='50%' />

      <Card>
        <Text>Login</Text>
      </Card>
    </View>
  )
}

const getStyles = theme => StyleSheet.create({
  container: {
    padding: hp('4%'),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Login
