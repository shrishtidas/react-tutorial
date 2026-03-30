import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

    // let counter = 15

    const addvalue = () => {
  setCounter(prev => {
  if(prev >= 25){
    alert("Maximum value reached ")
    return prev
  }
  return prev +1
  })
}

const removevalue = () => {
  setCounter(prev => {
    if (prev <= 0) {
      alert('Minimum value reached')
      return prev
    }
    return prev - 1
  })
}

  return (
    <>
    <div id = "page">
    <h1>Chai aur react</h1>
    <h2>Counter Value: {counter} </h2>
    <button id = "btn"
    onClick={addvalue}
    > Add Value</button>
    <br/>
    <button id = "btn2"
    onClick={removevalue}
    >Remove Value</button>
    </div>
    </>
  )
}

export default App
