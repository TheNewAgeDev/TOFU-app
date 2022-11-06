import { useSelector, useDispatch } from 'react-redux'
import { API_URL } from '@env'

import { login } from 'features/userSlice'

const useUser = () => {
  console.log(API_URL) // Verificar la url del backend

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const loginUser = async ({ email, password }, setStatus) => {
    if (!email && !password) return setStatus('noData')
    if (!email) return setStatus('noEmail', 'Por favor, ingrese el correo')
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

  return {
    isAuth: user.isAuth,
    loginUser
  }
}

export default useUser
