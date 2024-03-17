import { useState } from 'react'

// 範例資料
import data from '@/data/books.json'

import BookItem from './book-item'

export default function BookList() {
  // 原本的書籍資料中，沒有「被加入收藏」的屬性，因此需要為物件擴充一個屬性fav (boolean，預設為false)
  const initState = data.map((v, i) => {
    return { ...v, fav: false }
  })

  const [books, setBooks] = useState(initState)

  // 純函式，單純改變物件陣列用
  // 功能: 給定一個物件陣列，與一個isbn(相當於id)，回傳切換fav boolean值的物件陣列
  const toogleFav = (array, isbn) => {
    // 使用map遍歷尋找對應資料
    return array.map((v, i) => {
      if (v.isbn === isbn) return { ...v, fav: !v.fav }
      else return v
    })
  }

  const handleToggleFav = (isbn) => {
    setBooks(toogleFav(books, isbn))
    // 利用toogleFav回傳的v，傳出新增的收藏商品到後端
  }

  return (
    <>
      <h1>書籍清單</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>title</th>
            <th>author</th>
            <th>加入收藏</th>
          </tr>
        </thead>
        <tbody>
          {books.map((v, i) => {
            const { isbn, title, author, fav } = v

            return (
              <BookItem
                key={isbn}
                isbn={isbn}
                title={title}
                author={author}
                fav={fav}
                // 設定新的收藏狀態，books和toogleFav, setBooks都在list的作用域內，只需要獲得該書本的isbn
                // handleToggleFav 在第40行
                // setBooks(toogleFav(books, v.isbn))
                handleToggleFav={handleToggleFav}
              />
            )
          })}
        </tbody>
      </table>
    </>
  )
}
