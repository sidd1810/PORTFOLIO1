import { useEffect, useState} from "react";
import myImage from '../assets/IMGES/Tata.png'
import Nav from "../Component/Nav";



function Home(){
    const[count,setCount]=useState(0)
    const[getData,setGetData]=useState(null)    
    useEffect(()=>{
      const fetchData=async()=>{
        const result=await fetch('http://localhost:3000/api',{
          method:"get"
          
        })
        const getingData=await result.json()
       setGetData(getingData)
      
        
      }
      fetchData()
     
      },[])
    

    return(
        <>
        
         <Nav></Nav>
         <div className="flex">
         <div className="w-2/4  grid mx-20 mt-20">
          <div className="grid gap-5">
            <h1 className="text-8xl font-extrabold text-neutral-50 hover:duration-1000  hover:text-sky-400"  >HI ,I AM SIDD</h1>
            <h1 className="text-7xl font-extrabold text-neutral-50 hover:text-6xl duration-1000  hover:text-sky-400">WEB DISIGNER</h1>
            <p className=" text-sky-50 font-mono hover: duration-1000 hover:text-sky-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eos doloribus velit alias consectetur reprehenderit illum voluptatum? Molestias sit doloribus veritatis ex debitis, exercitationem dicta. Debitis sed fugit est saepe!</p>
            <div className="flex gap-20">
            <button className="border border-sky-400 px-10  rounded  text-slate-200 font-extrabold  hover:duration-500   hover:bg-sky-400 hover:px-20">HIRE ME</button>
            <button className="border border-sky-400 px-10 text-slate-200 font-extrabold rounded hover: duration-500  hover:px-20  hover:bg-sky-400">LATEST WORK</button>
            </div>
          </div>
          <div>
            <h1 className="text-white gap-5 flex">
              {getData?.name}
              {getData?.hisfreind}

            </h1>
          </div>
          

         </div>
         <div className="w-60">
          <img src={myImage} className="mx-40 mt-16" style={{
            filter:"drop-shadow(10px 10px 10px lightblue)"
          }} />
         </div>
         </div>
        </> 
    )
}
export default Home