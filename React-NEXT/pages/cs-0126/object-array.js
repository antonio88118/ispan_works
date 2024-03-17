import { useState } from 'react'

const objArray = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
]

export default function ObjectArray() {
  // 呈現(渲染)時會與使用者互動時進行改動，必需是state
  const [data, setData] = useState(objArray)

  return (
    <>
      <h1>物件陣列的各種操作</h1>
      <hr />
      <h2>資料表格</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.text}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <hr />
      <h2>操作</h2>
      <p>
        <strong>
          注意: 請在任一操作前先重新整理網頁 ，或是對重覆id值進行加入時的限制。
        </strong>
        有些操作是key值會對應id的關係，會產生key值重覆問題，造成不預期的結果。實務上務必要考慮key不可以重覆問題。
      </p>

      <button
        onClick={() => {
          // 先寫出要新增的物件值
          const newObj = { id: 99, text: 'xxx' }

          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          //   [newObj, ...data]
          // 2. 在新的變數值(陣列/物件)上作處理
          //   const newData
          // 3. 設定回原本的狀態中

          //1 //2
          const newData = [newObj, ...data]

          //3
          setData(newData)
        }}
      >
        1. 列表最前面，新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />

      <button
        onClick={() => {
          const newObj = { id: 88, text: 'yyy' }

          //1 //2
          const newData = [...data, newObj]

          //3
          setData(newData)
        }}
      >
        2. 列表最後面，新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />

      <button
        onClick={() => {
          // 產生不重複id(react作為key使用)的方法
          // 方法一: 專用函式庫(uuid/nanoid)
          //   const newId = self.crypto.randomUUID()

          // 方法二: 時間日期物件轉換成毫秒值(整數) 或 +new Date() 或 Date.now()
          const newId = Number(new Date())

          // 方法三: 隨機字串或hash
          // const newId = (Math.random() + 1).toString(36).substring(7)

          // 方法四: 模仿資料表自動遞增id的方式(限id為數字的情況)
          // 提取陣列中所有id
          //   const ids = data.map((v) => v.id)
          // 找到id最大值+1；若陣列中沒有id，令為1
          //   const newId = data.length > 0 ? Math.max(...ids) + 1 : 1

          // 要新增的物件值
          const newObj = { id: newId, text: 'xxx' }
          // 1+2
          const newData = [newObj, ...data]
          // 3
          setData(newData)
        }}
      >
        3. 列表最前面，新增一個文字為xxx的物件(id不能與其它資料重覆)
      </button>
      <br />

      <button
        onClick={() => {
          // 產生不重複id(react作為key使用)的方法
          // 方法一: 專用函式庫(uuid/nanoid)
          const newId = self.crypto.randomUUID()

          // 要新增的物件值
          const newObj = { id: newId, text: 'xxx' }
          // 1+2
          const newData = [...data, newObj]
          // 3
          setData(newData)
        }}
      >
        4. 列表最後面，新增一個文字為yyy的物件(id不能與其它資料重覆)
      </button>
      <br />

      <button
        onClick={() => {
          const newData = data.filter((v, i) => {
            return v.text.includes('a')
          })

          setData(newData)
        }}
      >
        5. 尋找(過濾)只呈現所有文字中有包含a英文字母的資料
      </button>
      <br />

      <button
        onClick={() => {
          const newData = data.filter((v, i) => {
            return v.text !== 'b'
          })

          setData(newData)
        }}
      >
        6. 刪除文字為b的物件資料
      </button>
      <br />

      <button
        onClick={() => {
          const newData = data.filter((v, i) => {
            return v.id !== 4
          })

          setData(newData)
        }}
      >
        7. 刪除id為4的物件資料
      </button>
      <br />

      <button
        onClick={() => {
          // 尋找id為2的元素索引值
          const index = data.findIndex((v, i) => {
            return v.id === 2
          })
          // 若找到，建立要新增的物件值
          if (index > -1) {
            const newObj = { id: 5, text: 'bbb' }
            // 若找到，回傳兩個子陣列 (以目標元素為基準分割成前 & 後)
            // 公式: subArray = array.slice(startIndex, [endIndex]) 注意不包含endIndex對應的元素，依情況需要 + 1
            const array1 = data.slice(0, index + 1)
            const array2 = data.slice(index + 1)
            // 與新物件合併成新的物件陣列
            const newData = [...array1, newObj, ...array2]
            // 設定狀態
            setData(newData)
          }
        }}
      >
        8. 在id為2後面插入id為5與文字為bbb的物件
      </button>
      <br />

      <button
        onClick={() => {
          const newData = data.map((v, i) => {
            if (v.id === 3) {
              // 物件中本來就存在text屬性，原本的值會被覆蓋；若改為content: 'cccc'，則會新增content屬性到物件中
              return { ...v, text: 'cccc' }
            } else {
              return v
            }
          })

          setData(newData)
        }}
      >
        9. 取代id為3的文字為cccc
      </button>
      <br />

      <button
        onClick={() => {
          setData([])
        }}
      >
        10. 清空表格
      </button>
    </>
  )
}
