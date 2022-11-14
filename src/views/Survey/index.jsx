import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import useSurvey from 'hooks/useSurvey'
import useModal from 'hooks/useModal'

import QuestionCard from 'layouts/question'
import { randomNum } from 'utils'

const Survey = ({ route }) => {
  const navigation = useNavigation()

  const [answer, setAnswer] = useState(null)
  const [numRandom, setNumRandom] = useState(null)
  const { count, controllerCount, status, MAX_QUESTIONS } = useSurvey()
  const { course } = route.params

  const { Modal } = useModal()

  useEffect(() => {
    navigation.setOptions({ title: course.name })
    setNumRandom(randomNum(1, 5))
  }, [])

  const handleSubmit = async () => {
    setNumRandom(null)

    setAnswer('')
    controllerCount.nextQuestion()
    setNumRandom(randomNum(1, 5))
  }

  return (
    <>
      <Modal />

      <QuestionCard
        MAX_QUESTIONS={MAX_QUESTIONS}
        num={count}
        setNum={controllerCount}
        answer={answer}
        setAnswer={setAnswer}
        question={answer}
        handleSubmit={handleSubmit}
        course={course}
        status={status}
        numRandom={numRandom}
      />
    </>
  )
}

export default Survey
