import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
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

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => { state.isAuth = true },
    logout: (state) => { state.isAuth = false }
  }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer
