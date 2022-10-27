import { useState } from 'react'

const useModal = (ModalComponent) => {
  const [modalVisible, setModalConfig] = useState(false)

  const setVisibleModal = () => setModalConfig(!modalVisible)

  const Modal = () => {
    return (
      <ModalComponent modalVisible={modalVisible} />
    )
  }

  return {
    Modal,
    setVisibleModal
  }
}

export default useModal
