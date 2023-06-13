import React from 'react'
import './docsAvatar.scss'

const DocsAvatar = ({avata, name, possition, hospital}) => {
  return (
    <div className='docs-avatar'>
        <div className='avatar-holder'>
            <img src={avata} alt='avatar'/>
        </div>
        <p>{name}</p>
        <span>{possition}</span>
        <span>{hospital}</span>

    </div>
  )
}

export default DocsAvatar