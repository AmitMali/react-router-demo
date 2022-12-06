import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
  return (

    <div className='bg-blue-200'> 
      <Navbar/>
        <section>
        <Outlet/>
      </section>
    </div>
  )
}

export default MainLayout