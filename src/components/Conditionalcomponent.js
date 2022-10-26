import React from 'react'
import { useState } from 'react'

export default function ConditionalComponent() {
  const [display] = useState(true)
  // let output //use of "element variable"

  // if (display) {
  //   output = <h2>Display True</h2>
  // } else {
  //   output = <h2>Display False</h2>
  // }
  // return <div>{output}</div>

  // ternary approach

  return display ? (
    <div>
      <h2>Display True</h2>
    </div>
  ) : (
    <div>
      <h2>Display false</h2>
    </div>
  )
}
