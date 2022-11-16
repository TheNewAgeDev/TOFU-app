import { useState, useRef, useEffect } from 'react'
import { View, Image, PanResponder, Animated } from 'react-native'

import Text from 'components/Styled/Text'

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
  const [stateDrag] = useState({
    opacity: new Animated.Value(0.9),
    itemPan: useRef()
  })

  useEffect(() => {
    if (keyPress === value) {
      contentPan.current.measure((_x, _y, _width, _height, pageX, pageY) => {
        stateDrag.itemPan.current.measure((_x, _y, _width, _height, pageXPan, pageYPam) => {
          const movX = pageX - pageXPan
          const movY = pageY - pageYPam

          Animated.spring(
            pan,
            {
              toValue: { x: movX, y: movY },
              useNativeDriver: false
            }
          ).start()
        })
      })

      return
    }

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

        contentPan.current.measure((_x, _y, _width, _height, pageX, pageY) => {
          const isDropZone = isInDropZone({ moveX, moveY, styles, pageX, pageY })

          if (isDropZone) return handlePress(value)
          handlePress(null)
        })
      }
    })
  ).current

  const panStyle = {
    ...style,
    transform: pan.getTranslateTransform()
  }

  return (
    <View ref={stateDrag.itemPan} style={styles.itemDrag}>
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
