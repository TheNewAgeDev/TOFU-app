import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import useTheme from 'hooks/useTheme'
import useModal from 'hooks/useModal'

import Course from 'components/Cards/Course'
import { getStyles } from 'views/StartEval'

const Home = () => {
  const { styles } = useTheme(getStyles)
  const { Modal } = useModal()
  const courses = useSelector(state => state.user.courses.filter(course => course.state === 'continue'))

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

export default Home
