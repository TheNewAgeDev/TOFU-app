import { configureStore } from '@reduxjs/toolkit'

import userReducer from 'features/userSlice'
import coursesReducer from 'features/coursesSlice'
import settingReducer from 'features/settingSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    setting: settingReducer,
    courses: coursesReducer
  }
})

export default store
