import React from 'react'

const HospitalDataContext = React.createContext({
    loading: false,
    hospitals: {},
    isAuthenticated: false,
    setIsAuthenticated: null
})
export default HospitalDataContext