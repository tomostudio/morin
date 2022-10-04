import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export function AppWrapper({ children, default_language }) {
  const [scrollState, setScrollState] = useState(null)
  const [language, setLanguage] = useState(default_language)
  const [langColor, setLangColor] = useState('black')
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
