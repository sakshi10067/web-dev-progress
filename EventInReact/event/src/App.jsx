import './App.css'
import { useState } from 'react'

function App() {
  const handleClick=()=>{
    alert("Button Clicked")
  }
  // const [name,setName]=useState("Sakshi")
  const [Form, setForm]=useState({email:"", phone:""})

  const handleChange=(e)=>{
    setForm({...Form, [e.target.name]: e.target.value})
  }
  

  return (
    <>
     <div className="btn">
      <button onClick={handleClick}>Click Me</button>
     </div>

     {/* <input type="text" value={name} onChange={handleChange}/> */}
     <input type="email" name="email" value={Form.email} onChange={handleChange}/>
     <input type="text" name="phone" value={Form.phone} onChange={handleChange}/>
    </>
  )
}

export default App
