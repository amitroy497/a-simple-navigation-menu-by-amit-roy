import React, { useState, useEffect } from 'react'
import './_index.scss'
import menu from '../../menu.json'
import NavigationChild from '../navigationChild'

const NavigationMenu = () => {
  const [prevState, setPrevState] = useState(1)

  const activeNav = (val) => {
    if (prevState !== val) {
      document.getElementById(prevState).classList.remove('active')
      setPrevState(val)
    }
  }

  useEffect(() => {
    document.getElementById(prevState).classList.add('active')
  }, [prevState])

  return (
    <nav className='navigation'>
      <ul>
        {menu.map((item) => (
          <NavigationChild
            key={item.id}
            id={item.id}
            icon={item.icon}
            title={item.title}
            clickNav={activeNav}
          />
        ))}
      </ul>
    </nav>
  )
}

export default NavigationMenu
