import { View, StyleSheet } from 'react-native'

import useTheme from '#/hooks/useTheme'

const CardMain = ({ children }) => {
  const { styles } = useTheme(getStyles)

  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const getStyles = theme => StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundSecondary
  }
})

export default CardMain
