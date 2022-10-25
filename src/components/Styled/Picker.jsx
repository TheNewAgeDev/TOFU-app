import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { FontAwesome } from '@expo/vector-icons'

import useTheme from 'hooks/useTheme'
import { wp, hp } from 'utils'

import Text from 'components/Styled/Text'

const StyledInput = ({ label, icon, options = [], style, ...restOfProps }) => {
  const { styles } = useTheme(getStyles)
  const [selectedLanguage, setSelectedLanguage] = useState('xd')

  const ButtonStyles = [
    styles.container,
    style
  ]

  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={ButtonStyles}>
        {icon && <FontAwesome style={styles.icon} name={icon} size={24} color='black' />}
        <Picker
          style={styles.input}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
          {...restOfProps}
        >
          {options.map(option => <Picker.Item key={option.id} label={option.label} value={option.value} />)}
        </Picker>
      </View>
    </>
  )
}

const getStyles = (theme, isDark) => {
  const { white, black, backgroundPrimary } = theme.colors

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',

      backgroundColor: backgroundPrimary,
      paddingLeft: wp('3%'),
      borderRadius: 50
    },
    label: {
      color: white,
      marginBottom: hp('0.8%'),
      marginLeft: wp('5%')
    },
    icon: {
      marginLeft: wp('2%'),
      marginRight: wp('3%'),
      color: isDark ? white : black
    },
    input: {
      color: isDark ? white : black,
      width: wp('50%'),
      height: hp('6%'),
      paddingLeft: 10,

      borderBottomRightRadius: 50,
      borderTopRightRadius: 50,
      borderLeftColor: isDark ? white : black,
      borderLeftWidth: 0.2
    }
  })
}

export default StyledInput