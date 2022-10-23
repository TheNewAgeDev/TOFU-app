import { View, StyleSheet } from 'react-native'

import useTheme from 'hooks/useTheme'
import { wp, hp } from 'utils'

import Unipaz from 'components/Icons/unipaz'

const unipazCard = ({ CardForm }) => {
  const { styles } = useTheme(getStyles)

  return (
    <View style={styles.container}>
      <Unipaz style={styles.logoStyles} theme={styles.logoTheme} width={wp('40%')} height={hp('30%')} />

      <CardForm />
    </View>
  )
}

const getStyles = (theme, isDark) => StyleSheet.create({
  container: {
    padding: hp('4%'),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoTheme: {
    letter: isDark ? theme.colors.white : theme.colors.black,
    blue: isDark ? '#ffffff' : '#243673',
    green: isDark ? '#ffffff' : '#129740'
  },
  logoStyles: {
    marginBottom: hp('8%')
  }
})

export default unipazCard
