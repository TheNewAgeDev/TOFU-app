import { useSelector } from 'react-redux'

const useCourses = (stateCorses) => {
  const courses = useSelector(state => state.courses.filter(course => course.state === stateCorses))

  return {
    courses
  }
}

export default useCourses
