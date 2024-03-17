import { createContext, useContext, useState } from 'react'

// 1. 建立並導出
export const ThemeContext = createContext()

// 協助全站(_app.js)裡套用Provider的元件，集中要使用的狀態
export function ThemeProvider({ children }) {
  // 共享狀態(state)
  // theme = 'light' | 'dark'
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    // 用value屬性傳入共享狀態(state)
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// 給消費者們包裝好專用於此的hook名稱
export const useTheme = () => useContext(ThemeContext)
