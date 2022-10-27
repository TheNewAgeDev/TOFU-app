import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons'

import StyledText from 'components/Styled/Text'

import useTheme from 'hooks/useTheme'
import { wp, hp } from 'utils'

const ButtonLink = ({ icon, typeIcon, children }) => {
  const { styles } = useTheme(getStyles)

  const SIZE = 20

  const Icon = () => {
    return (
      <>
        {typeIcon === 'entypo' && <Entypo style={styles.icon} name={icon} size={SIZE} color='black' />}
        {typeIcon === 'ant-design' && <AntDesign style={styles.icon} name={icon} size={SIZE} color='black' />}
        {typeIcon === 'ionicons' && <Ionicons style={styles.icon} name={icon} size={SIZE} color='black' />}
      </>
    )
  }

  return (
    <TouchableOpacity style={styles.button}>
      {icon && <Icon />}
      <StyledText style={styles.text}>{children}</StyledText>
    </TouchableOpacity>
  )
}

const SettingsComponent = ({ modalVisible }) => {
  const { styles } = useTheme(getStyles)

  if (!modalVisible) return null

  return (
    <View style={styles.containerModal}>
      <ButtonLink typeIcon='entypo' icon='help-with-circle'>Ayuda</ButtonLink>
      <ButtonLink typeIcon='ant-design' icon='infocirlce'>Acerca de</ButtonLink>
      <ButtonLink typeIcon='ionicons' icon='md-moon'>Modo Oscuro</ButtonLink>
      <ButtonLink typeIcon='entypo' icon='log-out'>Cerrar Sesión</ButtonLink>
    </View>
  )
}

const getStyles = (theme, isDark) => {
  const { white, black } = theme.colors

  return StyleSheet.create({
    containerModal: {
      position: 'absolute',
      top: hp('7%'),
      right: 0,
      backgroundColor: theme.colors.backgroundPrimary,
      borderWidth: 0.5,
      borderColor: isDark ? white : black,
      borderRadius: 5,
      width: wp('50%')
    },
    icon: {
      color: isDark ? white : black
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: wp('1%'),
      height: hp('4%'),
      paddingLeft: hp('1.2%')
    },
    text: {
      marginLeft: wp('1.5%')
    }
  })
}

export default SettingsComponent
