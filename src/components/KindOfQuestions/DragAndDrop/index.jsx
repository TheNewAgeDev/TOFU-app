import { useRef, useState } from 'react'
import { StyleSheet, View, Animated } from 'react-native'

import Text from 'components/Styled/Text'
import DraggableItems from './DraggableItems'

import useTheme from 'hooks/useTheme'
import { wp, hp } from 'utils'

const DragAndDrop = ({ setAnswer }) => {
  const { styles } = useTheme(getStyles)
  const [keyPress, setKeyPress] = useState(null)
  const pan = useRef()

  const handlePress = (value) => {
    setAnswer(value)
    setKeyPress(value)
  }

  return (
    <View style={styles.mainContainer}>
      <DraggableItems pan={pan} styles={styles} keyPress={keyPress} handlePress={handlePress} />

      <Animated.View ref={pan} style={styles.response}>
        <Text style={styles.textResponse}>{keyPress ? '' : 'Arrastra aquí una opción'}</Text>
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
