import { TouchableOpacity, StyleSheet, Image } from 'react-native'

import useTheme from 'hooks/useTheme'
import { wp, hp } from 'utils'

import StyledText from 'components/Styled/Text'

const Course = ({ course }) => {
  const { styles } = useTheme(getStyles)

  return (
    <TouchableOpacity style={styles.container}>
      <Image resizeMode='cover' source={{ uri: course.image }} style={styles.image} />
      <StyledText style={styles.title}>{course.name}</StyledText>
    </TouchableOpacity>
  )
}

const getStyles = (theme, isDark) => {
  const { white, black } = theme.colors

  return StyleSheet.create({
    container: {
      backgroundColor: isDark ? black : white,
      borderColor: isDark ? white : black,
      borderWidth: 0.8,
      borderRadius: wp('5%'),
      width: wp('40%'),
      height: hp('20%')
    },
    image: {
      width: wp('39.7%'),
      borderTopLeftRadius: wp('5%'),
      borderTopRightRadius: wp('5%'),
      height: hp('15%')
    },
    title: {
      color: isDark ? white : black,
      marginTop: hp('1%'),
      textAlign: 'center'
    }
  })
}

export default Course
