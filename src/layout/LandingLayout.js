import React from 'react'
import { Outlet } from 'react-router-dom'
import './landingLayout.scss'
import Navbar from '../components/nav/Navbar'

const LandingLayout = () => {
  return (
    <div className='layout'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default LandingLayout