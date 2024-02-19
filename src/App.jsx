import Navbar from './components/Navbar'
import Card from './components/Card'
import places from "./data/places.js"
import './styles/App.css'

function App() {
  const Cards = places.map((place) => {
    return (
      <Card
        {...place}
      />
    )
  })

  return (
    <>
      <Navbar />
      <section className='cards'>
        {Cards}
      </section>
    </>
  )
}

export default App
