import { View, TextInput, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import useTheme from 'hooks/useTheme'
import { wp, hp, setOpacity } from 'utils'

const StyledInput = ({ icon, placeholder }) => {
  const { styles } = useTheme(getStyles)

  return (
    <View style={styles.container}>
      {icon && <FontAwesome style={styles.icon} name={icon} size={24} color='black' />}
      <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={styles.placeholderTextColor} />
    </View>
  )
}

const getStyles = (theme, isDark) => {
  const { white, black, backgroundPrimary } = theme.colors

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',

      backgroundColor: backgroundPrimary,
      margin: hp('2%'),
      paddingLeft: wp('3%'),
      borderRadius: 50
    },
    icon: {
      marginLeft: wp('2%'),
      marginRight: wp('3%'),
      color: isDark ? white : black
    },
    input: {
      color: isDark ? white : black,
      width: wp('50%'),
      height: hp('7%'),
      paddingLeft: 10,

      borderBottomRightRadius: 50,
      borderTopRightRadius: 50,
      borderLeftColor: isDark ? white : black,
      borderLeftWidth: 0.2
    },
    placeholderTextColor: isDark ? setOpacity(white, 25) : setOpacity(black, 30)
  })
}

export default StyledInput
