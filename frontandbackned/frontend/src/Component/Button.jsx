import {} from 'react';

const Button=(props)=>
{
 console.log(props.className);
 
return(
    <button onClick={props.onClick} className={`border border-sky-400 w-fit mx-auto rounded-xl p-3 duration-150 ${props.className?.textColor?props.className.textColor:"text-black"} ${props.className?.hover?.textColor?props.className.hover.textColor:""} ${props.className?.hover?.bgColor?props.className.hover.bgColor:""} ${props.className?.bgColor?props.className.bgColor:"bg-slate-50"}`} >{props.title}</button>
)

}

export default Button

