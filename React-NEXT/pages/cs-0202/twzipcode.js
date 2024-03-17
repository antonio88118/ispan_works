import React, { useState } from 'react'
import { countries, townships, postcodes } from '@/data/data-townships'

const cs = ['基隆市', '台北市']
const ts = [
  ['仁愛區', '信義區'],
  ['中正區', '大同區'],
]
const ps = [
  ['200', '201'],
  ['100', '103'],
]

export default function Twzipcode() {
  // 陣列索引值還沒被選擇的狀態，設為-1
  const [countryIndex, setCountryIndex] = useState(-1)
  const [townshipIndex, setTownshipIndex] = useState(-1)

  return (
    <>
      <h1>連動下拉式選單(台灣郵遞區號)</h1>
      {/* 縣市 */}
      <select
        value={countryIndex}
        onChange={(e) => {
          // e.target.value必為字串，需經過轉換
          setCountryIndex(Number(e.target.value))
        }}
      >
        {/* 預設選項，對應狀態初始值 */}
        <option value={-1}>請選擇縣市</option>
        {cs.map((v, i) => {
          return (
            <option value={i} key={i}>
              {v}
            </option>
          )
        })}
      </select>
      {/* 鄉鎮市區 */}
      <select
        value={townshipIndex}
        onChange={(e) => {
          setTownshipIndex(Number(e.target.value))
        }}
      >
        <option value={-1}>請選擇鄉鎮市區</option>

        {countryIndex > -1 &&
          ts[countryIndex].map((v, i) => {
            return (
              <option value={i} key={i}>
                {v}
              </option>
            )
          })}
      </select>
      {/* 郵遞區號 */}
      <p>
        郵遞區號:{' '}
        {countryIndex > -1 &&
          townshipIndex > -1 &&
          postcodes[countryIndex][townshipIndex]}
      </p>
    </>
  )
}
