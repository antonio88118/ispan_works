import { createContext, useContext, useState } from 'react'

// 1. 建立並導出context
export const CartContext = createContext()

// 協助全站(_app.js)裡套用Provider的元件，集中要使用的狀態
export function CartProvider({ children }) {
  // 共享狀態(state)
  const [items, setItems] = useState([])

  // 在購物車中，遞增某商品數量
  const increment = (items, id) => {
    const newItems = items.map((v, i) => {
      if (v.id === id) return { ...v, qty: v.qty + 1 }
      else return v
    })
    setItems(newItems)
  }

  // 在購物車中，遞減某商品數量
  const decrement = (items, id) => {
    const newItems = items.map((v, i) => {
      if (v.id === id) return { ...v, qty: v.qty - 1 }
      else return v
    })
    setItems(newItems)
  }

  // 刪除商品
  const deleteItem = (items, id) => {
    const newItems = items.filter((v, i) => {
      return v.id !== id
    })
    setItems(newItems)
  }

  // 新增商品至購物車
  const addItem = (item) => {
    // 檢查商品是否已存在購物車，若存在，則增加數量
    const index = items.findIndex((v, i) => {
      return v.id === item.id
    })
    if (index > -1) {
      increment(items, item.id)
      return // 跳出函式，接下來的函式不執行
    }

    // 原先的商品資料（物件）中沒有「數量」屬性，需要先擴充
    const newItem = { ...item, qty: 1 }
    // 新增商品(item)到購物車（陣列）
    const newItems = [...items, newItem]
    // 更新購物車狀態
    setItems(newItems)
  }

  // 計算總價
  const clacTotalPrice = () => {
    let totalPrice = 0
    for (let i = 0; i < items.length; i++) {
      totalPrice += items[i].price * items[i].qty
    }
    return totalPrice
  }

  // 計算總數量(reduce方法範例)
  // acc：累進器，初始值0
  const clacQty = items.reduce((acc, v) => acc + v.qty, 0)

  return (
    // 用value屬性傳入共享狀態(state)
    <CartContext.Provider
      value={{
        items,
        addItem,
        increment,
        decrement,
        deleteItem,
        clacTotalPrice,
        clacQty,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// 給消費者們包裝好專用於此的hook名稱
export const useCart = () => useContext(CartContext)
