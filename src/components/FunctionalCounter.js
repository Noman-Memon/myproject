import React from 'react'
import { useState } from 'react'

export default function FunctionalCounter() {
  const [counter, setCounter] = useState(0)
  function increment() {
    setCounter(counter + 1)
  }
  return (
    <div>
      <div>Counter Value:{counter}</div>
      <button
        onClick={() => {
          increment()
        }}
      >
        Click
      </button>
    </div>
  )
}
