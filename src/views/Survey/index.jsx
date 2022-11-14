import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import useSurvey from 'hooks/useSurvey'
import useModal from 'hooks/useModal'

import QuestionCard from 'layouts/question'

const Survey = ({ route }) => {
  const navigation = useNavigation()
  const { course } = route.params

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
    saveAnswer({ answer })
    setAnswer(null)
    controllerCount.nextQuestion()
  }

  const handlePrev = async () => {
    setAnswer(null)
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
