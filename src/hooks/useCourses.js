import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setCourses } from 'features/coursesSlice'

import useStatus from 'hooks/useStatus'
import useFetch from 'hooks/useFetch'

const useCourses = (stateCorses) => {
  const { sendFetch } = useFetch()
  const dispatch = useDispatch()
  const { status, setStatus } = useStatus()

  const user = useSelector(state => state.user)
  const courses = useSelector(state => state.courses.coursesList.map(course => {
    return {
      image: 'https://placehold.jp/3e3e41/ffffff/150x150.png',
      id: course.id,
      name: course.subject.name,
      teacher: course.professor.name,
      program: 'info',
      state: 'start'
    }
  }).filter(course => course.state === stateCorses))

  useEffect(() => {
    if (courses.length === 0) getCourses()
  }, [])

  const getCourses = async () => {
    setStatus('loading')
    const data = await sendFetch({
      route: '/group',
      method: 'GET',
      token: user.token
    })

    dispatch(setCourses(data))
    setStatus('')
  }

  return {
    courses,
    isLoading: status === 'loading'
  }
}

export default useCourses
