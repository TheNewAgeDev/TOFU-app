import { useSelector } from 'react-redux'

import useModal from 'hooks/useModal'

import QuestionCard from 'layouts/question'

const Survey = ({ route }) => {
  const { course } = route.params
  const { count, questions } = useSelector(state => state.survey)
  const { Modal } = useModal()

  return (
    <>
      <Modal />

      <QuestionCard num={count} question={questions[count - 1] || {}} course={course} />
    </>
  )
}

export default Survey
