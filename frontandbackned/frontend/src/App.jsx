import { useState,useEffect, useContext} from 'react'
import Button from './Component/Button'
import Input from './Component/Input'
import Home from './pages/home'
import KAKA from './assets/IMGES/KAKA.jpg'
import {Routes,Route, useLocation} from 'react-router-dom'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Project from './pages/Project'
import { myContext} from "./Context/Mynamecontaxt"
import papa from  "./assets/IMGES/papa.jpg"
import oaoa from "./assets/IMGES/oaoa.jpg"
import rara from  "./assets/IMGES/rara.jpg"





function App() {

  const [gadhado, doremon] = useState(0)
 
  const a=useContext(myContext);
  const location=useLocation()
  
   
  
  return (
 <>
 

 <div style={{backgroundImage:location.pathname=="/about"?`url(${rara})`:location.pathname=="/Service"?`url(${KAKA})`:location.pathname=="/Contact"?`url(${KAKA})`:`url(${KAKA})`,backgroundSize:a.sm?"":"100%",backgroundRepeat:"no-repeat ", }} className='h-screen overflow-x-hidden'>
 <Routes>
  <Route path='/' element={<Home/>}   />
  <Route path='/about' element={<About />}  />
  <Route path='/Service' element={<Service/>}></Route>
  <Route path='/Contact' element={<Contact/>}></Route>
  <Route path='/Project' element={<Project/>}></Route>
 </Routes>
 
 </div>
 
 </>
  )
}

export default App
