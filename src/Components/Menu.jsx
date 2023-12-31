import React, { useRef } from 'react'
import downIcon from "../assets/down.png"

const Menu = ({title}) => {
    const element  = useRef(null)
    const handleHover=()=>{
        element.current.style.display = "block"
        
    }
    const handleNonHover = ()=>{
        element.current.style.display = "none"
    }
  return (
<div className='menubar' onMouseEnter={handleHover} onMouseLeave={handleNonHover}>

    <div>
        <h4>
            {title}
        </h4>
        <img src={downIcon} alt="chevron-down"/>
    </div>
    <div ref={element} style={{display :"none"}}>
    <p>lorem ipsum</p>
    <p>lorem ipsum</p>
    <p>lorem ipsum</p>
    <p>lorem ipsum</p>
    <p>lorem ipsum</p>
    <p>lorem ipsum</p>
    <p>lorem ipsum</p>
    <p>lorem ipsum</p>
    </div>
</div>
  
  )
}

export default Menu