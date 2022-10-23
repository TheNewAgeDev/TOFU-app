import Card from 'components/Cards/Main'
import Button from 'components/Styled/Button'
import Input from 'components/Styled/Input'

const CardForm = () => {
  return (
    <>
      <Card>
        <Input icon='user' placeholder='Ingrese el correo' />
        <Input icon='lock' placeholder='Ingrese la contraseña' />
      </Card>

      <Button>Iniciar Sesión</Button>
    </>
  )
}

export default CardForm
