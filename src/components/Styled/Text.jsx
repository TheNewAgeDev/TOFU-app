import { Text, StyleSheet } from 'react-native'

import useTheme from 'hooks/useTheme'

const StyledText = ({ children }) => {
  const { styles } = useTheme(getStyles)

  return (
    <Text style={styles.container}>
      {children}
    </Text>
  )
}

const getStyles = theme => StyleSheet.create({
  container: {
    color: theme.colors.tertiary
  }
})

export default StyledText
