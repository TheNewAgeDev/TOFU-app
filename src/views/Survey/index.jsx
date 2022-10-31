import useModal from 'hooks/useModal'

import QuestionCard from 'layouts/question'

const COUNT = 1

const Survey = ({ route }) => {
  const { course } = route.params
  const { Modal } = useModal()

  return (
    <>
      <Modal />

      <QuestionCard num={COUNT} course={course} />
    </>
  )
}

export default Survey
