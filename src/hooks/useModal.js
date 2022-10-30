import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { toggleConfig } from 'features/settingSlice'

const useModal = (ModalComponent) => {
  const dispatch = useDispatch()
  const configModal = useSelector(state => state.setting.configModal)
  const [modalVisible, setModalConfig] = useState(configModal)

  useEffect(() => {
    setModalConfig(configModal)
  }, [configModal])

  const toggleModal = () => {
    dispatch(toggleConfig())
    setModalConfig(configModal)
  }

  const Modal = () => {
    return (
      <ModalComponent modalVisible={modalVisible} toggleModal={toggleModal} />
    )
  }

  return {
    Modal,
    toggleModal
  }
}

export default useModal
