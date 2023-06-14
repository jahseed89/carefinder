import React from 'react'
import Button from '../../components/button/Button'
import { useNavigate } from 'react-router-dom'
import { HOME_ROUTE } from '../../content-management/Landing'

const PageNotFound = () => {
    const navigate = useNavigate()
    const toHomePage = () => {
        navigate(`/${HOME_ROUTE}`)
    }
  return (
    <div>
        <h1>404</h1>
        <h2>Page Not Found.....</h2>

        <Button btnText="Navigate to Home Page" clickHandler={toHomePage} />
    </div>
  )
}

export default PageNotFound