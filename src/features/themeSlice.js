import { createSlice } from '@reduxjs/toolkit'
import { Appearance } from 'react-native'

const initialState = {
  theme: Appearance.getColorScheme()
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload
    }
  }
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer
