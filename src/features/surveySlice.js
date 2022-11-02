import { createSlice } from '@reduxjs/toolkit'

const NUM_OF_QUESTIONS = 26

const initialState = {
  count: 1,
  questions: [
    {
      id: 1,
      name: 'Pregunta 1',
      description: 'Esta es la pregunta 15'
    },
    {
      id: 2,
      name: 'Pregunta 2',
      description: 'Esta es la pregunta 14'
    },
    {
      id: 3,
      name: 'Pregunta 3',
      description: 'Esta es la pregunta 13'
    },
    {
      id: 4,
      name: 'Pregunta 4',
      description: 'Esta es la pregunta 12'
    },
    {
      id: 5,
      name: 'Pregunta 5',
      description: 'Esta es la pregunta 11'
    },
    {
      id: 6,
      name: 'Pregunta 6',
      description: 'Esta es la pregunta 10'
    },
    {
      id: 7,
      name: 'Pregunta 7',
      description: 'Esta es la pregunta 9'
    },
    {
      id: 8,
      name: 'Pregunta 8',
      description: 'Esta es la pregunta 8'
    }
  ]
}

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    resetCount: (state) => {
      state.count = 1
    },
    nextCount: (state) => {
      if (state.count < NUM_OF_QUESTIONS) state.count++
    },
    prevCount: (state) => {
      if (state.count > 1) state.count--
    }
  }
})

export const { resetCount, nextCount, prevCount } = surveySlice.actions

export default surveySlice.reducer
