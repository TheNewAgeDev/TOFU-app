import { useEffect } from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import useUser from 'hooks/useUser'
import useStatus from 'hooks/useStatus'
import useInput from 'hooks/useInput'

import Card from 'components/Cards/Main'
import Button from 'components/Styled/Button'
import Text from 'components/Styled/Text'
import Input from 'components/Styled/Input'

import { hp } from 'utils'

const EXCLUDE_STATUS = ['loading', 'success']

const CardForm = () => {
  const navigation = useNavigation()
  const { isAuth, loginUser } = useUser()
  const { status, statusMessage, setStatus } = useStatus()

  const [inputValue, onChangeInput] = useInput('')
  const [passwordValue, onChangePass] = useInput('')

  useEffect(() => {
    if (isAuth) navigation.navigate('program')
  }, [isAuth])

  const isLoading = status === 'loading'

  const handleLogin = () => {
    loginUser({
      email: inputValue,
      password: passwordValue
    }, setStatus)
  }

  return (
    <>
      <Card>
        <Input
          value={inputValue}
          defaultValue={inputValue}
          onChangeText={onChangeInput}
          label='Correo electrónico'
          icon='user'
          placeholder='Ingrese el correo'
          style={styles.input}
        />
        <Input
          value={passwordValue}
          defaultValue={passwordValue}
          onChangeText={onChangePass}
          label='Contraseña'
          icon='lock'
          placeholder='Ingrese la contraseña'
          secureTextEntry
        />
      </Card>

      {
      isLoading
        ? <ActivityIndicator size='large' style={styles.loader} />
        : (
          <Text type='error' style={styles.alert}>
            {!EXCLUDE_STATUS.includes(status) && statusMessage}
          </Text>
          )
      }

      <Button
        disabled={isLoading}
        onPress={handleLogin}
        iconRight='arrow-right'
        style={styles.buttonStyles}
      >
        Iniciar sesión
      </Button>
    </>
  )
}

const styles = StyleSheet.create({
  buttonStyles: {
    marginTop: hp('4%')
  },
  alert: {
    marginTop: hp('4%')
  },
  loader: {
    marginTop: hp('4%')
  },
  input: {
    marginBottom: hp('3%')
  }
})

export default CardForm
