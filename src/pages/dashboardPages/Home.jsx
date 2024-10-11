import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const redirectHome = () => {
    navigate("/")
  }

  return (
    <div className='w-1/2 h-1/2 m-auto text-center cursor-pointer' onClick={redirectHome}>Click to Redirect to Login page</div>
  )
}

export default Home