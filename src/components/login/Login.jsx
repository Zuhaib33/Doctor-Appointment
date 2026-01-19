import React, { useState } from 'react'

const Login = () => {
  let [state, setState] = useState("sing up")
  let [name, setname] = useState("")
  let [email, setemail] = useState("")
  let [password, setpassword] = useState("")

  let onchange = (event) => {
      event.preventDefault()
  }

  return (
    <div className='flex flex-col items-center mt-10'>
      <form className='md:w-1/3 pl-8 pr-2 py-8 shadow border border-zinc-200 rounded-xl'onSubmit={onchange}>
        <p className='text-3xl text-gray-600 font-semibold my-3'>
          {  state === 'sing up'
          ? 'Create account'
          :"Login"
        }
          </p>
        <p className='text-gray-600 my-2'>
          {  state === 'sing up'
          ? 'Please sign up to book appointment'
          :"Please log in to book appointment"
        }
        </p>
        {
          state === 'sing up' ?
            <> <label className='text-gray-600 mt-3 font-semibold' htmlFor="name">Name</label><br />

              <input onChange={(e) => setname(e.target.name)}
                input={name} 
                className='border border-zinc-200  w-7/8 h-9 mb-2 rounded-lg p-2'
                type="text" id='name' /><br />
                </>
            : null
        }
        <label className='text-gray-600 mt-3 font-semibold' htmlFor="Email">Email</label><br />

        <input 
          input={email} onChange={(e) => setemail(e.target.email)}
          className='border border-zinc-200  w-7/8 h-9 mb-2 rounded-lg p-2'
          type="email" id='Email' /><br />

        <label className='text-gray-600 mt-3 font-semibold' htmlFor="Password">Password</label><br />

        <input  
        input={password} onChange={(e) =>  setpassword( e.target.password)}
         className='border border-zinc-200  w-7/8 h-9 mb-2 rounded-lg p-2' 
        type="password" id='Password' /><br />

        <button  type="submit" className='bg-blue-500 text-white my-2 py-2 rounded-2xl items-center hover:font-semibold w-7/8'>
        {  state === 'sing up'
          ? 'Create account'
          :"Login"
        }
        </button>
        {
          state === 'sing up' ?
          <div>
            <p className='text-gray-600 my-2'>Already have an account?
            <span className=' text-blue-800 underline cursor-pointer' onClick={() => setState("log in")}>Log in</span>
            </p>
          </div>
          :<div>
            <p className='text-gray-600 my-2'>Create an new account?
            <span className=' text-blue-800 underline cursor-pointer' onClick={() => setState("sing up")}>Click here</span>
            </p>
          </div>
            
             
        }
        
      </form>
    </div>
  )
}

export default Login
