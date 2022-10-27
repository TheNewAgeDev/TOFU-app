import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'

import StyledText from 'components/Styled/Text'
import Settings from 'components/Cards/Settings'
import Unipaz from 'components/Icons/unipazLogo'

import useTheme from 'hooks/useTheme'
import useModal from 'hooks/useModal'
import { wp, hp } from 'utils'

const HeaderTitle = ({ style }) => {
  const { styles } = useTheme(headerStyles)
  const { Modal, setVisibleModal } = useModal(Settings)

  const containerStyles = [
    styles.container,
    style
  ]

  const USER = 'usuario'

  return (
    <View style={containerStyles}>
      <Modal />

      <Unipaz theme={styles.logoTheme} width={wp('8%')} height={hp('8%')} />
      <StyledText style={styles.styleText}>Bienvenido, {USER}</StyledText>
      <TouchableOpacity onPress={setVisibleModal}>
        <EvilIcons style={styles.icon} name='navicon' size={40} color='black' />
      </TouchableOpacity>
    </View>
  )
}

const headerStyles = (theme, isDark) => {
  const { white, black } = theme.colors

  return StyleSheet.create({
    container: {
      flex: 1,
      paddingRight: wp('2%'),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logoTheme: {
      letter: isDark ? white : black,
      blue: isDark ? '#ffffff' : '#243673',
      green: isDark ? '#ffffff' : '#129740'
    },
    icon: {
      color: isDark ? white : black
    }
  })
}

export const screenOptions = theme => ({
  headerTitle: (props) => <HeaderTitle {...props} />,
  headerShadowVisible: true
})

export const screenOptionsTab = theme => ({
  headerTitle: (props) => <HeaderTitle {...props} style={{ width: wp('95%') }} />,
  tabBarShowLabel: true, // Ocultar Labels xD
  tabBarHideOnKeyboard: true,
  tabBarItemStyle: {
    borderRadius: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('1%')
  },
  tabBarActiveBackgroundColor: theme.colors.primary,
  tabBarStyle: {
    backgroundColor: theme.colors.backgroundSecondary,
    padding: wp('3%'),
    paddingHorizontal: wp('5%'),
    height: hp('7%'),
    borderTopLeftRadius: hp('2%'),
    borderTopRightRadius: hp('2%')
  },
  tabBarLabelPosition: 'beside-icon',
  tabBarLabelStyle: {
    marginLeft: 0,
    fontSize: wp('3.9%')
  },
  tabBarIconStyle: { display: 'none' }
})
