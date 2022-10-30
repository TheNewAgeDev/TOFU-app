import { configureStore } from '@reduxjs/toolkit'

import userReducer from 'features/userSlice'
import settingReducer from 'features/settingSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    setting: settingReducer
  }
})

export default store
