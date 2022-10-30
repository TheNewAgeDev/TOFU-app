import { StyleSheet, FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import useTheme from 'hooks/useTheme'
import { wp, hp } from 'utils'

import Course from 'components/Cards/Course'

const Home = () => {
  const { styles } = useTheme(getStyles)
  const courses = useSelector(state => state.user.courses.filter(course => course.state === 'start'))

  return (
    <FlatList
      style={styles.container}
      data={courses}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      renderItem={({ item }) => <Course style={styles.course} course={item} />}
      numColumns={2}
    />
  )
}

export const getStyles = theme => StyleSheet.create({
  container: {
    paddingTop: hp('0.4%'),
    paddingHorizontal: wp('6%')
  },
  course: {
    marginVertical: hp('2%')
  }
})

export default Home
