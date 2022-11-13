import { API_URL } from '@env'

const sendFetch = async ({ token, route = '/', method = 'POST', bodyJson = {} }) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }

  if (token) headers.Authorization = `${token.token_type} ${token.access_token}`

  const res = await fetch(`${API_URL}${route}`, {
    method,
    headers,
    body: JSON.stringify(bodyJson)
  })

  return await res.json()
}

const useFetch = () => {
  return {
    sendFetch
  }
}

export default useFetch
