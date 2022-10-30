import { View, StyleSheet, FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import useTheme from 'hooks/useTheme'
import { wp, hp } from 'utils'

import Course from 'components/Cards/Course'

const Home = () => {
  const { styles } = useTheme(getStyles)
  const courses = useSelector(state => state.user.courses)

  return (
    <FlatList
      style={styles.container}
      data={courses}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      renderItem={({ item }) => <Course course={item} />}
      numColumns={2}
    />
  )
}

const getStyles = theme => StyleSheet.create({
  container: {
    paddingTop: hp('0.4%'),
    paddingHorizontal: wp('6%')
  },
  separator: {
    marginBottom: hp('4%')
  }
})

export default Home
