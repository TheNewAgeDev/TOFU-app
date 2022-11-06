import { useSelector, useDispatch } from 'react-redux'
import { API_URL } from '@env'

import { login, logout, changeSelectProgram, selectProgram as selectProgramReducer } from 'features/userSlice'

const VALID_EMAIL = /^(([^<>()[\]\\.,;:\s@”]+(\.[^<>()[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/

const useUser = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const loginUser = async ({ email, password }, setStatus) => {
    console.log(API_URL) // Verificar la url del backend

    if (!email && !password) return setStatus('noData')
    if (!email || !VALID_EMAIL.test(email)) return setStatus('noEmail', 'Por favor, ingrese un correo valido')
    if (!password) return setStatus('noPassword', 'Por favor, ingrese la contraseña')

    const bodyJson = {
      email,
      password,
      device_name: 'app_mobile'
    }

    try {
      setStatus('loading')

      const res = await fetch(`${API_URL}/token`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyJson)
      })

      const data = await res.json()
      if (data && !data.errors) {
        setStatus('success')
        return dispatch(login(data))
      }

      if (data.errors.email) return setStatus('errorEmail', 'Usuario no encontrado')
      setStatus('errorPassword', 'Contraseña Incorrecta')
    } catch (error) {
      setStatus('error')
      console.log('Ocurrio un Error => ', error)
    }
  }

  const logoutUser = async () => {
    const dispatchReturn = dispatch(logout())

    return new Promise((resolve, reject) => {
      dispatchReturn.then(
        () => resolve('')
      )
    })
  }

  const changeProgram = async () => {
    const dispatchReturn = dispatch(changeSelectProgram())

    return new Promise((resolve, reject) => {
      dispatchReturn.then(
        () => resolve('')
      )
    })
  }

  const selectProgram = async (program, setStatus) => {
    if (program === 'default') return setStatus('noSelect', 'Por favor, elija su programa')
    dispatch(selectProgramReducer(program))
  }

  return {
    isAuth: user.isAuth,
    isSelectProgram: user.selectProgram,

    loginUser,
    logoutUser,
    selectProgram,
    changeProgram
  }
}

export default useUser
