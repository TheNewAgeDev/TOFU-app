import { useState } from 'react'

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (text) => {
    setValue(text)
  }

  return [value, handleChange]
}

export default useInput
