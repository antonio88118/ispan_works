// import React from 'react'

export default function TestCopy() {
  const oa = { a: 1, b: 2, c: { x: 9 } }

  //   const ob = { ...oa, c: { ...oa.c } }
  const ob = { ...oa }

  console.log(oa)
  console.log(ob)
  // 淺拷貝未拷貝到c裡面的{x: 9}
  console.log(ob == oa)
  console.log(ob.a == oa.a)

  //   JSON深拷貝語法
  const ooa = { a: 1, b: 2, c: { x: 9 } }
  const oob = JSON.parse(JSON.stringify(ooa))

  console.log(ooa, oob)

  return <div>test-copy</div>
}
