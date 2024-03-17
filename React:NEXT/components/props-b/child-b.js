import { useState, useEffect } from 'react'

// 使用父母元件給予的狀態設定函式 setDataFromChild
export default function ChildB({ setDataFromChild = () => {} }) {
  const [cData, setCData] = useState('child-b data')

  //   選擇2: 在元件一呈現(第一次render)時，執行回傳資料的方法
  //   useEffect(() => {
  //     setDataFromChild(cData)
  //   }, [])

  return (
    <>
      <h3>ChildB</h3>
      <p>{cData}</p>
      <button
        onClick={() => {
          // 選擇1: 事件處理函式時執行
          // 由props得到父母元件傳來的方法，傳入自己本身的內部狀態，並呼叫(回傳資料給父母)
          setDataFromChild(cData)
        }}
      >
        回傳資料給parent
      </button>
    </>
  )
}
