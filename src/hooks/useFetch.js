import { API_URL } from '@env'

const sendFetch = async ({ token, route = '/', method = 'POST', bodyJson = {} }) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }

  const configFetch = {
    method,
    headers
  }

  if (token) headers.Authorization = `${token.token_type} ${token.access_token}`
  if (method !== 'GET') configFetch.body = JSON.stringify(bodyJson)

  const res = await fetch(`${API_URL}${route}`, configFetch)

  try {
    return await res.json()
  } catch (error) {
    return {
      message: 'response is not a object'
    }
  }
}

const useFetch = () => {
  return {
    sendFetch
  }
}

export default useFetch
