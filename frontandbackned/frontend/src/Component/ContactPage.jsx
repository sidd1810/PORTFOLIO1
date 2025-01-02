import { useEffect, useState } from 'react'
import Button from '../Component/Button.jsx'





function ContactPage(){
  const[name,setName]=useState("")
  const[email,setEmil]=useState("")
  const[message,setMessage]=useState("")
  const[getData,setGetData]=useState(null)
  
 

const handleSubmit=async(e)=>{
  e.preventDefault()
  const result=await fetch("http://localhost:3000/contactpage",{
    method:"post",
    body:JSON.stringify({name:name,email:email,message:message})  ,
    headers:{
      "Content-Type":"application/json"
    }
  })
  const resultData=await result.json()
  setGetData(resultData)
  console.log(getData)
  
}

    return(

    <>
    <div className='flex w-full'>
      
      <div className="w-2/4  grid mx-20 mt-20">
          <div className="grid gap-5">
            <h1 className="text-6xl font-extrabold text-neutral-50 hover:duration-1000  hover:text-sky-400"  >GET , in touch</h1>
            <p className="text-2xl font-extrabold text-neutral-50 hover:duration-1000  hover:text-sky-400">Would you like to work with me?don't hesitate work together just fill the detail and enjoy the work with me and also join new opportunity</p>
            <a href='youtube.com ' className=' font-bold text-neutral-50 hover:duration-1000  hover:text-sky-400 hover:text-2xl'>heelo@inthnia</a>
            <a href='youtube.com' className=' font-bold text-neutral-50 hover:duration-1000  hover:text-sky-400 hover:text-2xl'>+8200230085</a>
            <div className="flex gap-20 text-white">
            <i class="bi bi-instagram text-5xl hover:text-blue-300 hover:text-8xl duration-1000"></i>
            <i class="bi bi-instagram text-5xl  hover:text-blue-300 hover:text-8xl duration-1000"></i>
            <i class="bi bi-instagram text-5xl  hover:text-blue-300 hover:text-8xl duration-1000"></i>
            </div>
          </div>
         </div>
         <div>
          <h1 className='text-red-300'>{getData?.name}</h1>
         </div>
    
    <div className="w-2/6 mt-20">
      <div className="  rounded-lg shadow-lg p-6 hover:shadow-sky-400 duration-1000 hover:bg-amber-100 ">
 
        <form className="grid gap-5">
          <div>
           
           
            <input
             onKeyUp={(e)=>{
              setName(e.target.value)
            }}
              type="text"
              id="name" 
              className="w-full px-4 py-2  border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
            onKeyUp={(e)=>{
              setEmil(e.target.value)
            }}
              type="email"
              id="email"
             className='w-full rounded border'
              placeholder="Your Email"

            />
          </div>
          <div>
            <label className="block  font-medium text-gray-700 mb-1" htmlFor="message">
              Message
            </label>
            <input type=" text" className='w-full rounded py-5'
             onKeyUp={(e)=>{
              setMessage(e.target.value)
            }} />
          </div>
         <Button 
         onClick={handleSubmit}
         className={{
            textColor:"text-yellow-500",
            bgColor:"bg-violet-800",
            hover:{
              bgColor:"hover:bg-red-700",
              textColor:"hover:text-pink-700"
            }
            
         }} 
         
         title="kaka"
         >
         
         </Button>
    
        </form>
      </div>
    </div>
    </div>
    </>

    )
}
export default ContactPage