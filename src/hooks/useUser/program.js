import {
  removeSelectProgram,
  selectProgram as selectProgramReducer
} from 'features/userSlice/thunks'

import { setUserInfo } from 'features/userSlice'

export const getPrograms = async (dispatch, sendFetch, token) => {
  const data = await sendFetch({
    route: '/me',
    method: 'GET',
    token
  })

  dispatch(setUserInfo(data))
}

export const removeProgram = async (dispatch) => {
  const dispatchReturn = dispatch(removeSelectProgram())

  return new Promise((resolve, reject) => {
    dispatchReturn.then(
      () => resolve('')
    )
  })
}

export const selectProgram = async (dispatch, program, setStatus) => {
  if (!program || program.value === 'default') return setStatus('noSelect', 'Por favor, elija su programa')
  dispatch(selectProgramReducer(program))
}
