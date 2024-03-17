import { useState } from 'react'
import Link from 'next/link'
import CartList from '@/components/cart/cart-list'
import styles from '@/components/cart/cart.module.css'
import Navbar from '@/components/cart/navbar'
import { useCart } from '@/hooks/use-cart'

// sweetalert2
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const mySwal = withReactContent(Swal)

export default function Cart() {
  // 取用hook(context)
  const { items, increment, decrement, deleteItem, clacQty, clacTotalPrice } =
    useCart()

  // 購物車刪除訊息
  const notifySADelete = (items, id) => {
    mySwal
      .fire({
        position: 'center',
        icon: 'warning',
        title: '確認刪除商品？',
        showConfirmButton: true,
        confirmButtonText: '確認',
        showDenyButton: true,
        denyButtonText: '取消',
        timer: 4500,
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteItem(items, id)
          Swal.fire('商品已刪除', '', 'success')
        }
      })
  }

  return (
    <>
      <div className={styles['container']}>
        <Navbar />
        <h1>購物車</h1>
        <hr />
        <Link href="/cs-0201/checkout/product">到 商品頁面</Link>
        <div className={styles['cart']}>
          <CartList
            items={items}
            increment={increment}
            decrement={decrement}
            notifySADelete={notifySADelete}
          />
        </div>
        <hr />
        <div>
          總數量: {clacQty} / 總金額: {clacTotalPrice()}
        </div>
      </div>
    </>
  )
}
