import React from 'react'
import { Outlet } from 'react-router-dom'
import './landingLayout.scss'
// import Navbar from '../components/nav/Navbar'
// import { LOGIN_ROUTE } from '../content-management/Landing'

const LandingLayout = () => {
  // const location = useLocation()
  // const isAuthenticationPage = location.pathname === LOGIN_ROUTE
  return (
    <div className='layout'>
        {/* {!isAuthenticationPage && <Navbar />} */}
        {/* <Navbar /> */}
        <Outlet />
    </div>
  )
}

export default LandingLayout