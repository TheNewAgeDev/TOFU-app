import { View, StyleSheet } from 'react-native'

import useTheme from 'hooks/useTheme'
import { hp } from 'utils'

const CardMain = ({ children, ...restOfProps }) => {
  const { styles } = useTheme(getStyles)

  return (
    <View style={styles.container} {...restOfProps}>
      {children}
    </View>
  )
}

const getStyles = theme => StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundSecondary,
    borderRadius: 10,
    padding: hp('4%')
  }
})

export default CardMain
