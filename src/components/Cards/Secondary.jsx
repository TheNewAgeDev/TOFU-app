import { View, StyleSheet } from 'react-native'

import useTheme from 'hooks/useTheme'
import { wp, hp } from 'utils'

const CardMain = ({ children, style, ...restOfProps }) => {
  const { styles } = useTheme(getStyles)

  const ContentStyle = [
    styles.container,
    style
  ]

  return (
    <View style={ContentStyle} {...restOfProps}>
      {children}
    </View>
  )
}

const getStyles = theme => StyleSheet.create({
  container: {
    borderRadius: wp('2%'),
    padding: hp('4%'),
    shadowColor: '#BCB9B9',
    shadowOffset: { width: 10, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2
  }
})

export default CardMain
