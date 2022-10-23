import { StyleSheet } from 'react-native'

import Card from 'components/Cards/Main'
import Button from 'components/Styled/Button'
import Input from 'components/Styled/Input'

import { hp } from 'utils'

const CardForm = () => {
  return (
    <>
      <Card>
        <Input label='Correo electrónico' icon='user' placeholder='Ingrese el correo' style={styles.input} />
        <Input label='Contraseña' icon='lock' placeholder='Ingrese la contraseña' secureTextEntry />
      </Card>

      <Button iconRight='arrow-right' style={styles.buttonStyles}>Iniciar sesión</Button>
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
