import React from 'react'
import { useState } from 'react'

export default function Form() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  function handleChange(event) {
    setFirstName(event.target.value)
  }
  return (
    <div>
      Form
      <form
        onSubmit={(event) => {
          event.preventDefault()
          console.log(firstName, lastName)
        }}
      >
        <input type="text" value={firstName} onChange={handleChange}></input>
        <input
          type="text"
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value)
          }}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  )
}
