import { useState, useRef } from 'react'
import { StyleSheet, View, Image, PanResponder, Animated } from 'react-native'

import Text from 'components/Styled/Text'

import emocionado from 'assets/smiles/emocionado.png'
import bien from 'assets/smiles/bien.png'
import feliz from 'assets/smiles/feliz.png'
import sincomentarios from 'assets/smiles/sincomentarios.png'

import useTheme from 'hooks/useTheme'
import { wp, hp } from 'utils'

const Draggable = ({ contentPan, image, text, value, style }) => {
  const { styles } = useTheme(getStyles)
  const [stateDrag] = useState({
    value,
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
        const { moveX, moveY } = gesture

        contentPan.current.measure((_x, _y, width, height, pageX, pageY) => {
          const initialPoint = [pageX, pageY]
          const lastPoint = [pageX + wp('25%'), pageY + hp('12%')]

          const x = [initialPoint[0], lastPoint[0]]
          const y = [initialPoint[1], lastPoint[1]]

          if (moveX >= x[0] && moveX <= x[1] && moveY >= y[0] && moveY <= y[1]) {
            return
          }

          Animated.spring(
            pan,
            {
              toValue: { x: 0, y: 0 },
              useNativeDriver: false
            }
          ).start()
        })
      }
    })
  ).current

  const panStyle = {
    ...style,
    transform: pan.getTranslateTransform()
  }

  return (
    <View style={styles.itemDrag}>
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

const DragAndDrop = ({ setAnswer }) => {
  const { styles } = useTheme(getStyles)
  const pan = useRef()

  return (
    <View style={styles.mainContainer}>
      <View style={styles.row}>
        <Draggable
          style={{ marginRight: hp('5%') }}
          contentPan={pan}
          image={bien}
          value={2}
          text='Algunas Veces'
        />
        <View style={styles.colRow}>
          <Draggable
            contentPan={pan}
            image={feliz}
            value={3}
            text='Muchas Veces'
          />
          <Draggable
            style={{ marginTop: hp('0.4%') }}
            contentPan={pan}
            image={emocionado}
            value={4}
            text='Siempre'
          />
        </View>
        <Draggable
          style={{ marginLeft: hp('5%') }}
          contentPan={pan}
          image={sincomentarios}
          value={1}
          text='Nunca'
        />
      </View>

      <Animated.View ref={pan} style={styles.response}>
        <Text style={styles.textResponse}>Arrastra aquí una opción</Text>
      </Animated.View>
    </View>
  )
}

const getStyles = theme => StyleSheet.create({
  mainContainer: {
    alignItems: 'center'
  },
  response: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('12%'),
    width: wp('25%'),
    marginTop: hp('3%'),

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
    textAlign: 'center',
    fontSize: hp('1.4%')
  },
  containerDrag: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('22%'),
    height: hp('10%'),

    borderWidth: 1,
    borderColor: '#00000010',
    borderRadius: 15
  },
  imageStyle: {
    width: wp('13%'),
    height: hp('7%')
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('70%')
  }
})

export default DragAndDrop
