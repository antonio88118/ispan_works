import React from 'react'
import { useAuth } from '@/hooks/use-auth'
import Link from 'next/link'

export default function Login() {
  const { auth, login, logout } = useAuth()
  return (
    <>
      <h1>會員登入頁</h1>
      <p>目前登入狀態： {auth.isAuth ? '會員已登入' : '未登入'}</p>
      <p>
        <button
          onClick={() => {
            if (auth.isAuth) logout()
            else login()
          }}
        >
          {auth.isAuth ? '登出' : '登入'}
        </button>
      </p>
      <Link href="/cs-0130/user/profile">到 個人資訊頁(profile)</Link>
    </>
  )
}
