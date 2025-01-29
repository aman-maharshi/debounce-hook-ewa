import React, { useState, useEffect } from 'react'

const useDebounce = (inputText, delay) => {
  const [debouncedText, setDebouncedText] = useState("")

  useEffect(() => {

    const timeout = setTimeout(() => {
      setDebouncedText(inputText)
    }, delay) // 500ms

    return () => clearTimeout(timeout)
    
  }, [inputText])
  

  return debouncedText

}

export default useDebounce