
import './App.css'
import Banner from './Component/Banner/Banner'
import Footer from './Component/Footer/Footer'
import NavBar from './Component/NavBar/NavBar'
import PriceCard from './Component/PriceCard/PriceCard'
import StartStep from './Component/StartStep/StartStep'
import Stats from './Component/Stats/Stats'
import Workflow from './Component/Workflow/Workflow'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Banner/>
    <Stats/>
    <StartStep/>
    <PriceCard/>
    <Workflow/>
    <Footer/>
    </>
  )
}

export default App
