import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { toggleConfig } from 'features/settingSlice'

import Settings from 'components/Cards/Settings'

const useModal = () => {
  const dispatch = useDispatch()
  const configModal = useSelector(state => state.setting.configModal)
  const [modalVisible, setModalConfig] = useState(configModal)

  useEffect(() => {
    setModalConfig(configModal)
  }, [configModal])

  const toggleModal = (disabled = false) => {
    dispatch(toggleConfig({ disabled }))
    setModalConfig(configModal)
  }

  const Modal = () => {
    return (
      <Settings modalVisible={modalVisible} toggleModal={toggleModal} />
    )
  }

  return {
    Modal,
    toggleModal
  }
}

export default useModal
