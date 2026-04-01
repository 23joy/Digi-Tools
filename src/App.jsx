
import { ToastContainer } from 'react-toastify'
import './App.css'
import Banner from './Component/Banner/Banner'
import Footer from './Component/Footer/Footer'
import MainTools from './Component/MainTools/MainTools'
import NavBar from './Component/NavBar/NavBar'
import PriceCard from './Component/PriceCard/PriceCard'
import StartStep from './Component/StartStep/StartStep'
import Stats from './Component/Stats/Stats'
import Workflow from './Component/Workflow/Workflow'
import Card from './Component/MainTools/Card'
import { useState } from 'react'


const digitoolsFetch=async()=>{
  const res=await fetch("/digitools.json")
  return res.json();
}
const digitoolsPromise=digitoolsFetch()

function App() {
   const [activeTab,setActiveTab] = useState("Products")
  const [card,setcard]=useState([])
  //console.log(activeTab)
  //console.log(Count)

  return (
    <>
    <NavBar card={card} />
    <Banner/>
    <Stats/>
    <StartStep/>
    <div>
      <div className='text-center m-10'>
        <h2 className='font-extrabold text-2xl'>Premium Digital Tools</h2>
            <p className='text-[#627382]'>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
      </div>
       
      <div className="flex justify-center bg-transparent mb-10">
        <input type="radio" 
        name="my_tabs_1"
        className={`tab rounded-full w-40 p-2  ${activeTab==="Products"?
          "bg-linear-to-r from-blue-700 to-fuchsia-500":
          "bg-white"
        }`}
        aria-label="Products"
        defaultChecked 
        onClick={()=>setActiveTab("Products")}

          />
        <input type="radio"
         name="my_tabs_1"
          className={`tab rounded-full w-40 p-2 ${activeTab==="Card" ?
            "bg-linear-to-r from-blue-700 to-fuchsia-500":
            "bg-white"
          }`} 
          aria-label={`Card(${card.length})`} 
          onClick={()=>setActiveTab("Card")}
         />
      </div>
    </div>
    {activeTab==="Products"&&<MainTools digitoolsPromise={digitoolsPromise} setcard={setcard} card={card}/>}
    {activeTab==="Card"&&<Card setcard={setcard} card={card}/>}
     <PriceCard/>
    <Workflow/>
    <Footer/>
    <ToastContainer/>
    </>
  )
}

export default App
