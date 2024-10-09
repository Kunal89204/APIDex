import React from 'react'
import { SignIn } from '@clerk/clerk-react'

const Login:React.FC = () => {
  return (
    <div className='bg-black flex justify-center items-center w-[100vw] h-[100vh]'>
      <SignIn/>
    </div>
  )
}

export default Login
