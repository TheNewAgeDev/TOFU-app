import {
  removeSelectProgram,
  selectProgram as selectProgramReducer
} from 'features/userSlice'

export const getPrograms = async (dispatch, sendFetch, token) => {
  const data = await sendFetch({
    route: '/me',
    method: 'GET',
    token
  })

  console.log(data)
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
  if (program === 'default') return setStatus('noSelect', 'Por favor, elija su programa')
  dispatch(selectProgramReducer(program))
}
