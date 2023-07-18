import React from 'react'
import {Button} from '../../components/index'
import {error404} from '../../assets/index' 
import { useNavigate } from 'react-router-dom'
import { HOME_ROUTE } from '../../content-management/Landing'

const PageNotFound = () => {
    const navigate = useNavigate()
    const toHomePage = () => {
        navigate(`/${HOME_ROUTE}`)
    }
  return (
    <div style={{textAlign: 'center'}}>
        <h1 style={{marginTop: '3rem', marginBottom: '1rem'}}>404</h1>
        <img src={error404} alt='404' />
        <h2 style={{margin: '1rem 0'}}>Page Not Found.....</h2>

        <Button btnText="Back to Home Page" clickHandler={toHomePage} />
    </div>
  )
}

export default PageNotFound