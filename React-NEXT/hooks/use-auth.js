import { createContext, useContext, useState } from 'react'

// 1. 建立並導出
export const AuthContext = createContext()

// 協助全站(_app.js)裡套用Provider的元件，集中要使用的狀態
export function AuthProvider({ children }) {
  const initAuth = {
    isAuth: false,
    userData: {
      id: 0,
      userName: '',
    },
  }
  const [auth, setAuth] = useState(initAuth)

  // 模擬登入
  const login = () => {
    setAuth({
      isAuth: true,
      userData: {
        id: 123,
        userName: 'Andy',
      },
    })
  }

  // 模擬登出
  const logout = () => {
    setAuth(initAuth)
  }

  return (
    // 用value屬性傳入共享狀態(state)
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// 給消費者們包裝好專用於此的hook名稱
export const useAuth = () => useContext(AuthContext)
