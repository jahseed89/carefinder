import React from 'react'

const MyContext = React.createContext({
    loading: false,
    userData: {}
})
export default MyContext