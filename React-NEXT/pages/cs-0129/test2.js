import { useState } from 'react'

export default function Test2() {
  const [password, setPassword] = useState('')
  const [score, setScore] = useState(0)
  const rating = (str) => {
    let r = 0
    if (str.length >= 6) r += 2
    if (str.length >= 8) r += 2
    console.log(r)
    return r
  }

  return (
    <>
      <h1>密碼輸入檢查</h1>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            console.log(e.target.value)
            setPassword(e.target.value)
            // 設定評分
            // 錯誤示範
            // setScore(rating(password))
            setScore(rating(e.target.value))
          }}
        />
      </div>
      <p>強度評分: {score}</p>
    </>
  )
}
