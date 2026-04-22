import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar/>
      <div className="cards">
        <Card title="Card 1" description="This is the description for Card 1." />
        <Card title="Card 2" description="This is the description for Card 2." />
        <Card title="Card 3" description="This is the description for Card 3." />
      </div>
      <Footer/>
    </>
  )
}

export default App
