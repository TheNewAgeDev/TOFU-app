import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { EvilIcons } from '@expo/vector-icons'

import StyledText from 'components/Styled/Text'
import Unipaz from 'components/Icons/unipazLogo'

import useTheme from 'hooks/useTheme'
import useModal from 'hooks/useModal'
import { wp, hp } from 'utils'

const HeaderTitle = ({ style }) => {
  const { styles } = useTheme(headerStyles)
  const name = useSelector(state => state.user.name)
  const { Modal, toggleModal } = useModal()

  const containerStyles = [
    styles.container,
    style
  ]

  return (
    <View style={containerStyles}>

      <Unipaz theme={styles.logoTheme} width={wp('8%')} height={hp('8%')} />
      <View style={styles.contentName}>
        <StyledText style={styles.styleText}>Bienvenido, </StyledText>
        <StyledText style={styles.name}>{name}</StyledText>
      </View>

      <TouchableOpacity onPress={() => { toggleModal() }}>
        <EvilIcons style={styles.icon} name='navicon' size={40} color='black' />
      </TouchableOpacity>

      <Modal />
    </View>
  )
}

const headerStyles = (theme, isDark) => {
  const { white, black } = theme.colors

  return StyleSheet.create({
    container: {
      flex: 1,
      paddingRight: wp('6%'),
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
    },
    contentName: {
      flexDirection: 'row'
    },
    name: {
      color: theme.colors.primary
    }
  })
}

export const screenOptions = theme => ({
  headerTitle: (props) => <HeaderTitle {...props} />,
  headerShadowVisible: true,
  headerBackVisible: false
})

export const screenOptionsTab = theme => ({
  headerTitle: (props) => <HeaderTitle {...props} />,
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
