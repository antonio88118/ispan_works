import React from 'react'
import products from '@/data/Product.json'
import styles from '@/components/cart/cart.module.css'

export default function ProductList({
  addItem = () => {},
  notify = () => {},
  notifySA = () => {},
}) {
  return (
    <>
      <ul className={styles['list']}>
        {products.map((v, i) => {
          return (
            <li className={styles['item']} key={v.id}>
              <div className={styles['w-400']}>{v.name}</div>
              <div>{v.price}</div>
              <div>
                <button
                  onClick={() => {
                    addItem(v)
                    // notify(v.name)
                    notifySA(v.name)
                  }}
                >
                  加入購物車
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
