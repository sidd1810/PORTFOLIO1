import React from 'react'
import sidd3 from "../assets/IMGES/sidd3.png"


function InfoBox(props) {
  return (
    <>
        <div className='flex'>
        <div className="w-2/5  grid mx-20 mt-20">
          <div className="grid gap-5">
            <h1 className="text-6xl font-extrabold text-neutral-50 hover:duration-1000  hover:text-sky-400"  >HI ,I AM SIDDHARTH VAGHELA UI/UX designer from India</h1>
            <div className='flex  gap-20 text-white '>
            <i class="bi bi-instagram text-5xl hover:text-7xl hover:text-sky-400 duration-300"></i>
            <i class="bi bi-instagram text-5xl hover:text-7xl hover:text-sky-400 duration-300"></i>
            <i class="bi bi-instagram text-5xl hover:text-7xl hover:text-sky-400 duration-300"></i>
            </div>
            <div className="flex gap-20">
            <button className="border border-sky-400 px-10 text-slate-200 font-extrabold rounded hover: duration-500  hover:px-20  hover:bg-sky-400">View WORK</button>
            </div>
          </div>
         </div>
         <div className='w-75 mr-20'>
         <img src={sidd3} className="mt-10  rounded-full" style={{
            filter:"drop-shadow(10px 10px 10px lightblue)"
          }} />
          </div>
         <div className="w-2/6  grid mx-20 mt-20">
          <div className="grid gap-5">
            <h1 className="text-5xl font-extrabold text-neutral-50 hover:duration-1000  hover:text-sky-400 hover:text-6xl *:"  >I LOVE TO DESIGN WEB SITE AND EXPLORE MORE</h1>
            <p className=" text-sky-50 font-mono hover: duration-1000 hover:text-sky-400 hover:text-2xl">"Practice make man perfect in any webdevolempent"</p>
            <div className="flex gap-20">
            
            </div>
          </div>

         </div>
         </div>
    </>
  )
}

export default InfoBox