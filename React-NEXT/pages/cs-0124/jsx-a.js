import React from 'react'

export default function JsxA() {
  return (
    <>
      <h1>JSX語法中各種值的渲染呈現</h1>
      <h2>Number</h2>
      {123}
      {1 + 2}
      {NaN}
      <hr />
      <h2>String</h2>
      {'hello'}
      {`total=${100 - 1}`}
      <hr />
      <h2>Bollean</h2>
      {/* 不呈現 */}
      {true}
      {false}
      <hr />
      <h2>null / undefined</h2>
      {/* 不呈現 */}
      {null}
      {undefined}
      <hr />
      <h2>陣列(Array)</h2>
      {/* 類似array.join('') */}
      {[1, 2, 3]}
      {['a', 'b', 'hello']}
      {[<h1 key="0">1</h1>, <p key="1">hello</p>]}
      {/* 不允許直接渲染呈現，有錯誤，非Recat child */}
      <h2>物件(Object)</h2>
      {/* {{ a: 1, b: 2 }} */}
      <hr />
      {/* 無渲染呈現，有警告，非Recat child */}
      <h2>函式(Function)</h2>
      {/* {() => {}} */}
    </>
  )
}
