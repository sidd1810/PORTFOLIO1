import React from 'react'

function Login() {
  return (
    <>
    <div className='w-100  flex'>
      <div className='flex w-50 '>
        <h1 className='text-5xl mx-10 font-bold font-serif hover:text-lime-900  hover:text-7xl duration-1000' >logo</h1>
      </div>
      <div className='flex ms-auto gap-5 font-mono  '>
      <h1 className='text-3xl my-2 hover:text-5xl duration-1000'>HOME</h1>
      <h1 className='text-3xl my-2 hover:text-5xl duration-1000'>ABOUT</h1>
      <h1 className='text-3xl my-2 hover:text-5xl duration-1000'>SERVICE</h1>
      <h1 className='text-3xl my-2 hover:text-5xl duration-1000'>CONTACT</h1>
      <Button title='submit'></Button>
       </div>
    </div>
    <div className='rounded-3xl w-2/6 mt-20 mx-auto grid gap-5 p-5 shadow hover:shadow-fuchsia-950 duration-500' >
       <div className='mx-auto'>
       <h1 className='text-5xl'>login</h1>
       </div>
       <div className='gap-3'>
      <form action="" className='grid gap-5'>
        <Input  title='name'/>
        <Input  title='password' type='password'/>
        <div className='flex mx-auto gap-5 font-semibold'>
         <h3>rember me</h3>
         <h3>forget password</h3>
        </div>
       <button className='border border-black w-2/6 mx-auto rounded-2xl font-semiboldCDc'>login</button>
      </form>
      </div>
    </div>    
    </>
  )
}

export default Login