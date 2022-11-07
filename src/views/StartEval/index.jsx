import { StyleSheet, FlatList } from 'react-native'

import useCourses from 'hooks/useCourses'
import useTheme from 'hooks/useTheme'
import useModal from 'hooks/useModal'
import { wp, hp } from 'utils'

import Course from 'components/Cards/Course'

const Home = () => {
  const { styles } = useTheme(getStyles)
  const { Modal } = useModal()
  const { courses } = useCourses('start')

  return (
    <>
      <Modal />

      <FlatList
        style={styles.container}
        data={courses}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => <Course style={styles.course} course={item} />}
        numColumns={2}
      />
    </>
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
