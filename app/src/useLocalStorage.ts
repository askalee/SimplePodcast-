import { useState, useEffect } from 'react'

function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const json = localStorage.getItem(key)
    if (json != null) {
      try {
        return JSON.parse(json) as T
      } catch {
        // ignore parsing errors
      }
    }
    return initialValue
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // ignore storage errors
    }
  }, [key, value])

  return [value, setValue] as const
}

export default useLocalStorage
