import { useTheme } from '@/hooks/use-theme'

export default function List() {
  const { theme } = useTheme()
  return (
    <>
      <ul
        style={{
          backgroundColor: theme === 'dark' ? '#000' : '#fff',
          color: theme === 'dark' ? '#fff' : '#000',
        }}
      >
        <li>1111</li>
        <li>2222</li>
      </ul>
    </>
  )
}
