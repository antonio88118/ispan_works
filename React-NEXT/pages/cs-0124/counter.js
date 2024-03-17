import { useState } from 'react'

export default function Counter() {
  // [獲得狀態的變數, 設定狀態變數的函式] = useState(初始值)
  // 初始值只會在第一次呈現時被呼叫，之後都不會再被呼叫
  const [total, setTotal] = useState(0)

  return (
    <div>
      <h1>{total}</h1>
      <button
        // 加入事件監聽, onClick的值必需是一個函式
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <button
        // 加入事件監聽, onClick的值必需是一個函式
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -1
      </button>
    </div>
  )
}
