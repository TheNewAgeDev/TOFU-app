import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import useSurvey from 'hooks/useSurvey'
import useModal from 'hooks/useModal'

import QuestionCard from 'layouts/question'

const Survey = ({ route }) => {
  const navigation = useNavigation()

  const [answer, setAnswer] = useState(null)
  const { questions, count, controllerCount, status, MAX_QUESTIONS } = useSurvey()
  const { course } = route.params

  const { Modal } = useModal()

  useEffect(() => {
    navigation.setOptions({ title: course.name })
  }, [])

  const handleSubmit = async () => {
    setAnswer('')
    controllerCount.nextQuestion()
  }

  const questionNow = questions.find(q => q.num === count)

  return (
    <>
      <Modal />

      <QuestionCard
        MAX_QUESTIONS={MAX_QUESTIONS}
        num={count}
        setNum={controllerCount}
        answer={answer}
        setAnswer={setAnswer}
        question={questionNow}
        handleSubmit={handleSubmit}
        course={course}
        status={status}
        numRandom={questionNow ? questionNow.numRandom : 0}
      />
    </>
  )
}

export default Survey
