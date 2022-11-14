import { View, StyleSheet } from 'react-native'

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

const QuestionCard = ({ num, setNum, course, question, setAnswer, MAX_QUESTIONS }) => {
  const { styles } = useTheme(getStyles)

  return (
    <View>
      <StyledText style={styles.teacherName}>{course.teacher}</StyledText>

      <Card style={styles.content}>
        <StyledText style={styles.textQuestion}>
          {question}
        </StyledText>

        {
          num === 1
            ? <SmileyFaces setAnswer={setAnswer} />
            : num === 2
              ? <LittleStars setAnswer={setAnswer} />
              : num === 3
                ? <NumericalRange setAnswer={setAnswer} />
                : num === 4 ? <SlideBar setAnswer={setAnswer} /> : <DragAndDrop setAnswer={setAnswer} />
        }
      </Card>

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
          onPress={() => setNum.nextQuestion()}
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
