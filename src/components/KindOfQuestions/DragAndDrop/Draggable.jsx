import { useState, useRef, useEffect } from 'react'
import { View, Image, PanResponder, Animated } from 'react-native'

import Text from 'components/Styled/Text'

const Draggable = ({
  contentPan, image, text, value, style, styles, keyPress, handlePress
}) => {
  const [stateDrag] = useState({
    opacity: new Animated.Value(0.9)
  })

  useEffect(() => {
    if (keyPress === value) return

    Animated.spring(
      pan,
      {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false
      }
    ).start()
  }, [keyPress])

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
          const lastPoint = [
            pageX + styles.response.width,
            pageY + styles.response.height
          ]

          const x = [initialPoint[0], lastPoint[0]]
          const y = [initialPoint[1], lastPoint[1]]

          if (moveX >= x[0] && moveX <= x[1] && moveY >= y[0] && moveY <= y[1]) {
            return handlePress(value)
          }

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

export default Draggable
