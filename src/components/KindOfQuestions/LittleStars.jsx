import { useState } from 'react'
import { View, TouchableOpacity, FlatList, StyleSheet } from 'react-native'

import Star from 'components/Icons/star'
import StarSelect from 'components/Icons/starSelect'

import useTheme from 'hooks/useTheme'
import { wp, hp } from 'utils'

const ImageComponent = ({ keyPress, onPress, value }) => {
  const { styles } = useTheme(getStyles)

  const SelectStar = keyPress >= value ? StarSelect : Star

  return (
    <TouchableOpacity style={styles.imgStyles} onPress={() => onPress(value)}>
      <SelectStar width={wp('16%')} height={hp('10%')} />
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

const LittleStars = ({ setAnswer }) => {
  const { styles } = useTheme(getStyles)
  const [keyPress, setKeyPress] = useState(null)

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
    </View>
  )
}

const getStyles = theme => StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('10%'),
    width: wp('75%')
  },
  imgStyles: {
    paddingHorizontal: wp('1%')
  }
})

export default LittleStars
