import { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import useUser from 'hooks/useUser'
import useInput from 'hooks/useInput'

import Card from 'components/Cards/Main'
import Button from 'components/Styled/Button'
import Input from 'components/Styled/Input'

import { hp } from 'utils'

const CardForm = () => {
  const navigation = useNavigation()
  const { isAuth, loginUser } = useUser()

  const [inputValue, onChangeInput] = useInput('')
  const [passwordValue, onChangePass] = useInput('')

  useEffect(() => {
    if (isAuth) navigation.navigate('program')
  }, [isAuth])

  const handleLogin = () => {
    loginUser({
      email: inputValue,
      password: passwordValue
    })
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

      <Button onPress={handleLogin} iconRight='arrow-right' style={styles.buttonStyles}>Iniciar sesión</Button>
    </>
  )
}

const styles = StyleSheet.create({
  buttonStyles: {
    marginTop: hp('8%')
  },
  input: {
    marginBottom: hp('2%')
  }
})

export default CardForm
