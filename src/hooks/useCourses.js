import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setCourses } from 'features/coursesSlice'

import useStatus from 'hooks/useStatus'
import useFetch from 'hooks/useFetch'

const getCourses = async ({ dispatch, token, sendFetch, setStatus }) => {
  setStatus('loading')

  const data = await sendFetch({
    route: '/group',
    method: 'GET',
    token
  })

  const questions = await sendFetch({
    route: '/survey',
    method: 'GET',
    token
  })

  dispatch(
    setCourses(
      await Promise.all(
        data.map(async course => {
          const dataAnswers = await sendFetch({
            route: `/answer?group_id=${course.id}`,
            method: 'GET',
            token
          })

          const answers = dataAnswers.map((ans, i) => ({
            num: i + 1,
            value: ans.value
          }))

          let state = ''
          if (answers.length === 0 && questions.length > 0) state = 'start'
          if (questions.length === answers.length) state = 'end'
          if (state === '') state = 'continue'

          return {
            image: 'https://placehold.jp/3e3e41/ffffff/150x150.png',
            id: course.id,
            name: course.subject.name,
            teacher: course.professor.name,
            program: 'info',
            answers,
            state
          }
        })
      )
    )
  )

  setStatus('')
}

const useCourses = (stateCorses) => {
  const { sendFetch } = useFetch()
  const dispatch = useDispatch()
  const { status, setStatus } = useStatus()

  const token = useSelector(state => state.user.token)
  const courses = useSelector(state => state.courses.coursesList)

  useEffect(() => {
    if (courses.length === 0) {
      getCourses({
        dispatch,
        token,
        sendFetch,
        setStatus
      })
    }
  }, [])

  return {
    courses: courses.filter(course => course.state === stateCorses),
    isLoading: status === 'loading'
  }
}

export default useCourses
