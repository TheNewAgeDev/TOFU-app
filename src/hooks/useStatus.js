import { useState } from 'react'

const STATUS_MESSAGES = {
  loading: 'Cargando...',
  success: 'Operación completada con exito',
  noData: 'Por favor, ingrese los datos',
  error: 'Ocurrio un error no controlado, contacte al administrador'
}

const useStatus = (initialValue = '') => {
  const [status, setStatusValue] = useState(initialValue)
  const [statusMessage, setStatusMessage] = useState(() => {
    return STATUS_MESSAGES[initialValue] || ''
  })

  const setStatus = (newStatus, message) => {
    const newMessage = message || STATUS_MESSAGES[newStatus] || statusMessage
    setStatusValue(newStatus)

    setStatusMessage(newMessage)
  }

  return { status, statusMessage, setStatus }
}

export default useStatus
