import React from 'react'
import { bubble as Menu } from 'react-burger-menu'
import "./MobileMenu.css"

const MobileMenu = () => {
  return (
    <Menu right noOverlay>
        <p>Qualifications</p>
        <p>Organizations</p>
        <p>Research & Analysis</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Search</p>
        <p className='btn'>Enrolment</p>
        <p></p>
        
      </Menu>
  )
}

export default MobileMenu