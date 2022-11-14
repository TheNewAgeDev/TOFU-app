import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import useFetch from 'hooks/useFetch'

const useSurvey = () => {
  const [count, setCount] = useState(1)
  const [questions, setQuestions] = useState([])

  const { sendFetch } = useFetch()
  const token = useSelector(state => state.user.token)

  useEffect(() => {
    const getQuestions = async () => {
      const data = await sendFetch({
        route: '/survey',
        method: 'GET',
        token
      })

      setQuestions(data)
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
        if (prev <= 0) return 0
        return prev - 1
      })
    }
  }

  return {
    count,
    MAX_QUESTIONS,
    controllerCount
  }
}

export default useSurvey
