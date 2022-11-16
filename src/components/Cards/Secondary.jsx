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

const getStyles = (theme, isDark) => StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: wp('2%'),
    padding: hp('4%'),
    shadowColor: isDark ? '#FFFFFF' : '#D0CBCB',
    backgroundColor: isDark ? '#222121' : theme.colors.backgroudPrimary,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: isDark ? 2 : 4
  }
})

export default CardMain
