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
  courses: [
    {
      id: 1,
      name: 'Matemáticas IV',
      image: 'https://placehold.jp/3e3e41/ffffff/150x150.png',
      teacher: 'Cipriano López Vides',
      program: 'info',
      state: 'start'
    },
    {
      id: 11,
      name: 'Matemáticas IV',
      image: 'https://placehold.jp/3e3e41/ffffff/150x150.png',
      teacher: 'Cipriano López Vides',
      program: 'info',
      state: 'start'
    },
    {
      id: 12,
      name: 'Matemáticas IV',
      image: 'https://placehold.jp/3e3e41/ffffff/150x150.png',
      teacher: 'Cipriano López Vides',
      program: 'info',
      state: 'start'
    },
    {
      id: 13,
      name: 'Matemáticas IV',
      image: 'https://placehold.jp/3e3e41/ffffff/150x150.png',
      teacher: 'Cipriano López Vides',
      program: 'info',
      state: 'start'
    },
    {
      id: 14,
      name: 'Matemáticas IV',
      image: 'https://placehold.jp/3e3e41/ffffff/150x150.png',
      teacher: 'Cipriano López Vides',
      program: 'info',
      state: 'start'
    },
    {
      id: 15,
      name: 'Matemáticas IV',
      image: 'https://placehold.jp/3e3e41/ffffff/150x150.png',
      teacher: 'Cipriano López Vides',
      program: 'info',
      state: 'start'
    },
    {
      id: 2,
      name: 'Base de Datos',
      image: 'https://placehold.jp/0a72b2/ffffff/150x150.png',
      teacher: 'Cipriano López Vides',
      program: 'info',
      state: 'continue'
    },
    {
      id: 3,
      name: 'Fisica II',
      image: 'https://placehold.jp/2a2c2d/ffffff/200x800.png',
      teacher: 'Cipriano López Vides',
      program: 'info',
      state: 'end'
    },
    {
      id: 4,
      name: 'Matemáticas IV',
      image: 'https://placehold.jp/3e3e41/ffffff/150x150.png',
      teacher: 'Cipriano López Vides',
      program: 'info',
      state: 'continue'
    },
    {
      id: 5,
      name: 'Base de Datos',
      image: 'https://placehold.jp/0a72b2/ffffff/150x150.png',
      teacher: 'Cipriano López Vides',
      program: 'info',
      state: 'end'
    },
    {
      id: 6,
      name: 'Fisica II',
      image: 'https://placehold.jp/2a2c2d/ffffff/200x800.png',
      teacher: 'Cipriano López Vides',
      program: 'info',
      state: 'start'
    },
    {
      id: 7,
      name: 'Matemáticas IV',
      image: 'https://placehold.jp/3e3e41/ffffff/150x150.png',
      teacher: 'Cipriano López Vides',
      program: 'info',
      state: 'continue'
    },
    {
      id: 8,
      name: 'Base de Datos',
      image: 'https://placehold.jp/0a72b2/ffffff/150x150.png',
      teacher: 'Cipriano López Vides',
      program: 'info',
      state: 'start'
    },
    {
      id: 9,
      name: 'Fisica II',
      image: 'https://placehold.jp/2a2c2d/ffffff/200x800.png',
      teacher: 'Cipriano López Vides',
      program: 'info',
      state: 'continue'
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
    const { setStorage } = useStorage()

    await setStorage('@accessToken', JSON.stringify({}))
    await setStorage('@selectProgram', null)
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
  }
})

/* export const { } = userSlice.actions */

export default userSlice.reducer
