import { Text, StyleSheet } from 'react-native'

import useTheme from 'hooks/useTheme'

const StyledText = ({ children, style, type, numberOfLines, ...restOfProps }) => {
  const { styles } = useTheme(getStyles)

  const textStyles = [
    styles.container,
    type === 'error' && styles.error,
    numberOfLines && {
      flex: 1
    },
    style
  ]

  return (
    <Text style={textStyles} numberOfLines={numberOfLines} {...restOfProps}>
      {children}
    </Text>
  )
}

const getStyles = theme => StyleSheet.create({
  container: {
    color: theme.colors.tertiary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  error: {
    color: theme.colors.error
  }
})

export default StyledText
