// import { useState } from 'react'

export default function PureFunction() {
  function sum(a, b) {
    return a + b
  }

  function calc100kTimes(a, b, c) {
    let d = 0
    return a + b + c + d
  }
  calc100kTimes(1, 2, 3)

  console.log(sum(1, 2))
  console.log(sum(5, 6))
  return (
    <>
      <h1>測試</h1>
    </>
  )
}
