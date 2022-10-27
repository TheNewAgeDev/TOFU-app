import { View, StyleSheet } from 'react-native'

import StyledText from 'components/Styled/Text'

import { wp, hp } from 'utils'

const HeaderTitle = ({ children, style }) => {
  const containerStyles = [
    headerStyles.container,
    style
  ]

  return (
    <View style={containerStyles}>
      <StyledText style={headerStyles.styleText}>{children}</StyledText>
    </View>
  )
}

const headerStyles = StyleSheet.create({
  container: {
    width: wp('65%'),
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export const screenOptions = theme => ({
  headerTitle: (props) => <HeaderTitle {...props} />,
  headerShadowVisible: false
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
