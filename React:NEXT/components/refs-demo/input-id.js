import React from 'react'

export default function InputId() {
  return (
    <>
      <h2>使用id的input表單元素</h2>
      <p>
        React中要使用id，必須在事件處理函式中(onXXXX)，或是使用useeffect()，如此設計是為確保DOM已經渲染完成
      </p>
      <input type="text" id="my-input" />
      <button
        onClick={() => {
          console.log(document.querySelector('#my-input').value)
        }}
      >
        獲得輸入值
      </button>
      <button
        onClick={() => {
          document.querySelector('#my-input').focus()
        }}
      >
        聚焦(focus)
      </button>
      <button
        onClick={() => {
          document.querySelector('#my-input').blur()
        }}
      >
        失焦(blur)
      </button>
    </>
  )
}
