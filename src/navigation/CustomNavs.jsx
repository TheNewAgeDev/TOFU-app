import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { EvilIcons } from '@expo/vector-icons'

import StyledText from 'components/Styled/Text'
import Unipaz from 'components/Icons/unipazLogo'

import useTheme from 'hooks/useTheme'
import useModal from 'hooks/useModal'
import { wp, hp } from 'utils'

const DEFAULT_TITLE = 'Evaluación Docente'

const HeaderTitle = ({ children }) => {
  const { styles } = useTheme(headerStyles)
  const name = useSelector(state => state.user.name)
  const { toggleModal } = useModal()

  const isCustomTitle = !children.endsWith(DEFAULT_TITLE)

  return (
    <View style={styles.container}>
      <Unipaz theme={styles.logoTheme} width={wp('10%')} height={hp('8%')} />

      <View style={styles.contentName}>
        {
          isCustomTitle
            ? (
              <StyledText style={styles.styleText}>{children}</StyledText>
              )
            : (
              <>
                <StyledText style={styles.styleText}>Bienvenido, </StyledText>
                <StyledText style={styles.name}>{name}</StyledText>
              </>
              )
        }
      </View>

      <TouchableOpacity onPress={() => { toggleModal() }}>
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
      color: theme.colors.primary,
      fontSize: hp('2.2%')
    },
    styleText: {
      fontSize: hp('2.2%')
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
    borderRadius: wp('5%'),
    height: hp('5%'),
    margin: 0,
    padding: 0,
    paddingBottom: hp('0.3%'),
    marginBottom: hp('1%')
  },
  tabBarActiveBackgroundColor: theme.colors.primary,
  tabBarStyle: {
    backgroundColor: theme.colors.backgroundSecondary,
    padding: hp('1%'),
    paddingHorizontal: wp('3%'),
    height: hp('7%'),
    borderTopLeftRadius: hp('2%'),
    borderTopRightRadius: hp('2%'),
    elevation: 2
  },
  tabBarLabelPosition: 'beside-icon',
  tabBarLabelStyle: {
    marginLeft: 0,
    fontSize: wp('3.9%')
  },
  tabBarIconStyle: { display: 'none' }
})
