import React from 'react'
import styles from '@/components/cart/cart.module.css'

export default function CartList({
  items = [],
  increment = () => {},
  decrement = () => {},
  notifySADelete = () => {},
}) {
  return (
    <>
      <ul className={styles['list']}>
        {items.map((v, i) => {
          return (
            <li className={styles['item']} key={v.id}>
              <div className={styles['w-400']}>{v.name}</div>
              <div>{v.price}</div>
              <div>
                <button
                  onClick={() => {
                    increment(items, v.id)
                  }}
                >
                  +
                </button>
                <span>{v.qty}</span>
                <button
                  onClick={() => {
                    if (v.qty > 1) {
                      decrement(items, v.id)
                    } else {
                      notifySADelete(items, v.id)
                    }
                  }}
                >
                  -
                </button>
              </div>
              <div>小計：{v.qty * v.price}</div>
              <div>
                <button
                  onClick={() => {
                    notifySADelete(items, v.id)
                  }}
                >
                  移除
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
