import { StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import Card from 'components/Cards/Main'
import Button from 'components/Styled/Button'
import Picker from 'components/Styled/Picker'

import { hp } from 'utils'

const handleProgram = (navigation) => {
  navigation.navigate('user')
}

const CardForm = () => {
  const navigation = useNavigation()
  const programs = useSelector(state => state.user.programs.map(item => {
    return { id: item.id, label: item.name, value: item.slug }
  }))

  const DEFAULT = {
    id: 1,
    label: 'Elija su programa',
    value: 'default'
  }

  return (
    <>
      <Card>
        <Picker
          label='Programa'
          icon='vcard'
          placeholder='Elija su programa'
          style={styles.input}
          options={[
            DEFAULT,
            ...programs
          ]}
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
