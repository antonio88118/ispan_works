import { useState } from 'react'

export default function Test() {
  const [state, setState] = useState({ a: 1, b: 2 })

  return (
    <>
      <h1>測試</h1>
      <button
        onClick={() => {
          // 1. 從原狀態(state)建立一個全新的副本(copy)
          const newState = { ...state }
          console.log(state, newState)
          console.log(state === newState)

          //   2.在建立的全新副本上修改
          newState.a = 9

          // 3. 執行setState設定回狀態，用新的物件狀態直接取代舊狀態
          setState(newState)
        }}
      >
        改變state.a 為 9
      </button>
    </>
  )
}
