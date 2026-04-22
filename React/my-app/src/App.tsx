import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <div className="App">
      <div className="value">
        {count}
      </div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
        </>
   
  )
}

export default App
