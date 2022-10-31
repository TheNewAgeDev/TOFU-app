import { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import useTheme from 'hooks/useTheme'
import { wp, hp } from 'utils'

import Card from 'components/Cards/Secondary'
import StyledText from 'components/Styled/Text'

import Button from 'components/Styled/Button'

const QuestionCard = ({ num, course }) => {
  const navigation = useNavigation()
  const { styles } = useTheme(getStyles)

  useEffect(() => {
    navigation.setOptions({ title: course.name })
  }, [])

  return (
    <View>
      <StyledText style={styles.teacherName}>{course.teacher}</StyledText>

      <Card style={styles.content}>
        <StyledText>Prueba</StyledText>
      </Card>

      <View style={styles.menu}>
        <Button iconLeft='arrow-left' style={styles.buttonBefore}>Anterior</Button>
        <StyledText style={styles.counter}>{num}/26</StyledText>
        <Button iconRight='arrow-right'>Siguiente</Button>
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
  progress: {
    marginTop: hp('1%'),
    textAlign: 'center',
    fontSize: hp('1.5%')
  }
})

export default QuestionCard
