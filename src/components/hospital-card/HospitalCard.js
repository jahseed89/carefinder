import React from 'react'
import { Link } from 'react-router-dom'
import { ABOUT_ROUTE } from '../../content-management/Landing'
import './hospitalCard.scss'

const HospitalCard = ({name, address, location, key}) => {
  return (
    <Link to={`/${ABOUT_ROUTE}`} className='hosp-card' key={key}>
        <h1>{name}</h1>
        <p>{address}</p>
        <h3>{location}</h3>
    </Link>
  )
}

export default HospitalCard