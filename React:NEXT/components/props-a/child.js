import React from 'react'

export default function Child({ text, price, hasStock, doSum, aa, objA }) {
  //   console.log(props)
  return (
    <>
      <h3>Child(子女元件)</h3>
      {/* 渲染父元件傳入的屬性值 */}
      {/* <p>text: {props.text}</p>
      <p>price: {props.price}</p> */}

      <p>text: {text}</p>
      <p>price: {price}</p>
      <p>hasStock: {hasStock ? 'true' : 'false'}</p>
      <p>1+2={doSum(1, 2)}</p>
      <p>{aa}</p>
      <p>{JSON.stringify(objA)}</p>
    </>
  )
}
