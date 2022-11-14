import { StyleSheet, View, ActivityIndicator, FlatList } from 'react-native'

import Course from 'components/Cards/Course'
import StyledText from 'components/Styled/Text'

import useCourses from 'hooks/useCourses'
import useTheme from 'hooks/useTheme'
import useModal from 'hooks/useModal'
import { wp, hp } from 'utils'

const CoursesLayout = ({ state }) => {
  const { styles } = useTheme(getStyles)
  const { Modal } = useModal()
  const { courses, isLoading } = useCourses(state)

  return (
    <>
      <Modal />

      {
        isLoading
          ? <View style={styles.contentNotFound}><ActivityIndicator size='large' /></View>
          : courses.length < 1
            ? (
              <View style={styles.contentNotFound}>
                <StyledText style={styles.textNotFound}>No hay cursos en esta sección ^-^</StyledText>
              </View>
              )
            : <FlatList
                style={styles.container}
                data={courses}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item }) => <Course style={styles.course} course={item} />}
                numColumns={2}
              />
      }
    </>
  )
}

export const getStyles = theme => StyleSheet.create({
  container: {
    paddingTop: hp('0.4%'),
    paddingHorizontal: wp('6%')
  },
  contentNotFound: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('50%')
  },
  textNotFound: {
    fontSize: hp('2%')
  },
  course: {
    marginVertical: hp('2%')
  }
})

export default CoursesLayout
