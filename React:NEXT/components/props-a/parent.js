import React from 'react'
import Child from './child'

export default function Parent() {
  return (
    <>
      <h2>Parent(父母元件)</h2>
      <Child
        text="你好"
        price={123}
        hasStock={true}
        doSum={(x, y) => x + y}
        aa={[1, 2, 3]}
        objA={{ a: 1, b: 2 }}
      />
      <hr />
      <Child />
    </>
  )
}
