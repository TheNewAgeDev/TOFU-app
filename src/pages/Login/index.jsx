import { View, StyleSheet } from 'react-native'

import useTheme from 'hooks/useTheme'
import { wp, hp } from 'utils'

import Card from 'components/Cards/Main'
import Unipaz from 'components/Icons/unipaz'
import Button from 'components/Styled/Button'
import Text from 'components/Styled/Text'

const Login = () => {
  const { styles } = useTheme(getStyles)

  return (
    <View style={styles.container}>
      <Unipaz style={styles.logoStyles} theme={styles.logoTheme} width={wp('40%')} height={hp('30%')} />

      <Card>
        <Text>Login</Text>
      </Card>

      <Button>Iniciar Sesión</Button>
    </View>
  )
}

const getStyles = (theme, isDark) => StyleSheet.create({
  container: {
    padding: hp('4%'),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoTheme: {
    letter: isDark ? theme.colors.white : theme.colors.black
  },
  logoStyles: {
    marginBottom: hp('5%')
  }
})

export default Login
