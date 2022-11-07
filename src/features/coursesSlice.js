import { createSlice } from '@reduxjs/toolkit'

const initialState = [
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
]

export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {}
})

/* export const { } = coursesSlice.actions */

export default coursesSlice.reducer
