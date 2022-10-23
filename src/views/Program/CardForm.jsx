import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Card from 'components/Cards/Main'
import Button from 'components/Styled/Button'
import Input from 'components/Styled/Input'

import { hp } from 'utils'

const handleProgram = (navigation) => {
  navigation.navigate('home')
}

const CardForm = () => {
  const navigation = useNavigation()

  return (
    <>
      <Card>
        <Input label='Programa' icon='vcard' placeholder='Elija su programa' style={styles.input} />
      </Card>

      <Button
        onPress={() => handleProgram(navigation)}
        iconRight='arrow-right'
        style={styles.buttonStyles}
      >
        Continuar
      </Button>
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
