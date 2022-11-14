import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import useStatus from 'hooks/useStatus'
import useFetch from 'hooks/useFetch'

import { randomNum } from 'utils'

const useSurvey = () => {
  const [count, setCount] = useState(0)
  const [questions, setQuestions] = useState([])

  const { status, setStatus } = useStatus()
  const { sendFetch } = useFetch()
  const token = useSelector(state => state.user.token)

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
    questions,
    count,
    status,
    MAX_QUESTIONS,
    controllerCount
  }
}

export default useSurvey
