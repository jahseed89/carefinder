import React from 'react'

const HospitalDataContext = React.createContext({
    loading: false,
    hospitals: [],
})
export default HospitalDataContext