import React from 'react'
import './_index.scss'

const NavigationChild = ({ icon, title, clickNav, id }) => {
  return (
    <li className='list' id={id} onClick={() => clickNav(id)}>
      <div>
        <span className='icon'>
          <ion-icon name={icon} />
        </span>
        <span className='title'>{title}</span>
      </div>
    </li>
  )
}

export default NavigationChild
