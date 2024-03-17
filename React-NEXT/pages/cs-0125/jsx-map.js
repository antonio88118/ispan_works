import React from 'react'

export default function JsxMap() {
  const products = [
    {
      id: 1,
      name: '小熊餅乾',
    },
    {
      id: 2,
      name: '巧克力豆',
    },
  ]

  return (
    <>
      <h1>JSX語法陣列(Array)的map範例</h1>
      <hr />
      <ul>
        {products.map((v, i) => {
          return <li key={v.id}>{v.name}</li>
        })}
      </ul>
    </>
  )
}
