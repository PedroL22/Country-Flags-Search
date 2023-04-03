import React, { createContext, useContext, useEffect, useState } from 'react'

interface ThemeContextType {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
})

export default function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') !== 'dark' ? 'light' : 'dark'
  )

  useEffect(() => {
    const root = window.document.documentElement

    const removeTheme = theme === 'dark' ? 'light' : 'dark'

    root.classList.remove(removeTheme)
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextType {
  return useContext<ThemeContextType>(ThemeContext)
}
