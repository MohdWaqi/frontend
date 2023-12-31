import React from 'react'
import './Navbar.css';
import Menu from './Menu';
import search from "../assets/search.png"

const Navbar = () => {
  return (
    <nav>
        <h1>LOGO</h1>
        <div>

    <Menu title="Qualifications"/>
    <Menu title="Organizations"/>
    <Menu title="Research & Analysis"/>
    <Menu title="Lorem ipsum"/>
    <Menu title="Lorem ipsum"/>
    <img src={search} alt="search" />
    <button>Enrolment</button>
        </div>
    </nav>
  )
}

export default Navbar