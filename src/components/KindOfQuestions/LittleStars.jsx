import { useState, useEffect } from 'react'
import { View, TouchableOpacity, FlatList, StyleSheet } from 'react-native'

import Star from 'components/Icons/star'
import StarSelect from 'components/Icons/starSelect'
import Text from 'components/Styled/Text'

import useTheme from 'hooks/useTheme'
import { wp, hp } from 'utils'

const ImageComponent = ({ keyPress, onPress, value }) => {
  const { styles } = useTheme(getStyles)

  const SelectStar = keyPress >= value ? StarSelect : Star

  return (
    <TouchableOpacity style={styles.imgStyles} onPress={() => onPress(value)}>
      <SelectStar width={wp('16%')} height={hp('9%')} />
    </TouchableOpacity>
  )
}

const SMILES = [
  {
    value: 1
  },
  {
    value: 2
  },
  {
    value: 3
  },
  {
    value: 4
  }
]

const LittleStars = ({ answer, setAnswer }) => {
  const { styles } = useTheme(getStyles)
  const [keyPress, setKeyPress] = useState(null)

  useEffect(() => {
    if (answer !== keyPress) setKeyPress(answer)
  }, [answer])

  const handlePress = (value) => {
    setAnswer(value)
    setKeyPress(value)
  }

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={SMILES}
        renderItem={({ item }) => (
          <ImageComponent
            onPress={handlePress}
            value={item.value}
            keyPress={keyPress}
          />
        )}
      />

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
    </View>
  )
}

const getStyles = theme => StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('15%'),
    width: wp('75%')
  },
  textDescription: {
    marginTop: hp('2%'),
    fontSize: hp('3%'),
    fontWeight: '500'
  },
  imgStyles: {
    paddingHorizontal: wp('1%')
  }
})

export default LittleStars
