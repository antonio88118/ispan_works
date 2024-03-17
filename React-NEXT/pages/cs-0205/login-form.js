import { useState } from 'react'
import { IoMdEye } from 'react-icons/io'
import { IoMdEyeOff } from 'react-icons/io'

export default function LoginForm() {
  // 使用物件狀態對應表單的欄位值
  // 使用欄位名稱作為屬性名稱
  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  })

  // 密碼顯示狀態
  const [showPwd, setShowPwd] = useState(false)
  function pwdToggle(showPwd) {
    setShowPwd(!showPwd)
  }

  // 實作送出表單
  const handleSubmit = (e) => {
    // 取消表單預設行為，因為要使用js做進一步的檢查和 fetch/ajax 方式送出表單
    e.preventDefault()
    // e.target 指的是事件觸發時的表單物件
    console.log(e.target)

    // 用狀態獲得值，做每個欄位的檢查
    let hasErrors = false
    const newErrors = {
      username: '',
      password: '',
    }
    if (!user.username) {
      newErrors.username = '請輸入帳號'
      hasErrors = true
    } else {
      newErrors.username = ''
      hasErrors = false
    }
    if (!user.password) {
      newErrors.password = '請輸入密碼'
      hasErrors = true
    } else {
      newErrors.password = ''
      hasErrors = false
    }

    if (hasErrors) {
      setErrors(newErrors)
      return
    } else {
      setErrors(newErrors)
    }

    // 使用FormData物件介面來存取值
    const formData = new FormData(e.target)

    // 要得到欄位值，需要使用欄位的name
    // const errors = []
    // if (!formData.get('username')) {
    //   errors.push('請填寫帳號')
    // }
    // if (!formData.get('password')) {
    //   errors.push('請填寫密碼')
    // }
    // // 若錯誤訊息中有成員
    // if (errors.length > 0) {
    //   alert(errors.join(','))
    //   setErrors()
    //   return // 因為有錯誤訊息，所以跳出送出函式，不繼續往下送到伺服器
    // }

    // 用fetch送到伺服器
    console.log(formData.get('username'))
    console.log(formData.get('password'))
  }

  // 一般欄位填寫時，共用的onChange處理函式
  const handleFieldChange = (e) => {
    // console.log(e.target.type, e.target.name, e.target.value)
    // [e.target.name] 計算得來的屬性名稱(computed property) from ES6，允許在定義物件時讓變數作為屬性名
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  return (
    <>
      <h1>會員登入表單</h1>
      <form onSubmit={handleSubmit}>
        <div>
          帳號：
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleFieldChange}
          />
        </div>
        <div style={{ minHeight: '1.5rem', color: 'red' }}>
          {errors.username ? errors.username : ''}
        </div>
        <div>
          密碼：
          <input
            type={showPwd ? 'text' : 'password'}
            name="password"
            value={user.password}
            onChange={handleFieldChange}
          />
          {showPwd ? (
            <IoMdEyeOff onClick={() => pwdToggle(showPwd)} />
          ) : (
            <IoMdEye onClick={() => pwdToggle(showPwd)} />
          )}
        </div>
        <div style={{ minHeight: '1.5rem', color: 'red' }}>
          {errors.password ? errors.password : ''}
        </div>
        <div>
          <button type="submit">登入</button>
        </div>
      </form>
    </>
  )
}
