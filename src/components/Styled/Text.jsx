import { Text, StyleSheet } from 'react-native'

import useTheme from 'hooks/useTheme'

const StyledText = ({ children, style }) => {
  const { styles } = useTheme(getStyles)

  const textStyles = [
    styles.container,
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
  }
})

export default StyledText
