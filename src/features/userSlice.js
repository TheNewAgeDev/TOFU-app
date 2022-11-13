import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import useStorage from 'hooks/useStorage'

const initialState = {
  isAuth: false,
  token: {
    access_token: null,
    token_type: null
  },
  selectProgram: null,

  id: '1509234566',
  name: 'Luis',
  lastname: 'Lopez Rueda',
  email: 'orlando.ospino@unipaz.edu.co',
  programs: [
    {
      id: 2,
      name: 'Ingenieria Informatica',
      slug: 'info'
    },
    {
      id: 3,
      name: 'Administración de Empresas',
      slug: 'adm'
    },
    {
      id: 4,
      name: 'MVZ',
      slug: 'mvz'
    }
  ],
  rol: 'student'
}

export const verify = createAsyncThunk(
  'user/verify',
  async () => {
    const { getStorage } = useStorage()
    const saveToken = JSON.parse(await getStorage('@accessToken'))
    let selectProgram = await getStorage('@selectProgram')

    const isValidate = !!(saveToken && saveToken.access_token && saveToken.token_type)
    if (!isValidate) selectProgram = null

    return {
      isValidate,
      saveToken,
      selectProgram
    }
  }
)

export const login = createAsyncThunk(
  'user/login',
  async (data) => {
    const { getStorage, setStorage } = useStorage()

    await setStorage('@accessToken', JSON.stringify(data))
    const saveToken = JSON.parse(await getStorage('@accessToken'))

    return {
      saveToken
    }
  }
)

export const logout = createAsyncThunk(
  'user/logout',
  async () => {
    const { removeStorage } = useStorage()

    await removeStorage('@accessToken')
    await removeStorage('@selectProgram')
  }
)

export const selectProgram = createAsyncThunk(
  'user/selectProgram',
  async (program) => {
    const { setStorage } = useStorage()

    await setStorage('@selectProgram', program)

    return {
      program
    }
  }
)

export const removeSelectProgram = createAsyncThunk(
  'user/changeSelectProgram',
  async () => {
    const { removeStorage } = useStorage()

    await removeStorage('@selectProgram')
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(verify.fulfilled, (state, action) => {
      const { isValidate, saveToken, selectProgram } = action.payload

      state.isAuth = isValidate
      state.token = isValidate ? saveToken : {}
      state.selectProgram = selectProgram
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

/* export const { } = userSlice.actions */

export default userSlice.reducer
