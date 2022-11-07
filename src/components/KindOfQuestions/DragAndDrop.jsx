import { useState, useRef } from 'react'
import { StyleSheet, View, PanResponder, Animated } from 'react-native'

import Text from 'components/Styled/Text'

import emocionado from 'assets/smiles/emocionado.png'
import bien from 'assets/smiles/bien.png'
import feliz from 'assets/smiles/feliz.png'
import sincomentarios from 'assets/smiles/sincomentarios.png'

import useTheme from 'hooks/useTheme'
import { wp, hp } from 'utils'

const Draggable = () => {
  const { styles } = useTheme(getStyles)
  const [stateDrag, setStateDrag] = useState({
    showDraggable: true,
    dropAreaValues: null,
    opacity: new Animated.Value(0.5)
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
      onPanResponderRelease: () => {
        pan.flattenOffset()
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
            style={[panStyle, styles.circle, { opacity: stateDrag.opacity }]}
          />
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
        <Draggable />
        <Draggable />
        <Draggable />
        <Draggable />
      </View>

      <View style={styles.response}>
        <Text>Arrastra aquí una opción</Text>
      </View>
    </View>
  )
}

const getStyles = theme => StyleSheet.create({
  mainContainer: {
    width: wp('72%'),
    height: hp('25%')
  },
  response: {
    top: hp('12%'),
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('15%'),

    borderRadius: wp('2%'),
    shadowColor: '#454547',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1.4
  },
  itemDrag: {
    width: wp('18%'),
    zIndex: 9999,
    alignItems: 'center'
  },
  circle: {
    backgroundColor: 'skyblue',
    width: 30 * 2,
    height: 30 * 2,
    borderRadius: 30
  },
  row: {
    flexDirection: 'row'
  }
})

export default DragAndDrop
