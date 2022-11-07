import { TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native'

import Text from 'components/Styled/Text'

import emocionado from 'assets/smiles/emocionado.png'
import bien from 'assets/smiles/bien.png'
import feliz from 'assets/smiles/feliz.png'
import sincomentarios from 'assets/smiles/sincomentarios.png'

import useTheme from 'hooks/useTheme'
import { wp, hp } from 'utils'

let keyPress = null

const ImageComponent = ({ onPress, image, label = '', value }) => {
  const { styles } = useTheme(getStyles)

  const InputStyles = [
    styles.buttonSmile,
    keyPress === value && styles.buttonPress
  ]

  return (
    <TouchableOpacity onPress={() => onPress(value)} style={InputStyles}>
      <Image
        style={styles.imageStyle}
        source={image}
        resizeMode='contain'
      />

      <Text style={styles.textSmile}>{label}</Text>
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

const LittleStars = ({ setAnswer }) => {
  const handlePress = (value) => {
    setAnswer(value)
    keyPress = value
  }

  return (
    <>
      <FlatList
        data={SMILES}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <ImageComponent onPress={handlePress} image={item.image} label={item.label} value={item.value} />
        )}
      />
    </>
  )
}

const getStyles = theme => StyleSheet.create({
  imageStyle: {
    width: wp('28%'),
    height: hp('12%')
  },
  buttonSmile: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp('3%'),
    borderRadius: wp('2%'),
    shadowColor: '#E5DEDE',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1.4,
    marginVertical: hp('1%')
  },
  buttonPress: {
    backgroundColor: '#EBEDF0'
  },
  textSmile: {
    marginTop: hp('0.5%'),
    fontWeight: '400'
  }
})

export default LittleStars
