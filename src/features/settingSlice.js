import { createSlice } from '@reduxjs/toolkit'
import { Appearance } from 'react-native'

const initialState = {
  theme: Appearance.getColorScheme(),
  configModal: false
}

export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload
    },
    toggleConfig: (state) => {
      state.configModal = !state.configModal
    }
  }
})

export const { setTheme, toggleConfig } = settingSlice.actions

export default settingSlice.reducer
