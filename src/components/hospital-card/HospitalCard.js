import React from 'react'
import './hospitalCard.scss'

const HospitalCard = ({name, address, location,}) => {
  return (
    <div className='hosp-card'>
        <h1>{name}</h1>
        <p>{address}</p>
        <h3>{location}</h3>
    </div>
  )
}

export default HospitalCard