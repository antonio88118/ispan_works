import { useRef } from 'react'

export default function InputRefs({ settest = () => {} }) {
  // 1. 初始值為null，對應表單元素的API，例如getElementById獲取元素參照時，沒得到會回應null
  const inputRef = useRef(null)

  const getValue = (e) => {
    settest(e)
  }
  return (
    <>
      <h2>使用Refs的input表單元素</h2>
      {/* 2. 定義ref值對接 */}
      <input
        type="text"
        ref={inputRef}
        onChange={() => {
          getValue(inputRef.current.value)
        }}
      />
      <button
        onClick={() => {
          // 3. 此處已得到元素參照，可以直接呼叫API
          // inputRef.current相當於React會協助獲取該元素的實體參照
          const v = inputRef.current.value
          // 等同於 const v = document.quertSelector('#my-input').value
          console.log(v)
        }}
      >
        獲得輸入值
      </button>
      <button
        onClick={() => {
          inputRef.current.focus()
        }}
      >
        聚焦(focus)
      </button>
      <button
        onClick={() => {
          inputRef.current.blur()
        }}
      >
        失焦(blur)
      </button>
    </>
  )
}
