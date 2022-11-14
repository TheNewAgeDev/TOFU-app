import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import useTheme from 'hooks/useTheme'
import useModal from 'hooks/useModal'
import { wp, hp } from 'utils'

import StyledText from 'components/Styled/Text'

const Course = ({ course, style }) => {
  const { styles } = useTheme(getStyles)
  const { toggleModal } = useModal()
  const navigation = useNavigation()

  const handlePress = () => {
    toggleModal(true)
    navigation.navigate('survey', {
      course
    })
  }

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.container, style]}>
      <Image resizeMode='cover' source={{ uri: course.image }} style={styles.image} />
      <StyledText numberOfLines={1} style={styles.title}>{course.name}</StyledText>
    </TouchableOpacity>
  )
}

const getStyles = (theme, isDark) => {
  const { white, black } = theme.colors

  return StyleSheet.create({
    container: {
      backgroundColor: isDark ? black : white,
      borderRadius: wp('5%'),
      width: wp('40%'),
      height: hp('20%'),
      elevation: 2
    },
    image: {
      width: wp('40%'),
      borderTopLeftRadius: wp('5%'),
      borderTopRightRadius: wp('5%'),
      height: hp('15%')
    },
    title: {
      color: isDark ? white : black,
      paddingHorizontal: wp('2%'),
      marginTop: hp('1%'),
      textAlign: 'center'
    }
  })
}

export default Course
