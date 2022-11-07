import { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import useTheme from 'hooks/useTheme'
import { nextCount, prevCount } from 'features/surveySlice'
import { wp, hp, setOpacity } from 'utils'

import Card from 'components/Cards/Secondary'
import StyledText from 'components/Styled/Text'
import Button from 'components/Styled/Button'

import LittleStars from 'components/KindOfQuestions/LittleStars'

const QuestionCard = ({ num, course, question }) => {
  const navigation = useNavigation()
  const { styles } = useTheme(getStyles)
  const dispatch = useDispatch()

  useEffect(() => {
    navigation.setOptions({ title: course.name })
  }, [])

  const handlePrev = () => {
    dispatch(prevCount())
  }

  const handleNext = () => {
    dispatch(nextCount())
  }

  return (
    <View>
      <StyledText style={styles.teacherName}>{course.teacher}</StyledText>

      <Card style={styles.content}>
        <StyledText>{question.description}</StyledText>

        <LittleStars />
      </Card>

      <View style={styles.menu}>
        <Button
          onPress={handlePrev}
          disabled={num === 1}
          iconLeft='arrow-left'
          style={num === 1 ? styles.disableButtonBefore : styles.buttonBefore}
        >
          Anterior
        </Button>
        <StyledText style={styles.counter}>{num}/26</StyledText>
        <Button
          onPress={handleNext}
          iconRight='arrow-right'
        >
          Siguiente
        </Button>
      </View>
      <StyledText style={styles.progress}>PROGRESO GUARDADO</StyledText>
    </View>
  )
}

const getStyles = theme => StyleSheet.create({
  teacherName: {
    color: theme.colors.primary,
    fontSize: hp('2.3%'),
    fontWeight: '600',
    textAlign: 'center',
    marginTop: hp('1.5%')
  },
  content: {
    marginVertical: hp('1.5%'),
    height: hp('74%'),
    marginHorizontal: wp('5%')
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  counter: {
    marginHorizontal: wp('3%')
  },
  buttonBefore: {
    backgroundColor: theme.colors.backgroundSecondary
  },
  disableButtonBefore: {
    backgroundColor: setOpacity(theme.colors.backgroundSecondary, 20)
  },
  progress: {
    marginTop: hp('1%'),
    textAlign: 'center',
    fontSize: hp('1.5%')
  }
})

export default QuestionCard
