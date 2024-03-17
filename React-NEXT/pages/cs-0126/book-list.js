import { useState } from 'react'
import Image from 'next/image'

// 範例資料
import data from '@/data/books.json'

// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg'

function BookList() {
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
  // toggleFav測試
  // const aa = [
  //   { isbn: 'a01', fav: false },
  //   { isbn: 'a02', fav: true },
  // ]
  // console.log(toogleFav(aa, 'a01'))
  // console.log(toogleFav(aa, 'a02'))

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
            {
              /* 記得要有key!!!!!! */
            }
            return (
              <tr key={v.isbn}>
                <td>{v.isbn}</td>
                <td>{v.title}</td>
                <td>{v.author}</td>
                <td>
                  <Image
                    src={v.fav ? bookmarkIconFill : bookmarkIcon}
                    alt=""
                    onClick={() => {
                      // 設定新的收藏狀態
                      setBooks(toogleFav(books, v.isbn))
                    }}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default BookList
