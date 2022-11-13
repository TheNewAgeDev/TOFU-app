import {
  login,
  logout
} from 'features/userSlice'

import { VALID_EMAIL } from 'utils'

export const loginUser = async (dispatch, sendFetch, { email, password }, setStatus) => {
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

export const logoutUser = async (dispatch, sendFetch, token) => {
  const dispatchReturn = dispatch(logout())

  await sendFetch({
    token,
    route: '/token',
    method: 'DELETE'
  })

  return new Promise((resolve, reject) => {
    dispatchReturn.then(
      () => resolve('')
    )
  })
}
