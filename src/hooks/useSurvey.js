import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { updateAnswer } from 'features/coursesSlice'
import useStatus from 'hooks/useStatus'
import useFetch from 'hooks/useFetch'

import { randomNum } from 'utils'

const useSurvey = (course) => {
  const [count, setCount] = useState(0)
  const [questions, setQuestions] = useState([])
  const dispatch = useDispatch()

  const { status, setStatus } = useStatus()
  const { sendFetch } = useFetch()

  const token = useSelector(state => state.user.token)
  const question = questions.find(q => q.num === count)
  const MAX_QUESTIONS = questions.length

  useEffect(() => {
    setStatus(prev => prev === 'endSurvey' ? 'endSurvey' : 'loading')

    const getQuestions = async () => {
      const data = await sendFetch({
        route: '/survey',
        method: 'GET',
        token
      })

      setQuestions(data.map((question, i) => ({
        id: question.id,
        body: question.body,
        num: i + 1,
        numRandom: randomNum(1, 5)
      })))

      const nextQuestion = course.answers.length + 1

      if (nextQuestion > data.length) setStatus('endSurvey')
      if (data.length > 0) setCount(nextQuestion)
      setStatus(prev => prev === 'endSurvey' ? 'endSurvey' : '')
    }

    getQuestions()
  }, [])

  const saveAnswer = async ({ answer }) => {
    setStatus(prev => prev === 'endSurvey' ? 'endSurvey' : 'sendAnswer')
    sendFetch({
      route: '/answer',
      token,
      bodyJson: {
        group_id: course.id,
        question_id: question ? question.id : 0,
        value: parseInt(answer)
      }
    }).then(() => {
      setStatus(prev => prev === 'endSurvey' ? 'endSurvey' : '')
      dispatch(updateAnswer({
        groupId: course.id,
        questionId: question.id,
        value: parseInt(answer),
        maxQuestions: MAX_QUESTIONS
      }))
    })

    return answer
  }

  const controllerCount = {
    nextQuestion: () => {
      setCount(prev => {
        if (prev >= MAX_QUESTIONS) {
          setStatus('endSurvey')
          return MAX_QUESTIONS
        }

        return prev + 1
      })
    },
    prevQuestion: () => {
      setCount(prev => {
        if (prev <= 1) return 1
        return prev - 1
      })
    }
  }

  return {
    question,
    count,
    MAX_QUESTIONS,
    controllerCount,
    saveAnswer,
    status
  }
}

export default useSurvey
