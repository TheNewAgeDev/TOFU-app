import { useSelector, useDispatch } from 'react-redux'

import {
  login,
  logout,
  changeSelectProgram,
  selectProgram as selectProgramReducer
} from 'features/userSlice'

import useFetch from 'hooks/useFetch'
import { VALID_EMAIL } from 'utils'

const useUser = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const { sendFetch } = useFetch()

  const loginUser = async ({ email, password }, setStatus) => {
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

      const data = await sendFetch({
        route: '/token',
        method: 'POST',
        bodyJson
      })

      if (data && data.access_token && !data.errors) {
        setStatus('success')
        return dispatch(login(data))
      } else if (data && !data.errors) return setStatus('error')

      if (data.errors.email) return setStatus('errorEmail', 'Usuario no encontrado')
      setStatus('errorPassword', 'Contraseña Incorrecta')
    } catch (error) {
      setStatus('error')
      console.log('Ocurrio un Error => ', error)
    }
  }

  const logoutUser = async () => {
    const dispatchReturn = dispatch(logout())

    await sendFetch({
      token: user.token,
      route: '/token',
      method: 'DELETE'
    })

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
