import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export function AppWrapper({ children }) {
  const [scrollState, setScrollState] = useState(null)
  const [language, setLanguage] = useState('id')
  const [langColor, setLangColor] = useState(true)
  const mobileMenuOpen = false

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        langColor,
        setLangColor,
        scrollState,
        setScrollState,
        mobileMenuOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
