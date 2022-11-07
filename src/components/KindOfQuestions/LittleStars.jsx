import { View, Image, FlatList, StyleSheet } from 'react-native'

import Text from 'components/Styled/Text'

import emocionado from 'assets/smiles/emocionado.png'
import bien from 'assets/smiles/bien.png'
import feliz from 'assets/smiles/feliz.png'
import sincomentarios from 'assets/smiles/sincomentarios.png'

import useTheme from 'hooks/useTheme'
import { wp, hp } from 'utils'

const ImageComponent = ({ image, label = '' }) => {
  const { styles } = useTheme(getStyles)

  return (
    <View>
      <Image
        style={styles.imageStyle}
        source={image}
        resizeMode='contain'
      />

      <Text>{label}</Text>
    </View>
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
  return (
    <>
      <FlatList
        data={SMILES}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => <ImageComponent image={item.image} label={item.label} />}
      />
    </>
  )
}

const getStyles = theme => StyleSheet.create({
  imageStyle: {
    width: wp('24%'),
    height: hp('12%')
  }
})

export default LittleStars
