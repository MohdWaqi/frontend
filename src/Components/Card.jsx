import React from 'react'
import readMore from "../assets/read.svg"

const Card = () => {
  return (
    <div className="card">
          <h2>Lorem ipsum</h2>
          <p>
            Suspendisse potenti. Aenean facilisis, urna id pharetra consequat,
            massa purus aliquet lorem, non tristique orci magna vel urna.
          </p>
          <div><p>Know More</p><img src={readMore}/></div>
        </div>
  )
}

export default Card