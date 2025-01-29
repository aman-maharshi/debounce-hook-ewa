import React, { useState, useEffect } from 'react'

const useDebounce = (text, delay) => {
  const [debouncedText, setDebouncedText] = useState("")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedText(text)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text])

  return debouncedText
}

export default useDebounce