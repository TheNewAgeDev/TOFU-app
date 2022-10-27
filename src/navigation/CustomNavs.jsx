import { useState } from 'react'
import { View, StyleSheet, Pressable, Modal } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import StyledText from 'components/Styled/Text'
import Unipaz from 'components/Icons/unipazLogo'

import useTheme from 'hooks/useTheme'
import { wp, hp } from 'utils'

const HeaderTitle = ({ style }) => {
  const { styles } = useTheme(headerStyles)
  const [modalVisible, setModalConfig] = useState(false)

  const containerStyles = [
    styles.container,
    style
  ]

  const USER = 'usuario'

  return (
    <View style={containerStyles}>
      <Modal
        animationType='slide'
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalConfig(!modalVisible)
        }}
      >
        <View>
          <View>
            <StyledText>Hello World!</StyledText>
            <Pressable
              onPress={() => setModalConfig(!modalVisible)}
            >
              <StyledText>Hide Modal</StyledText>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Unipaz theme={styles.logoTheme} width={wp('8%')} height={hp('8%')} />
      <StyledText style={styles.styleText}>Bienvenido, {USER}</StyledText>
      <Pressable onPress={() => setModalConfig(!modalVisible)}>
        <FontAwesome style={styles.icon} name='navicon' size={24} color='black' />
      </Pressable>
    </View>
  )
}

const headerStyles = (theme, isDark) => {
  const { white, black } = theme.colors

  return StyleSheet.create({
    container: {
      flex: 1,
      paddingRight: wp('3.5%'),
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
