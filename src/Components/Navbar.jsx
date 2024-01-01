import React, { useContext } from 'react'
import './Navbar.css';
import Menu from './Menu';
import search from "../assets/search.png"
import { Screen } from '../Context/ScreenContext';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const {isMobile} = useContext(Screen)
  return (
    <nav>
        <h1>LOGO</h1>
        {isMobile ?<MobileMenu/>:<div className='desktop'>
    <Menu title="Qualifications"/>
    <Menu title="Organizations"/>
    <Menu title="Research & Analysis"/>
    <Menu title="Lorem ipsum"/>
    <Menu title="Lorem ipsum"/>
    <img src={search} alt="search" />
    <button>Enrolment</button>
        </div>}
        
    </nav>
  )
}

export default Navbar