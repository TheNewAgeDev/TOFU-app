import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import useStatus from 'hooks/useStatus'
import useFetch from 'hooks/useFetch'

import { randomNum } from 'utils'

const useSurvey = (course) => {
  const [count, setCount] = useState(0)
  const [questions, setQuestions] = useState([])

  const { status, setStatus } = useStatus()
  const { sendFetch } = useFetch()

  const token = useSelector(state => state.user.token)
  const question = questions.find(q => q.num === count)

  useEffect(() => {
    setStatus('loading')

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

      if (data.length > 0) setCount(1)
      setStatus(data.length > 0 ? '' : 'notFound')
    }

    getQuestions()
  }, [])

  const saveAnswer = async ({ answer }) => {
    setStatus('sendAnswer')
    sendFetch({
      route: '/answer',
      token,
      bodyJson: {
        group_id: course.id,
        question_id: question ? question.id : 0,
        value: parseInt(answer)
      }
    }).then(() => {
      setStatus('')
    })

    return answer
  }

  const MAX_QUESTIONS = questions.length
  const controllerCount = {
    nextQuestion: () => {
      setCount(prev => {
        if (prev >= MAX_QUESTIONS) return MAX_QUESTIONS
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
