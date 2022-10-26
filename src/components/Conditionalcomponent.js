import React from 'react'
import { useState } from 'react'

export default function Conditionalcomponent() {
  const [display] = useState(false)

  if (display) {
    return (
      <div>
        <h2>Display True</h2>
      </div>
    )
  } else {
    return (
      <div>
        <h2>Display False</h2>
      </div>
    )
  }
}
