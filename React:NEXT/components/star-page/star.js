import { useState, useEffect } from 'react'
import styles from './star.module.css'
import { FaStar } from 'react-icons/fa'

export default function Star({
  // 養成給予初始值的好習慣！！
  starCount = 5, // 有幾個星星圖是，也代表評分最大值
  initRating = 0, // 初始評分
  onRatingChange = (rating = 0) => {}, // 當評分改變時，呼叫的函式
  color = 'red',
  icon = <FaStar />,
}) {
  // 點擊時的評分
  // 反樣式：以屬性作為狀態初始值，因為屬性可能來自父母的狀態，除非該屬性只會被一個元件使用一次，否則不適合使用
  // 老師的註解：
  // 一般而言，應避免props作為state初始值，除非只需要在內部狀態初始化
  // 而且之後props不會再被更動，或元件不需要再反映其他更動時，否則需要應對屬性的同步化問題（使用useEffect()）
  const [rating, setRating] = useState(initRating)

  // 同步化解決方法一：
  // 若要保持和initRating連動，需利用useEffect()監聽initRating變動，在設定到initRating中
  // useEffect(() => {
  //   setRating(initRating)
  // }, [initRating])

  // hover需要兩個事件配合：mouseEnter和mouseLeave
  const [hoverRating, setHoverRating] = useState(0)
  return (
    <>
      <div>
        {/* 產生5個元素都是1的陣列 [1, 1, 1, 1, 1] */}
        {Array(starCount)
          .fill(1)
          .map((v, i) => {
            // 每個星星的分數，剛好是索引值+1
            const score = i + 1
            return (
              <button
                className={styles['star-btn']}
                key={i}
                // 游標進入
                onMouseEnter={() => {
                  setHoverRating(score)
                }}
                // 游標離開
                onMouseLeave={() => {
                  setHoverRating(0)
                }}
                onClick={() => {
                  setRating(score)
                  onRatingChange(score)
                }}
              >
                <span
                  className={
                    score <= rating || score <= hoverRating
                      ? styles['on']
                      : styles['off']
                  }
                  // color={
                  //   score <= rating || score <= hoverRating ? color : 'gray'
                  // }
                  style={{
                    color:
                      score <= rating || score <= hoverRating ? color : 'gray',
                  }}
                >
                  {icon}
                </span>
              </button>
            )
          })}
      </div>
      <p>評分 {rating}</p>
    </>
  )
}
