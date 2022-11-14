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

const QuestionCard = ({ num, course, question, setAnswer, numRandom, status, ...restOfProps }) => {
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
          {question}
        </StyledText>

        <GetTypeQuestion numRandom={numRandom} setAnswer={setAnswer} />
      </Card>

      <ControlSurvey num={num} {...restOfProps} />
    </View>
  )
}

const GetTypeQuestion = ({ numRandom, setAnswer }) => {
  if (numRandom === 1) return <SmileyFaces setAnswer={setAnswer} />
  if (numRandom === 2) return <LittleStars setAnswer={setAnswer} />
  if (numRandom === 3) return <NumericalRange setAnswer={setAnswer} />
  if (numRandom === 4) return <SlideBar setAnswer={setAnswer} />
  if (numRandom === 5) return <DragAndDrop setAnswer={setAnswer} />

  return null
}

const ControlSurvey = ({ num, answer, handleSubmit, setNum, MAX_QUESTIONS }) => {
  const { styles } = useTheme(getStyles)

  return (
    <>
      <View style={styles.menu}>
        <Button
          onPress={() => setNum.prevQuestion()}
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
          Siguiente
        </Button>
      </View>
      <StyledText style={styles.progress}>PROGRESO GUARDADO</StyledText>
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
    fontSize: hp('2.5%'),
    textAlign: 'center',
    marginBottom: hp('3%')
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
