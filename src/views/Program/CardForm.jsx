import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Card from 'components/Cards/Main'
import Button from 'components/Styled/Button'
import Picker from 'components/Styled/Picker'

import { hp } from 'utils'

const handleProgram = (navigation) => {
  navigation.navigate('home')
}

const CardForm = () => {
  const navigation = useNavigation()

  const OPTIONS = [
    {
      id: 1,
      label: 'Elija su programa',
      value: 'default'
    },
    {
      id: 2,
      label: 'Ingenieria Informatica',
      value: 'inginformatica'
    }
  ]

  return (
    <>
      <Card>
        <Picker
          label='Programa'
          icon='vcard'
          placeholder='Elija su programa'
          style={styles.input}
          options={OPTIONS}
        />
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
