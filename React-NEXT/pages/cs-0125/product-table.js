// 導入時就自動轉為JS資料格式
// @代表專案根目錄
import products from '@/data/Product.json'

export default function ProductTable() {
  console.log(products)
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>圖片</th>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {products.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>
                  <img src={`/pics/${v.photos.split(',')[0]}`} />
                </td>
                <td>{v.name}</td>
                <td>{v.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      {/* 在jsx中直接寫入css的方法 */}
      <style jsx>{`
        table {
          font-family: Arial, Helvetica, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }

        td,
        th {
          border: 1px solid #ddd;
          padding: 8px;
        }

        tr:nth-child(even) {
          background-color: #f2f2f2;
        }

        tr:hover {
          background-color: #ddd;
        }

        th {
          padding-top: 12px;
          padding-bottom: 12px;
          text-align: left;
          background-color: #04aa6d;
          color: white;
        }
      `}</style>
    </>
  )
}
