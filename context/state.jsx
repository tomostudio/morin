import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export function AppWrapper({ children }) {
  const [scrollState, setScrollState] = useState(null)
  const mobileDark = true
  const [language, setLanguage] = useState('en')
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuOpen = false

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        scrollState,
        setScrollState,
        mobileDark,
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
