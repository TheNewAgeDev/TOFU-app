import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import useSurvey from 'hooks/useSurvey'
import useModal from 'hooks/useModal'

import QuestionCard from 'layouts/question'

const Survey = ({ route }) => {
  const navigation = useNavigation()

  const [answer, setAnswer] = useState(null)
  const { count, controllerCount, MAX_QUESTIONS } = useSurvey()
  const { course } = route.params

  const { Modal } = useModal()

  useEffect(() => {
    navigation.setOptions({ title: course.name })
  }, [])

  return (
    <>
      <Modal />

      <QuestionCard
        MAX_QUESTIONS={MAX_QUESTIONS}
        num={count}
        setNum={controllerCount}
        setAnswer={setAnswer}
        question={answer}
        course={course}
      />
    </>
  )
}

export default Survey
