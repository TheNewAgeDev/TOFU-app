import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Slider from '@react-native-community/slider'

import Text from 'components/Styled/Text'

import useTheme from 'hooks/useTheme'
import { wp, hp } from 'utils'

const SlideBar = ({ setAnswer }) => {
  const { styles, theme } = useTheme(getStyles)
  const [keyPress, setKeyPress] = useState(null)

  const handleSlide = (e) => {
    const value = Math.round(e)
    if (value === 0) return

    setAnswer(value)
    setKeyPress(value)
  }

  return (
    <View style={styles.container}>
      <Slider
        style={styles.slideBar}
        onValueChange={handleSlide}
        minimumValue={1}
        maximumValue={4}
        minimumTrackTintColor={theme.colors.primary}
        maximumTrackTintColor={theme.colors.black}
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
    marginTop: hp('2%')
  },
  slideBar: {
    width: wp('70%'),
    height: hp('4%')
  },
  textDescription: {
    marginTop: hp('3%'),
    fontSize: hp('3%'),
    fontWeight: '500'
  }
})

export default SlideBar
