import React from 'react'
import LoginNav from '../components/LoginNav'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='w-screen overflow-x-hidden flex flex-col items-center justify-center min-h-screen bg-[url("/bg_img.png")] bg-cover bg-center bg-no-repeat'>
      <LoginNav/>
      <Header/>
    </div>
  )
}

export default Home
