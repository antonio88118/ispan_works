import { useTheme } from '@/hooks/use-theme'
import List from '@/components/context-a/p1/list'
import SwitchButton from '@/components/context-a/p1/switch-button'
import Link from 'next/link'
// html的a標籤會重新載入頁面，導致狀態重置，因此react中建議使用可以保留狀態的link元件

export default function P1() {
  const { theme } = useTheme()

  console.log(theme)

  return (
    <>
      <h1>Page1</h1>
      <List />
      <SwitchButton />
      <hr />
      <a href="/cs-0130/context-a/p2">到page2(a標籤)</a>
      <br />
      <Link href="/cs-0130/context-a/p2">到page2</Link>
    </>
  )
}
