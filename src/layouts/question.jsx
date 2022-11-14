import { View, StyleSheet, ActivityIndicator } from 'react-native'

import useTheme from 'hooks/useTheme'
import { wp, hp, setOpacity } from 'utils'

import Card from 'components/Cards/Secondary'
import StyledText from 'components/Styled/Text'
import Button from 'components/Styled/Button'

import SmileyFaces from 'components/KindOfQuestions/SmileyFaces'
import LittleStars from 'components/KindOfQuestions/LittleStars'
import NumericalRange from 'components/KindOfQuestions/NumericalRange'
import SlideBar from 'components/KindOfQuestions/SlideBar'
import DragAndDrop from 'components/KindOfQuestions/DragAndDrop'

const QuestionCard = ({ num, course, question, answer, setAnswer, numRandom, status, ...restOfProps }) => {
  const { styles } = useTheme(getStyles)

  if (status === 'loading') {
    return (
      <Card style={[styles.content, { height: hp('88%') }]}>
        <ActivityIndicator size='large' />
      </Card>
    )
  }

  return (
    <View>
      <StyledText style={styles.teacherName}>{course.teacher}</StyledText>

      <Card style={styles.content}>
        <StyledText style={styles.textQuestion}>
          {question && question.body}
        </StyledText>

        <GetTypeQuestion numRandom={numRandom} answer={answer} setAnswer={setAnswer} />
      </Card>

      <ControlSurvey status={status} num={num} answer={answer} {...restOfProps} />
    </View>
  )
}

const GetTypeQuestion = ({ numRandom, answer, setAnswer }) => {
  if (numRandom === 1) return <SmileyFaces answer={answer} setAnswer={setAnswer} />
  if (numRandom === 2) return <LittleStars answer={answer} setAnswer={setAnswer} />
  if (numRandom === 3) return <NumericalRange answer={answer} setAnswer={setAnswer} />
  if (numRandom === 4) return <SlideBar answer={answer} setAnswer={setAnswer} />
  if (numRandom === 5) return <DragAndDrop answer={answer} setAnswer={setAnswer} />

  return null
}

const ControlSurvey = ({ num, answer, handleSubmit, handlePrev, status, MAX_QUESTIONS }) => {
  const { styles } = useTheme(getStyles)

  return (
    <>
      <View style={styles.menu}>
        <Button
          onPress={handlePrev}
          disabled={num === 1}
          iconLeft='arrow-left'
          style={num === 1 ? styles.disableButtonBefore : styles.buttonBefore}
        >
          Anterior
        </Button>
        <StyledText style={styles.counter}>{num}/{MAX_QUESTIONS}</StyledText>
        <Button
          disabled={!answer}
          onPress={handleSubmit}
          iconRight='arrow-right'
        >
          {num === MAX_QUESTIONS ? 'Finalizar' : 'Siguiente'}
        </Button>
      </View>
      <StyledText style={styles.progress}>
        {status === 'sendAnswer' ? <ActivityIndicator size='small' /> : 'PROGRESO GUARDADO'}
      </StyledText>
    </>
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
  textQuestion: {
    fontSize: hp('3%'),
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: hp('4%')
  },
  content: {
    height: hp('74%'),

    marginVertical: hp('1.5%'),
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
