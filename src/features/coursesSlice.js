import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  coursesList: []
}

export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.coursesList = action.payload
    },
    updateAnswer: (state, action) => {
      const { groupId, questionId, value, maxQuestions } = action.payload

      const course = state.coursesList.find(course => course.id === groupId)
      const answer = course.answers.find(answer => answer.num === questionId)

      if (!answer) {
        course.answers.push({
          num: questionId,
          value
        })

        course.state = maxQuestions === course.answers.length ? 'end' : 'continue'
        return
      }

      answer.value = value
    }
  }
})

export const { setCourses, updateAnswer } = coursesSlice.actions

export default coursesSlice.reducer
