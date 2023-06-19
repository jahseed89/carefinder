import React from 'react'

const UserDataContext = React.createContext({
    loading: false,
    userData: {}
})
export default UserDataContext