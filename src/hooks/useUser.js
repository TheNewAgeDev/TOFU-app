import Constants from 'expo-constants'

const useUser = () => {
  const apiUrl = Constants.expoConfig.extra.apiUrl
  console.log(apiUrl)

  return {}
}

export default useUser
