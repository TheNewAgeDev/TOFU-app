import {
  removeSelectProgram,
  selectProgram as selectProgramReducer
} from 'features/userSlice'

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
