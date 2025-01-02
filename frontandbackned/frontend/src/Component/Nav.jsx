import {} from 'react'
import { useNavigate,useLocation} from 'react-router-dom' //use navigattion adn uselocation hook chee...and react router dom dependency apde in
//react router dom i library and aema function hase je hook kevay...use navi gate and uselocation
import papa from '../assets/IMGES/papa.jpg'


function Nav(){
     const navigate=useNavigate()
     const location=useLocation()
     console.log(location.pathname);
     
    return(
        <>
       <nav>
         <div className="w-full flex pe-2">
          <div className="sm:w-50 flex mx-auto my-auto"> 
           <h1 className="sm:text-5xl  text-sky-50 font-bold sm:hover:text-6xl hover:text-lg duration-700 hover:text-sky-400">V</h1>
           <h1 className="sm:text-5xl  text-sky-50 font-bold sm:hover:text-6xl hover:text-lg duration-700  hover:text-sky-400">I</h1>
           <h1 className="sm:text-5xl  text-sky-50 font-bold sm:hover:text-6xl hover:text-lg duration-700  hover:text-sky-400">C</h1>
           <h1 className="sm:text-5xl  text-sky-50 font-bold sm:hover:text-6xl hover:text-lg duration-700  hover:text-sky-400">T</h1>
           <h1 className="sm:text-5xl  text-sky-50 font-bold sm:hover:text-6xl hover:text-lg duration-700  hover:text-sky-400">I</h1>
           <h1 className="sm:text-5xl  text-sky-50 font-bold sm:hover:text-6xl hover:text-lg duration-700 hover:text-sky-400">M</h1>
           
          </div>
          <div className="sm:ms-auto flex my-auto sm:gap-5 gap-2 sm:px-10 sm:mx-10  text-sky-50 font-bold ">
            <h1 className={`sm:text-2xl hover:text-3xl duration-1000  hover:text-sky-400 ${location.pathname=="/"?"text-sky-400":""}`} onClick={()=>{navigate('/')}}>HOME</h1>
            <h1 className={`sm:text-2xl hover:text-3xl duration-1000  hover:text-sky-400 ${location.pathname=="/about"?"text-sky-400":""}`} onClick={()=>{navigate('/about')}}>ABOUT</h1>
            <h1 className={`sm:text-2xl hover:text-3xl duration-1000  hover:text-sky-400 ${location.pathname=="/Service"?"text-sky-400":""}`}  onClick={()=>{navigate('/Service')}}>SERVICE</h1>
            <h1 className={`sm:text-2xl hover:text-3xl duration-1000  hover:text-sky-400 ${location.pathname=="/Project"?"text-sky-400":""}`}  onClick={()=>{navigate('/Project')}}>PROJECT</h1>
            <h1 className={`sm:text-2xl hover:text-3xl duration-1000  hover:text-sky-400 ${location.pathname=="/Contact"?"text-sky-400":""}`}  onClick={()=>{navigate('/Contact')}}>CONTACT</h1>
            
          </div>
       
         </div>
         </nav>
        
        </>
    )
}
export default Nav