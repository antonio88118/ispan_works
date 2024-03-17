import { useState } from 'react'

// react元件命名開頭必須大寫
export default function Index() {
  // 宣告一組狀態，react中的變數必須用此寫法
  // [得到值的變數(getter), 設定值的方法(setter)] = useState(初始值)
  const [total, setTotal] = useState(0)

  // 虛擬DOM，虛擬DOM在瀏覽器上變成真實DOM的過程，稱為render(渲染)
  // on- 是react創造的一系列「人造事件」
  return (
    <h1
      role="presentation"
      onClick={() => {
        setTotal(total + 1)
      }}
    >
      {total}
    </h1>
  )
}
