import { View, StyleSheet } from 'react-native'

import useTheme from '#/hooks/useTheme'
import { hp } from 'utils'

import Text from 'components/Styled/Text'

const Login = () => {
  const { styles } = useTheme(getStyles)

  return (
    <View style={styles.container}>
      <Text>Login</Text>
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
