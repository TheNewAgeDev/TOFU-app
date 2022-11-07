import { configureStore } from '@reduxjs/toolkit'

import userReducer from 'features/userSlice'
import coursesReducer from 'features/coursesSlice'
import surveyReducer from 'features/surveySlice'
import settingReducer from 'features/settingSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    setting: settingReducer,
    survey: surveyReducer,
    courses: coursesReducer
  }
})

export default store
