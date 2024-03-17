import Link from 'next/link'
import { useAuth } from '@/hooks/use-auth'
// html的a標籤會重新載入頁面，導致狀態重置，因此react中建議使用可以保留狀態的link元件

export default function Profile() {
  const { auth } = useAuth()

  console.log(auth)

  return (
    <>
      <h1>會員個人資料頁</h1>
      <p>ID: {auth.userData.id}</p>
      <p>userName: {auth.userData.userName}</p>
      <hr />
      <Link href="/cs-0130/user/login">到 會員登入頁</Link>
    </>
  )
}
