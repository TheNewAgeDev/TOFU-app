import { createAsyncThunk } from '@reduxjs/toolkit'
import useStorage from 'hooks/useStorage'

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
