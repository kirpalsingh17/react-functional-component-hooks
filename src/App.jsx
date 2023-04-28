import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increamentCount = () => setCount((prevCount)=> ++prevCount)

  const decrementCount = () => setCount((prevCount)=> --prevCount)

  return (
    <>
      <div>
      <h2>{count}</h2>
      </div>     
      <div className="card">
        <button onClick={increamentCount}>
          Increament
        </button>
        <button onClick={decrementCount}>
          Decreament
        </button>
      </div>     
    </>
  )
}

export default App
