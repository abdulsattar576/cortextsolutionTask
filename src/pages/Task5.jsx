 import React, { useState } from 'react'

const Task5 = () => {
  const [firstNumber, setFirstNumber] = useState("")
  const [secondNumber, setSecondNumber] = useState("")
  const [result, setResult] = useState(null)

  const addTwoNumbers = () => {
   
    const sum = Number(firstNumber) + Number(secondNumber)
    setResult(sum)
  }

  return (
    <div>
      <h1>Calculator: Add Two Numbers</h1>

      <input 
        type="number" 
        placeholder="Enter the first number" 
        value={firstNumber}
        onChange={(e) => setFirstNumber(e.target.value)} 
      />

      <input 
        type="number"  
        placeholder="Enter the second number" 
        value={secondNumber}
        onChange={(e) => setSecondNumber(e.target.value)} 
      />

      <button 
        onClick={addTwoNumbers} 
        disabled={firstNumber === "" || secondNumber === ""}
      >
        ADD
      </button>

      {result !== null && <h2>Result: {result}</h2>}
    </div>
  )
}

export default Task5
