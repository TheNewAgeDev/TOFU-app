import { API_URL } from '@env'

const loginUser = async ({ email, password }) => {
  const bodyJson = {
    email,
    password,
    device_name: 'app_mobile'
  }

  try {
    console.log(`${API_URL}/token`)

    const res = await fetch(`${API_URL}/token`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyJson)
    })

    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.log('Ocurrio un Error xd', error)
  }
}

const useUser = () => {
  return {
    loginUser
  }
}

export default useUser
