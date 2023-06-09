import React, { Suspense } from 'react'
import BrandLoader from '../components/brand-loader/BrandLoader'
import { Route, Routes } from 'react-router-dom'
import LandingRoute from './LandingRoute'

const GlobalRoute = () => {
  return (
    <>
        <Suspense fallback={<BrandLoader />}>
            <Routes>
                <Route path='/*' element={<LandingRoute />} />
            </Routes>
        </Suspense>
    </>
  )
}

export default GlobalRoute