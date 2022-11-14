import { createAsyncThunk } from '@reduxjs/toolkit'

import useFetch from 'hooks/useFetch'
import useStorage from 'hooks/useStorage'

export const verify = createAsyncThunk(
  'user/verify',
  async () => {
    const { getStorage } = useStorage()
    const { sendFetch } = useFetch()

    const saveToken = JSON.parse(await getStorage('@accessToken'))
    let selectProgram = await getStorage('@selectProgram')

    let isValidate = false
    let data = null

    if (saveToken) {
      data = await sendFetch({
        route: '/me',
        method: 'GET',
        token: saveToken
      })

      isValidate = !data.message
    }

    if (!isValidate) selectProgram = null

    return {
      isValidate,
      saveToken,
      selectProgram,
      user: data.message ? null : data
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

    await setStorage('@selectProgram', JSON.stringify(program))

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
