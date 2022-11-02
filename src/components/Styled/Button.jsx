import { TouchableOpacity, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import useTheme from 'hooks/useTheme'
import { wp, hp, setOpacity } from 'utils'

import Text from 'components/Styled/Text'

const StyledButton = ({ children, iconLeft, iconRight, style, disabled, ...restOfProps }) => {
  const { styles } = useTheme(getStyles)

  const ButtonStyle = [
    styles.container,
    style,
    disabled && styles.disabled
  ]

  return (
    <TouchableOpacity disabled={disabled} style={ButtonStyle} {...restOfProps}>
      {iconLeft && <FontAwesome style={styles.iconLeft} name={iconLeft} size={20} color='black' />}
      <Text style={styles.text}>{children}</Text>
      {iconRight && <FontAwesome style={styles.iconRight} name={iconRight} size={20} color='black' />}
    </TouchableOpacity>
  )
}

const getStyles = theme => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('6%'),
    borderRadius: 50,
    backgroundColor: theme.colors.secondary,
    elevation: 4
  },
  disabled: {
    backgroundColor: setOpacity(theme.colors.primary, 20)
  },
  iconLeft: {
    color: theme.colors.white,
    marginRight: wp('2%')
  },
  iconRight: {
    color: theme.colors.white,
    marginLeft: wp('2%')
  },
  text: {
    color: theme.colors.white
  }
})

export default StyledButton
