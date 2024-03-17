import React, { useState } from 'react'

export default function CRender() {
  const [total, setTotal] = useState(0)
  return (
    <>
      <h1>條件渲染範例</h1>
      <hr />
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      {/* if的表達式語法，使用&&運算子 */}
      {Boolean(total) && <h2>total現在是{total}</h2>}
      {!!total && <h2>total現在是{total}</h2>}
      {total !== 0 && <h2>total現在是{total}</h2>}
      {/* 使用三元運算子(最保險) */}
      {total ? <h2>total現在是{total}</h2> : ''}
    </>
  )
}
