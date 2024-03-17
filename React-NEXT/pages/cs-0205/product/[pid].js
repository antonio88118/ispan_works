import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

// 得到單一商品的網址(網址上最後一個區段用 id):https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/1
// const demoItem =
//   {
//     id: '1',
//     picture: 'https://via.placeholder.com/150',
//     stock: 5,
//     name: 'iPhone 12 Pro',
//     price: 25000,
//     tags: '蘋果,大螢幕',
//   }

export default function Detail() {
  // 第1步. 由router中獲得動態路由(屬性名稱pid，即檔案[pid].js)的值
  // 執行(呼叫)useRouter，會回傳一個路由器
  // router.query中會包含pid屬性
  // router.isReady(布林值)，true代表本元件已完成水合作用(hydration)，可以取得router.query的值
  const router = useRouter()

  const [product, setProduct] = useState({
    id: '',
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tags: '',
  })

  // 向伺服器要求資料，設定到狀態中用的函式
  const getProduct = async (pid) => {
    try {
      const res = await fetch(
        `https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/${pid}`
      )

      // res.json()是解析res的body的json格式資料，得到JS的資料格式
      const data = await res.json()

      console.log(data)

      // 設定到state中，觸發重新渲染(re-render)，會進入到update階段
      // 進入狀態前檢查資料類型為陣列，以避免錯誤
      if (data.name) {
        setProduct(data)
      }
    } catch (e) {
      console.error(e)
    }
  }

  // 初次渲染"之後(After)"，向伺服器要求資料，設定到狀態中
  useEffect(() => {
    console.log(router.query)
    // 如果isReady是true，確保能得到query的值
    if (router.isReady) {
      const { pid } = router.query
      console.log(pid)
      getProduct(pid)
    }
  }, [router.isReady])

  console.log('render')
  //console.log(router.query, ' isReady=', router.isReady)

  return (
    <>
      <h1>商品詳細頁</h1>
      <Link href={'/cs-0205/product/list'}>回列表頁</Link>
      <hr />
      <p>ID: {product.id}</p>
      <p>名稱: {product.name}</p>
      <p>價格: {product.price > 0 && product.price}</p>
      <p>庫存: {product.stock > 0 && product.stock}</p>
    </>
  )
}
