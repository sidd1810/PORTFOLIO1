import {useState} from 'react';


function Input (props) {
        
    const [name, setName] = useState('');
    const handleInput=(e)=>
        {
              setName(e.target.value);
             
        }
    return(
            <>
            
                <div className='w-fit mx-auto  grid p-2 rounded-lg hover:shadow-red-950 shadow'>
                <label htmlFor="">Enter The {props.title}</label>
                <input type={!props.type?"text":props.type} onChange={handleInput} className=' border-b-2 border-black outline-none ' />
                </div>    

            </>
        
    )

}

export default Input;