import { useState, useRef, useEffect } from 'react'
import { View, Image, PanResponder, Animated } from 'react-native'

import Text from 'components/Styled/Text'

import { wp, hp } from 'utils'

const isInDropZone = ({ pageX, pageY, styles, moveX, moveY }) => {
  const initialPoint = [pageX, pageY]
  const lastPoint = [
    pageX + styles.response.width,
    pageY + styles.response.height
  ]

  const x = [initialPoint[0], lastPoint[0]]
  const y = [initialPoint[1], lastPoint[1]]

  return moveX >= x[0] && moveX <= x[1] && moveY >= y[0] && moveY <= y[1]
}

const Draggable = ({
  contentPan, image, text, value, style, styles, keyPress, handlePress
}) => {
  const [stateDrag, setStateDrag] = useState({
    opacity: new Animated.Value(0.9),
    isBorderer: true
  })

  useEffect(() => {
    if (keyPress === value) {
      itemPan.current.measure((_x, _y, _width, _height, pageXPam, pageYPam) => {
        contentPan.current.measure((_x, _y, _width, _height, pageX, pageY) => {
          const movX = (pageX + wp('1.5%')) - pageXPam
          const movY = (pageY + hp('1.15%')) - pageYPam
          Animated.spring(
            pan,
            {
              toValue: { x: movX, y: movY },
              useNativeDriver: false
            }
          ).start()
        })
      })

      return setStateDrag(drag => ({
        ...drag,
        isBorderer: false
      }))
    }

    Animated.spring(
      pan,
      {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false
      }
    ).start()

    setStateDrag(drag => ({
      ...drag,
      isBorderer: true
    }))
  }, [keyPress])

  const pan = useRef(new Animated.ValueXY()).current
  const itemPan = useRef()

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

        contentPan.current.measure((_x, _y, _width, _height, pageX, pageY) => {
          const isDropZone = isInDropZone({ moveX, moveY, styles, pageX, pageY })

          if (isDropZone) return handlePress(value)

          handlePress(null)
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
    borderWidth: stateDrag.isBorderer ? 1 : 0,
    transform: pan.getTranslateTransform()
  }

  return (
    <View ref={itemPan} style={styles.itemDrag}>
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

export default Draggable
