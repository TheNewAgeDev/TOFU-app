import { useSelector, useDispatch } from 'react-redux'

import {
  changeSelectProgram,
  selectProgram as selectProgramReducer
} from 'features/userSlice'

import useFetch from 'hooks/useFetch'

import { loginUser as login, logoutUser as logout } from './login'

const useUser = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const { sendFetch } = useFetch()

  const loginUser = (...args) => login(dispatch, sendFetch, ...args)
  const logoutUser = (...args) => logout(dispatch, sendFetch, user.token, ...args)

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
