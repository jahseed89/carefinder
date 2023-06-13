import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LandingLayout from '../layout/LandingLayout'
import { ABOUT_ROUTE, FINDER_ROUTE, HOME_ROUTE } from '../content-management/Landing'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Finder from '../pages/finder/Finder'

const LandingRoute = () => {
  return (
    <Routes>
        <Route element={<LandingLayout />}>
            <Route index element={<Navigate to="home" />} />
            <Route path={HOME_ROUTE} element={<Home />} />
            <Route path={ABOUT_ROUTE} element={<About />} />
            <Route path={FINDER_ROUTE} element={<Finder />} />
        </Route>
    </Routes>
  )
}

export default LandingRoute