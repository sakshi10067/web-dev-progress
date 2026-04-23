// import Card from "./components/Card"
// import Footer from "./components/Footer"
// import Navbar from "./components/Navbar"

import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setshowBtn]=useState(true);

  

  // useEffect(() => {
  //   alert("Count has been updated: " + count)
  // }, [count])



  return (
    <>
      {/* <Navbar/>
      <div className="cards">
        <Card title="Card 1" description="This is the description for Card 1." />
        <Card title="Card 2" description="This is the description for Card 2." />
        <Card title="Card 3" description="This is the description for Card 3." />
      </div>
      <Footer/> */}
    {showBtn && <button>I will be shown only when true</button>}

    </>
  )
}

export default App
