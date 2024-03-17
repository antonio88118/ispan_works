import { useState } from 'react'
import ChildA from './child-a'
import ChildB from './child-b'

export default function Parent() {
  const [pData, setPData] = useState('parent data')
  //   若子女元件要回傳狀態給父母元件，父母元件必須建立一個狀態設定函式給該子女元件
  const [dataFromChild, setDataFromChild] = useState('')

  return (
    <>
      {/* 流程： 父母把狀態設定函式傳給子女B，子女B回傳資料給父母後，父母再把資料傳給子女A */}
      <h2>Parent</h2>
      <hr />
      {/* 父母元件可以用類似html屬性給定值的語法，傳遞任何資料給子女元件 */}
      {/* 這裡的setDataFromChild是一個函式，用來接收子女回傳的資料 */}
      <ChildA dataFromChild={dataFromChild} />
      <hr />
      <ChildB setDataFromChild={setDataFromChild} />
    </>
  )
}
