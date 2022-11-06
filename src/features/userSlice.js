import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import useStorage from 'hooks/useStorage'

const initialState = {
  isAuth: false,
  token: {
    access_token: null,
    token_type: null
  },

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

export const login = createAsyncThunk(
  'users/login',
  async (data) => {
    const { getStorage, setStorage } = useStorage()

    await setStorage('@accessToken', JSON.stringify(data))
    const saveToken = await getStorage('@accessToken')

    return {
      saveToken
    }
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => { state.isAuth = false }
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      const { saveToken } = action.payload

      state.isAuth = true
      state.token = saveToken
    })
  }
})

export const { logout } = userSlice.actions

export default userSlice.reducer
