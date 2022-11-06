import { useSelector, useDispatch } from 'react-redux'
import { API_URL } from '@env'

import { login } from 'features/userSlice'

const useUser = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const loginUser = async ({ email, password }) => {
    const bodyJson = {
      email,
      password,
      device_name: 'app_mobile'
    }

    try {
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
        console.log('Loggeado :)')
        return dispatch(login(data))
      }

      console.log('No Loggeado', data)
    } catch (error) {
      console.log('Ocurrio un Error => ', error)
    }
  }

  return {
    isAuth: user.isAuth,
    loginUser
  }
}

export default useUser
