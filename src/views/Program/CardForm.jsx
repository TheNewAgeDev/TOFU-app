import { useState, useEffect } from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
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
  const { status, statusMessage, setStatus } = useStatus()
  const { black, white } = theme.colors

  const programs = useSelector(state => state.user.programs.map((item, index) => {
    return {
      id: item.id,
      label: item.name,
      value: item.name,
      style: {
        backgroundColor: theme.colors.backgroundPrimary,
        color: isDark ? white : black
      }
    }
  }))

  useEffect(() => {
    const fetchPrograms = async () => {
      if (programs.length > 0) return

      setStatus('loading')
      await getPrograms()
      setStatus('')
    }

    fetchPrograms()
  }, [])

  const handleChange = (itemValue) => setSelectedProgram(itemValue)

  const handleProgram = () => {
    setStatus('')

    const selProg = programs.find(prog => prog.value === selectedProgram)
    selectProgram(selProg, setStatus)
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
        {
          status === 'loading' ? <ActivityIndicator size='large' style={styles.loader} /> : statusMessage
        }
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
  loader: {
    marginTop: hp('4%')
  },
  input: {
    marginBottom: hp('2%')
  }
})

export default CardForm
