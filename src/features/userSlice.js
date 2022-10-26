import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: '1509234566',
  name: 'Luis Steven',
  lastname: 'Lopez Rueda',
  email: 'orlando.ospino@unipaz.edu.co',
  programs: [
    {
      id: 1,
      name: 'Ingenieria Informatica'
    },
    {
      id: 2,
      name: 'Administración de Empresas'
    },
    {
      id: 3,
      name: 'MVZ'
    }
  ],
  rol: 'student'
}

export const taskSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {},
    decrement: (state) => {},
    incrementByAmount: (state, action) => {}
  }
})

export const { increment, decrement, incrementByAmount } = taskSlice.actions

export default taskSlice.reducer
