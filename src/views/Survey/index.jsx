import { useState } from 'react'
import { useSelector } from 'react-redux'

import useModal from 'hooks/useModal'

import QuestionCard from 'layouts/question'

const Survey = ({ route }) => {
  const [answer, setAnswer] = useState(null)

  const { course } = route.params
  const { count } = useSelector(state => state.survey)
  const { Modal } = useModal()

  return (
    <>
      <Modal />

      <QuestionCard
        num={count}
        setAnswer={setAnswer}
        question={answer}
        course={course}
      />
    </>
  )
}

export default Survey
