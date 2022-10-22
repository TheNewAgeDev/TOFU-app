import { TouchableOpacity, StyleSheet } from 'react-native'

import useTheme from 'hooks/useTheme'

import Text from 'components/Styled/Text'

const StyledButton = ({ children }) => {
  const { styles } = useTheme(getStyles)

  return (
    <TouchableOpacity style={styles.container}>
      <Text>{children}</Text>
    </TouchableOpacity>
  )
}

const getStyles = theme => StyleSheet.create({
  container: {
    color: theme.colors.tertiary
  }
})

export default StyledButton
