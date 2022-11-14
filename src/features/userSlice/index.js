import { createSlice } from '@reduxjs/toolkit'

import { login, logout, removeSelectProgram, selectProgram, verify } from './thunks'

const initialState = {
  isAuth: false,
  token: {
    access_token: null,
    token_type: null
  },
  selectProgram: null,

  id: '',
  name: '',
  programs: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      const { id, name, programs } = action.payload

      state.id = id
      state.name = name
      state.programs = programs
    }
  },
  extraReducers: (builder) => {
    builder.addCase(verify.fulfilled, (state, action) => {
      const { isValidate, saveToken, selectProgram, user } = action.payload

      state.isAuth = isValidate
      state.token = isValidate ? saveToken : {}
      state.selectProgram = selectProgram
      if (user) {
        state.name = user.name
        state.programs = user.programs
      }
    })

    builder.addCase(login.fulfilled, (state, action) => {
      const { saveToken } = action.payload

      state.isAuth = true
      state.token = saveToken
    })

    builder.addCase(logout.fulfilled, (state) => {
      state.isAuth = false
      state.token = null
      state.selectProgram = null
    })

    builder.addCase(selectProgram.fulfilled, (state, action) => {
      const { program } = action.payload

      state.selectProgram = program
    })

    builder.addCase(removeSelectProgram.fulfilled, (state) => {
      state.selectProgram = null
    })
  }
})

export const { setUserInfo } = userSlice.actions

export default userSlice.reducer
