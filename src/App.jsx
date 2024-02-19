import Navbar from './components/Navbar'
import Card from './components/Card'
import './styles/App.css'

function App() {
  return (
    <>
      <Navbar />
      <section className='cards'>
        <Card />
      </section>
    </>
  )
}

export default App
