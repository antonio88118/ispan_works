import React, { useState } from 'react'
import InputId from '@/components/refs-demo/input-id'
import InputRefs from '@/components/refs-demo/input-refs'

export default function RefsDemo() {
  const [test, settest] = useState({})
  console.log(test)
  return (
    <>
      <h1>Refs範例</h1>
      <InputId />
      <InputId />
      <p>上列使用一樣的id獲得實體，會參照到同一個元素</p>
      <hr />
      <InputRefs settest={settest} />
      <InputRefs settest={settest} />
    </>
  )
}
