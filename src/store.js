import { configureStore } from '@reduxjs/toolkit'

import userReducer from 'features/userSlice'
import settingReducer from 'features/settingSlice'
import surveyReducer from 'features/surveySlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    setting: settingReducer,
    survey: surveyReducer
  }
})

export default store
