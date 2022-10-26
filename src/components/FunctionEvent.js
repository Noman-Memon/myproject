import React from 'react'

export default function FunctionEvent() {
  function handleClick() {
    console.log('Button is Clicked')
  }
  return (
    <div>
      <button onClick={handleClick}>Click Here</button>
    </div>
  )
}
