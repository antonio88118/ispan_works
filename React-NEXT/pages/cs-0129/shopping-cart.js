import { useState } from 'react'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
]

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts)

  // 刪除
  const deleteProduct = (products, id) => {
    return products.filter((v, i) => {
      return v.id !== id
    })
  }

  // 增加數量用，傳入商品陣列與要更動的商品id，回傳一個新的商品陣列
  const increment = (products, id) => {
    return products.map((v, i) => {
      if (v.id === id) return { ...v, count: v.count + 1 }
      else return v
    })
  }

  const decrement = (products, id) => {
    return products.map((v, i) => {
      if (v.id === id) return { ...v, count: v.count - 1 }
      else return v
    })
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            // 增加數量
            onClick={() => {
              setProducts(increment(products, product.id))
            }}
          >
            +
          </button>
          <button
            // 減少數量
            onClick={() => {
              // 剩餘數量1的時候，減少商品數量會刪除該商品
              if (product.count === 1) {
                setProducts(deleteProduct(products, product.id))
              } else {
                setProducts(decrement(products, product.id))
              }
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  )
}
