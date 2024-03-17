import Link from 'next/link'
import React from 'react'
import ProductList from '@/components/cart/product-list'
import styles from '@/components/cart/cart.module.css'
import Navbar from '@/components/cart/navbar'
// hook context
import { useCart } from '@/hooks/use-cart'
// 前端路由
import { useRouter } from 'next/router'
// toast
import toast, { Toaster } from 'react-hot-toast'
// sweetalert2
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const mySwal = withReactContent(Swal)

export default function Product() {
  const { addItem } = useCart()
  const router = useRouter()

  // sweetalert
  const notifySA = (productName) => {
    mySwal
      .fire({
        position: 'center',
        icon: 'success',
        title: <>{`${productName} 已成功加入購物車`}</>,
        showConfirmButton: true,
        confirmButtonText: '前往購物車頁面',
        showDenyButton: true,
        denyButtonText: '停留在商品頁',
        timer: 5000,
      })
      .then((result) => {
        if (result.isConfirmed) {
          router.push('/cs-0201/checkout/cart')
        } else if (result.isDenied) {
          Swal.fire('祝您購物愉快', '', 'info')
        }
      })
  }

  // hot-toast
  const notify = (productName) => {
    const msgBox = (
      <>
        <p>{`${productName} 已成功加入購物車`}</p>
        <button
          onClick={() => {
            router.push('/cs-0201/checkout/cart')
          }}
        >
          前往購物車頁面
        </button>
      </>
    )
    toast.success(msgBox)
  }

  return (
    <>
      <div className={styles['container']}>
        <Navbar />
        <h1>商品列表頁</h1>
        <hr />
        <Link href="/cs-0201/checkout/cart">到 購物車頁面</Link>
        <div className={styles['product']}>
          <ProductList
            // 接下來要使用context共享狀態
            addItem={addItem}
            notify={notify}
            notifySA={notifySA}
          />
        </div>
      </div>
      <Toaster />
    </>
  )
}
