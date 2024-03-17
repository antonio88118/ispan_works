import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from '@/styles/loading.module.css'
// 得到全部商品的網址：
// https://my-json-server.typicode.com/eyesofkids/json-fake-data/products

// 擷取資料中的一小部分做為測試用
const demoItems = [
  {
    id: '1',
    picture: 'https://via.placeholder.com/150',
    stock: 5,
    name: 'iPhone 12 Pro',
    price: 25000,
    tags: '蘋果,大螢幕',
  },
  {
    id: '2',
    picture: 'https://via.placeholder.com/150',
    stock: 5,
    name: 'iPhone 12',
    price: 15000,
    tags: '蘋果,小螢幕',
  },
]

export default function List() {
  const [products, setProducts] = useState([])

  // 載入信號值
  const [isLoading, setIsLoading] = useState(true)

  const getProducts = async () => {
    try {
      // 要求資料
      const res = await fetch(
        'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'
      )
      // 解析為js的資料類型
      const data = await res.json()
      console.log(data)

      if (Array.isArray(data)) {
        // 設定到狀態
        setProducts(data)

        // 資料讀完後，關閉載入動畫
        setTimeout(() => {
          setIsLoading(false)
        }, 2000)
      }
    } catch (error) {
      console.error(error)
    }
  }

  // 初次渲染「之後」(after)，向伺服器要求資料，設定到狀態中
  useEffect(() => {
    getProducts()
  }, [])

  // 載入動畫html
  const loader = (
    <div className={styles['lds-facebook']}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )

  // 商品資料
  const display = (
    <ul>
      {products.map((v, i) => {
        return (
          <li key={v.id}>
            <Link href={`/cs-0205/product/${v.id}`}>
              {v.name}/{v.price}
            </Link>
          </li>
        )
      })}
    </ul>
  )

  console.log('render')
  return (
    <>
      <h1>商品列表頁</h1>
      <hr />
      {isLoading ? loader : display}
    </>
  )
}
