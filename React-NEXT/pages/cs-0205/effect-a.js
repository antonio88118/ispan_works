import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Effecta() {
  const [total, setTotal] = useState(0)
  const [force, setForce] = useState(true)

  // 樣式1：每次render「之後」（更新階段）都會執行一次第一個傳入參數函式
  // 使用率：~5%
  // 用途：自訂鉤子開發或除錯紀錄用
  useEffect(() => {
    console.log('每次render都會執行一次')
  })

  // 樣式2：第一次render之後，只會執行一次（掛載階段）
  // 使用率：~80%
  // 用途：元件與伺服器進行呈現後的fetch/ajax獲取資料（從資料庫撈資料）、整合第三方js應用
  // didMount(mounted) + didUpdate(updated)/re-render
  useEffect(() => {
    console.log('第一次render之後，只會執行一次')
  }, [])
  // ^^保持空陣列，代表不與任何變數相依賴，會套用預設行為 => 初次render後執行一次

  // 樣式3：第一次render後執行一次，每當「相依變數們」狀態變動後(after)再執行一次
  // 使用率：~20%
  // 用途：不同狀態間的連動關係，不同資料使用同樣元件時會使用
  // didUpdate(updated)/re-render
  // ex: 在購物車使用優惠券
  useEffect(() => {
    console.log('第一次render後執行一次，每當total狀態變動後再執行一次')
  }, [total, force])
  // ^^^^^^^^^^^^^^代表除了預設之外，還會監聽total, force有變動時（類似onChange事件），再執行其中一次程式碼

  // 樣式4：元件被移出DOM之前(before)，會執行一次'
  // 使用率：~5%
  // 用途：通常稱為cleaner，搭配樣式2作為某些元件被移出前的變數or反API的處理（ex: 移除事件監聽、計時器、記憶體、etc）
  // willMount 移除前
  useEffect(() => {
    return () => {
      console.log('元件被移出DOM之前(before)，會執行一次')
    }
  }, [])
  return (
    <>
      <h1>useEffect基本樣式範例</h1>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setForce(!force)
        }}
      >
        強制進行re-render
      </button>
      <Link href={'/'}>連到首頁</Link>
    </>
  )
}
