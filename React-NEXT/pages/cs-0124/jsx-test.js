import React from 'react'

export default function JsxTest() {
  return (
    <>
      {/* react中的屬性必須用物件值 */}
      <h1 style={{ color: 'red', fontSize: '20px', backgroundColor: 'blue' }}>
        Hello
      </h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </>
  )
}
