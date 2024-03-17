import { useState } from 'react'
import Star from '@/components/star-page/star'
import { FaHeart, FaCat } from 'react-icons/fa'

export default function StarPage() {
  // const [ratingNow, setRatingNow] = useState(2)
  const [productRating, setProductRating] = useState(2)
  return (
    <>
      <h1>星星評分頁面</h1>
      {/* 套用預設值 */}
      <Star />
      {/* 給予屬性值 */}
      {/* <Star starCount={3} initRating={2} /> */}
      {/* <Star starCount={10} initRating={6} /> */}

      {/* 以下例子中，雖然ratingNow會改變，但在star.js設定的初始值只會渲染一次，也就是產生了狀態變化不同步的問題，須額外使用方法應對 */}
      {/* 解決方法一：使用能夠監聽狀態變化的useEffect()，寫在star.js */}
      {/* <Star starCount={5} initRating={ratingNow} />
      <button
        onClick={() => {
          setRatingNow(5)
        }}
      >
        set ratingNow to 5
      </button> */}

      {/* 解決方法二：加上key，讓react識別其為不同的元件，以達成重新渲染，較少使用 */}
      {/* <Star starCount={5} initRating={ratingNow} key={ratingNow} />
      <button
        onClick={() => {
          setRatingNow(1)
        }}
      >
        set ratingNow to 1
      </button> */}

      <p>使用color</p>
      <Star
        color=""
        starCount={6}
        initRating={productRating}
        onRatingChange={setProductRating}
      />
      <p>使用style</p>
      <Star
        color="blue"
        starCount={6}
        initRating={productRating}
        onRatingChange={setProductRating}
        icon={<FaHeart />}
      />

      <Star
        color="orange"
        starCount={6}
        initRating={productRating}
        onRatingChange={setProductRating}
        icon={<FaCat />}
      />
    </>
  )
}
