import React from 'react'

const Login = () => {
  return (
    <div className="bg-slate-400 h-screen flex justify-center items-center">
        <div className="absolute bg-slate-200 w-1/3 h-2/5 rounded-lg border-solid border-2 border-slate-800 p-1">
            <div className="">
                <h1 className='text-center p-1 m-1 font-medium text-2xl'>CHAT-APP</h1>
                <form action="" className="flex flex-col items-center">
                    <h2 className='text-center p-1 m-1 font-medium text-xl'>LOGIN</h2>
                    <div className='flex flex-col justify-center items-center'>

                    <input type="text" placeholder="Email" className='w-3/4 bg-slate-200 m-2 p-1 focus:outline-none border-b-slate-500 border-2'/>
                    <input type="text" placeholder="Password" className='w-3/4 bg-slate-200 m-2 p-1 focus:outline-none border-b-slate-500 border-2' />
                    </div>
    <button className="bg-slate-600 text-slate-200 rounded p-1 text-center w-1/5 m-4 cursor-pointer">Login</button>
                <div>
                    you dont have an account? <a href="#" className='text-blue-800 cursor-pointer'>Register</a>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login