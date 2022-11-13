import { useSelector, useDispatch } from 'react-redux'

import useFetch from 'hooks/useFetch'

import {
  loginUser as login,
  logoutUser as logout
} from './login'

import {
  getPrograms as getUserProgram,
  selectProgram as setProgram,
  removeProgram as delProgram
} from './program'

const useUser = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const { sendFetch } = useFetch()

  const loginUser = (...args) => login(dispatch, sendFetch, ...args)
  const logoutUser = (...args) => logout(dispatch, sendFetch, user.token, ...args)
  const getPrograms = (...args) => getUserProgram(dispatch, sendFetch, user.token, ...args)
  const selectProgram = (...args) => setProgram(dispatch, ...args)
  const removeProgram = (...args) => delProgram(dispatch, ...args)

  return {
    isAuth: user.isAuth,
    isSelectProgram: user.selectProgram,

    loginUser,
    logoutUser,

    getPrograms,
    selectProgram,
    removeProgram
  }
}

export default useUser
