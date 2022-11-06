import { Text, StyleSheet } from 'react-native'

import useTheme from 'hooks/useTheme'

const StyledText = ({ children, style, type }) => {
  const { styles } = useTheme(getStyles)

  const textStyles = [
    styles.container,
    type === 'error' && styles.error,
    style
  ]

  return (
    <Text style={textStyles}>
      {children}
    </Text>
  )
}

const getStyles = theme => StyleSheet.create({
  container: {
    color: theme.colors.tertiary
  },
  error: {
    color: theme.colors.error
  }
})

export default StyledText
