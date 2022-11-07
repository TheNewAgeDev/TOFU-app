import { useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

import Text from 'components/Styled/Text'

import useTheme from 'hooks/useTheme'
import { wp, hp } from 'utils'

const Square = ({ num, keyPress, onPress }) => {
  const { styles } = useTheme(getStyles)

  const contentStyles = [
    styles.contentNum,
    keyPress === num && styles.contentPress
  ]

  return (
    <TouchableOpacity onPress={() => onPress(num)} style={contentStyles}>
      <Text style={styles.textNum}>{num}</Text>
    </TouchableOpacity>
  )
}

const NumericalRange = ({ setAnswer }) => {
  const { styles } = useTheme(getStyles)
  const [keyPress, setKeyPress] = useState(null)

  const handlePress = (value) => {
    setAnswer(value)
    setKeyPress(value)
  }

  return (
    <>
      <View style={styles.numbers}>
        <Square num={1} onPress={handlePress} keyPress={keyPress} />
        <Square num={2} onPress={handlePress} keyPress={keyPress} />
        <Square num={3} onPress={handlePress} keyPress={keyPress} />
        <Square num={4} onPress={handlePress} keyPress={keyPress} />
      </View>

      <Text style={styles.textDescription}>
        {
          keyPress === 1
            ? 'Nunca'
            : keyPress === 2
              ? 'Algunas Veces'
              : keyPress === 3
                ? 'Muchas Veces'
                : keyPress === 4 && 'Siempre'
        }
      </Text>
    </>
  )
}

const getStyles = theme => StyleSheet.create({
  numbers: {
    flexDirection: 'row',
    marginTop: hp('2%')
  },
  contentNum: {
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('5%'),

    marginHorizontal: wp('2%'),
    borderRadius: wp('2%'),
    shadowColor: '#414142',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1
  },
  contentPress: {
    backgroundColor: '#EBEDF0'
  },
  textNum: {
    fontSize: hp('2.8%'),
    fontWeight: '300'
  },
  textDescription: {
    marginTop: hp('3%'),
    fontSize: hp('3%'),
    fontWeight: '500'
  }
})

export default NumericalRange
