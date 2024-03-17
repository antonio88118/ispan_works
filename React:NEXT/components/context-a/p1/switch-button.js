import { useTheme } from '@/hooks/use-theme'

// 顯示使用context的後代元件(消費者consumer)
export default function SwitchButton() {
  const { theme, toggleTheme } = useTheme()
  console.log(theme)

  return (
    <>
      <p>目前佈景為： {theme}</p>
      <button
        onClick={() => {
          toggleTheme()
        }}
      >
        切換為 {theme === 'dark' ? '明亮' : '黑暗'}
      </button>
    </>
  )
}
