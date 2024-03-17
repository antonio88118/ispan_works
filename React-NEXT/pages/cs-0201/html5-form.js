import { useState } from 'react'

const getToday = () => {
  const now = new Date()
  const yyyy = now.getFullYear()
  // 個位數捕0
  const mm =
    now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1
  const dd = now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
  return `${yyyy}-${mm}-${dd}`
}

export default function Html5Form() {
  const [inputText, setInputText] = useState('')
  const [textareaText, setTextareaText] = useState('')
  const [inputPassword, setInputPassord] = useState('')

  const [inputDate, setInputDate] = useState(getToday())
  // 是否顯示密碼
  const [show, setShow] = useState(false)

  const petOptions = ['狗', '貓', '金魚']
  // radio button group
  const [pet, setPet] = useState('')
  // checkbox group
  const [pets, setPets] = useState([])

  // checkbox寫法二：在外部檢查
  const handlePetsChange = (e) => {
    const tv = e.target.value
    return pets.includes(tv)
      ? setPets(pets.filter((v) => v !== tv))
      : setPets([...pets, tv])
  }

  // checkbox寫法三：使用物件陣列
  const newPetOptions = petOptions.map((v, i) => {
    return { id: i + 1, name: v, checked: false }
  })

  const [petsTri, setPetsTri] = useState(newPetOptions)

  const toggleCheckbox = (petsTri, id) => {
    return petsTri.map((v, i) => {
      if (v.id === id) return { ...v, checked: !v.checked }
      else return v
    })
  }
  return (
    <>
      <h1>可控表單元件</h1>
      <section title="input-text">
        <h2>文字輸入框(input-text)</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>
      <section title="textarea">
        <h2>文字輸入區域(textarea)</h2>
        <textarea
          value={textareaText}
          onChange={(e) => {
            setTextareaText(e.target.value)
          }}
        />
      </section>
      <section title="input-password">
        <h2>密碼輸入框(input-password)</h2>
        <input
          type={show ? 'text' : 'password'}
          value={inputPassword}
          onChange={(e) => {
            setInputPassord(e.target.value)
          }}
        />
        <input
          type="checkbox"
          checked={show}
          onChange={(e) => {
            setShow(e.target.checked)
          }}
        />
        顯示密碼
        <h2>日期輸入框(input-date)</h2>
        <input
          type="date"
          value={inputDate}
          onChange={(e) => {
            setInputDate(e.target.value)
          }}
          min="2018-01-01"
          max="2024-03-28"
        />
      </section>
      <section title="radio button">
        <h2>選項按鈕群組(radio button group)</h2>
        {petOptions.map((v, i) => {
          return (
            <label key={i}>
              <input
                type="radio"
                checked={v === pet}
                value={v}
                onChange={(e) => {
                  setPet(e.target.value)
                }}
              />{' '}
              {v}
            </label>
          )
        })}
      </section>
      <section title="checkbox">
        <h2>核取方塊(checkbox group)</h2>
        {petOptions.map((v, i) => {
          return (
            <label key={i}>
              <input
                type="checkbox"
                checked={pets.includes(v)}
                value={v}
                // checkbox寫法一
                // onChange={(e) => {
                //   // 勾選時觸發事件的值，相當於v
                //   const tv = e.target.value
                //   // 判斷tv是否在陣列中
                //   if (pets.includes(tv)) {
                //     // 若存在，把該選項從狀態陣列中移除 = 取消勾選
                //     const newPets = pets.filter((v2, i2) => {
                //       return v2 !== tv
                //     })
                //     setPets(newPets)
                //   } else {
                //     const newPets = [...pets, tv]
                //     setPets(newPets)
                //   }
                // }}

                // checkbox寫法二
                onChange={(e) => {
                  handlePetsChange(e)
                }}
              />{' '}
              {v}
            </label>
          )
        })}
      </section>
      <section title="checkbox object-array">
        <h2>核取方塊(使用物件陣列)</h2>
        {petsTri.map((v, i) => {
          return (
            <label key={v.id}>
              <input
                type="checkbox"
                checked={v.checked}
                value={v.name}
                onChange={() => {
                  setPetsTri(toggleCheckbox(petsTri, v.id))
                }}
              />
              {''}
              {v.name}
            </label>
          )
        })}
      </section>
    </>
  )
}
