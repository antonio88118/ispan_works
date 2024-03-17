import React from 'react'
import FavIcon from './fav-icon'

// 實心圖
// import bookmarkIconFill from '@/assets/bookmark-fill.svg'
// 空心圖
// import bookmarkIcon from '@/assets/bookmark.svg'

export default function BookItem({
  isbn,
  title,
  author,
  fav,
  handleToggleFav,
}) {
  return (
    <>
      <tr>
        <td>{isbn}</td>
        <td>{title}</td>
        <td>{author}</td>
        <td>
          <FavIcon fav={fav} isbn={isbn} handleToggleFav={handleToggleFav} />
        </td>
      </tr>
    </>
  )
}
