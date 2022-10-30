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
    toggleConfig: (state, action) => {
      const { disabled } = action.payload
      state.configModal = disabled ? false : !state.configModal
    }
  }
})

export const { setTheme, toggleConfig } = settingSlice.actions

export default settingSlice.reducer
