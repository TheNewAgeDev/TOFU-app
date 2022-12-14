import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import useSurvey from 'hooks/useSurvey'
import useModal from 'hooks/useModal'

import QuestionCard from 'layouts/question'

const Survey = ({ route }) => {
  const navigation = useNavigation()
  const course = useSelector(state => state.courses.coursesList.find(course => course.id === route.params.course.id))

  const [answer, setAnswer] = useState(null)
  const { question, saveAnswer, count, controllerCount, status, MAX_QUESTIONS } = useSurvey(course)

  const { Modal } = useModal()

  useEffect(() => {
    navigation.setOptions({ title: course.name })
  }, [])

  const handleGoToHome = () => {
    navigation.navigate('ends')
  }

  const handleSubmit = async () => {
    const currentAnswer = course.answers.find(answer => answer.num === count)
    if (!currentAnswer || currentAnswer.value !== answer) saveAnswer({ answer })

    const nextAnswer = course.answers.find(answer => answer.num === (count + 1))
    setAnswer(nextAnswer ? nextAnswer.value : null)
    controllerCount.nextQuestion()
  }

  const handlePrev = async () => {
    const currentAnswer = course.answers.find(answer => answer.num === count)
    if (!currentAnswer || currentAnswer.value !== answer) saveAnswer({ answer })

    const prevAnswer = course.answers.find(answer => answer.num === (count - 1))
    setAnswer(prevAnswer ? prevAnswer.value : null)
    controllerCount.prevQuestion()
  }

  return (
    <>
      <Modal />

      <QuestionCard
        MAX_QUESTIONS={MAX_QUESTIONS}
        num={count}
        answer={answer}
        setAnswer={setAnswer}
        question={question}
        handleGoToHome={handleGoToHome}
        handlePrev={handlePrev}
        handleSubmit={handleSubmit}
        course={course}
        status={status}
        numRandom={question ? question.numRandom : 0}
      />
    </>
  )
}

export default Survey
