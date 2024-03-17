import React, { useState } from 'react'

export default function Test() {
  const [state1, setState1] = useState(0)
  const [state2, setState2] = useState(0)
  return (
    <>
      <p>state1={state1}</p>
      <p>state2={state2} ((state2=state1*2))</p>
      <button
        onClick={() => {
          // 錯誤示範：直接寫兩個狀態改變
          //   setState1(state1 + 2)
          //   setState2(state2 * 2)
          // 正確語法：因為setState()是異步執行
          const newState1 = state1 + 2
          setState1(newState1)
          setState2(newState1 * 2)
        }}
      >
        state1+2 & state2=state1*2
      </button>
    </>
  )
}
