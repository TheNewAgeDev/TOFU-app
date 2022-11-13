import { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

import useStatus from 'hooks/useStatus'
import useUser from 'hooks/useUser'
import useTheme from 'hooks/useTheme'

import Card from 'components/Cards/Main'
import Button from 'components/Styled/Button'
import Picker from 'components/Styled/Picker'
import Text from 'components/Styled/Text'

import { hp } from 'utils'

const CardForm = () => {
  const { styles, theme, isDark } = useTheme(getStyles)
  const [selectedProgram, setSelectedProgram] = useState('default')

  const { selectProgram, getPrograms } = useUser()
  const { statusMessage, setStatus } = useStatus()
  const { black, white } = theme.colors

  useEffect(() => {
    getPrograms()
  }, [getPrograms])

  const programs = useSelector(state => state.user.programs.map((item, index) => {
    return {
      id: item.id,
      label: item.name,
      value: item.slug,
      style: {
        backgroundColor: theme.colors.backgroundPrimary,
        color: isDark ? white : black
      }
    }
  }))

  const handleChange = (itemValue) => setSelectedProgram(itemValue)

  const handleProgram = () => {
    setStatus('')
    selectProgram(selectedProgram, setStatus)
  }

  const DEFAULT = {
    id: 1,
    label: 'Elija su programa',
    value: 'default',
    style: {
      backgroundColor: theme.colors.backgroundPrimary,
      color: isDark ? white : black
    }
  }

  return (
    <>
      <Card>
        <Picker
          label='Programa'
          icon='vcard'
          placeholder='Elija su programa'
          style={styles.input}
          selectedValue={selectedProgram}
          onValueChange={handleChange}
          options={[
            DEFAULT,
            ...programs
          ]}
        />
      </Card>

      <Text type='error' style={styles.alert}>
        {statusMessage}
      </Text>

      <Button
        onPress={handleProgram}
        iconRight='arrow-right'
        style={styles.buttonStyles}
      >
        Continuar
      </Button>
    </>
  )
}

const getStyles = theme => StyleSheet.create({
  buttonStyles: {
    marginTop: hp('4%')
  },
  alert: {
    marginTop: hp('4%')
  },
  input: {
    marginBottom: hp('2%')
  }
})

export default CardForm
