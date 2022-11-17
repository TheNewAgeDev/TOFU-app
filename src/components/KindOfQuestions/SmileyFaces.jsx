import { useState, useEffect } from 'react'
import { View, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native'

import Text from 'components/Styled/Text'

import emocionado from 'assets/smiles/emocionado.png'
import bien from 'assets/smiles/bien.png'
import feliz from 'assets/smiles/feliz.png'
import sincomentarios from 'assets/smiles/sincomentarios.png'

import useTheme from 'hooks/useTheme'
import { wp, hp, setOpacity } from 'utils'

const ImageComponent = ({ keyPress, onPress, image, label = '', value }) => {
  const { styles } = useTheme(getStyles)

  const InputStyles = [
    styles.buttonSmile,
    keyPress === value && styles.buttonPress
  ]

  const ImageStyles = [
    styles.imageStyle,
    keyPress === value && styles.imagePress
  ]

  const textStyles = [
    styles.textSmile,
    keyPress === value && styles.textPress
  ]

  return (
    <TouchableOpacity onPress={() => onPress(value)} style={InputStyles}>
      <Image
        style={ImageStyles}
        source={image}
        resizeMode='contain'
      />

      <Text style={textStyles}>{label}</Text>
    </TouchableOpacity>
  )
}

const SMILES = [
  {
    label: 'Algunas Veces',
    image: bien,
    value: 2
  },
  {
    label: 'Siempre',
    image: emocionado,
    value: 4
  },
  {
    label: 'Muchas Veces',
    image: feliz,
    value: 3
  },
  {
    label: 'Nunca',
    image: sincomentarios,
    value: 1
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
        data={SMILES}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <ImageComponent
            onPress={handlePress}
            image={item.image}
            label={item.label}
            value={item.value}
            keyPress={keyPress}
          />
        )}
      />
    </View>
  )
}

const getStyles = (theme, isDark) => {
  return StyleSheet.create({
    container: {
      position: 'relative',
      height: hp('41%'),
      width: wp('75%')
    },
    imagePress: {
      position: 'absolute',
      width: wp('29%'),
      height: hp('15%'),
      top: hp('-1.5%')
    },
    buttonPress: {
      backgroundColor: isDark ? setOpacity(theme.colors.primary, 30) : '#EBEDF0'
    },
    textPress: {
      position: 'absolute',
      top: hp('13%'),
      color: isDark ? '#FFFFFF' : '#000000'
    },
    imageStyle: {
      width: wp('28%'),
      height: hp('12%')
    },
    buttonSmile: {
      width: wp('35%'),
      padding: wp('3%'),
      marginVertical: hp('1%'),

      justifyContent: 'center',
      alignItems: 'center',

      borderRadius: wp('2%'),
      shadowColor: '#E5DEDE',
      shadowOpacity: wp('0.1%'),
      shadowRadius: wp('0.1%'),
      elevation: wp('0.2%')
    },
    textSmile: {
      marginTop: hp('0.5%'),
      fontSize: hp('2%'),
      fontWeight: '400'
    }
  })
}

export default LittleStars
