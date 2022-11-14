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
    }
  }
})

export const { setCourses } = coursesSlice.actions

export default coursesSlice.reducer
