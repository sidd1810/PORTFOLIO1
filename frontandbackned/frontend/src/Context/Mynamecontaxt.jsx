import { createContext,useEffect,useState } from 'react'

export const myContext=createContext(null);

export const Provider=(props)=>
{
    const [sm,setSm]=useState(false)
    useEffect(()=>{
      if(window.innerWidth<="640")
        {
       setSm(true);
        
      }
      else{
        setSm(false)
      }
      
      window.addEventListener("resize",()=>{
        if(window.innerWidth<="640")
          {
         setSm(true);
          
        }
        else{
          setSm(false)
        }
      })
      },[])
      return(
           <myContext.Provider value={{sm}}>
            {props.children}
           </myContext.Provider>
      )
}

