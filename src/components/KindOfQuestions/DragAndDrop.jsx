import { useState, useRef } from 'react'
import { StyleSheet, View, Image, PanResponder, Animated } from 'react-native'

import Text from 'components/Styled/Text'

import emocionado from 'assets/smiles/emocionado.png'
import bien from 'assets/smiles/bien.png'
import feliz from 'assets/smiles/feliz.png'
import sincomentarios from 'assets/smiles/sincomentarios.png'

import useTheme from 'hooks/useTheme'
import { wp, hp } from 'utils'

const Draggable = ({ image, text }) => {
  const { styles } = useTheme(getStyles)
  const [stateDrag] = useState({
    showDraggable: true,
    dropAreaValues: null,
    opacity: new Animated.Value(0.9)
  })

  const pan = useRef(new Animated.ValueXY()).current
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        })
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (e, gesture) => {
        pan.flattenOffset()
        pan.setValue({ x: 0, y: 0 })
      }
    })
  ).current

  const renderDraggable = () => {
    const panStyle = {
      transform: pan.getTranslateTransform()
    }

    if (stateDrag.showDraggable) {
      return (
        <View style={{ position: 'absolute' }}>
          <Animated.View
            {...panResponder.panHandlers}
            style={[panStyle, styles.containerDrag, { opacity: stateDrag.opacity }]}
          >
            <Image
              style={styles.imageStyle}
              source={image}
              resizeMode='contain'
            />

            <Text style={styles.textItem}>{text}</Text>
          </Animated.View>
        </View>
      )
    }
  }

  return (
    <View style={styles.itemDrag}>
      {renderDraggable()}
    </View>
  )
}

const DragAndDrop = () => {
  const { styles } = useTheme(getStyles)

  return (
    <View style={styles.mainContainer}>
      <View style={styles.row}>
        <Draggable image={bien} text='Algunas Veces' />
        <Draggable image={feliz} text='Muchas Veces' />
        <Draggable image={emocionado} text='Siempre' />
        <Draggable image={sincomentarios} text='Nunca' />
      </View>

      <View style={styles.response}>
        <Text style={styles.textResponse}>Arrastra aquí una opción</Text>
      </View>
    </View>
  )
}

const getStyles = theme => StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    height: hp('30%')
  },
  response: {
    top: hp('12%'),
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('13%'),
    width: wp('30%'),

    borderRadius: wp('2%'),
    shadowColor: '#00000080',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1
  },
  textResponse: {
    textAlign: 'center',
    color: '#00000050'
  },
  itemDrag: {
    width: wp('18%'),
    zIndex: 9999,
    alignItems: 'center'
  },
  textItem: {
    textAlign: 'center'
  },
  containerDrag: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('25%'),
    height: hp('11%'),
    borderWidth: 1,
    borderColor: '#00000010',
    borderRadius: 15
  },
  imageStyle: {
    width: wp('13%'),
    height: hp('7%')
  },
  row: {
    flexDirection: 'row'
  }
})

export default DragAndDrop
