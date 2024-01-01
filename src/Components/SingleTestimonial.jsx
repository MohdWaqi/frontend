import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const SingleTestimonial = ({total, matter}) => {
    const [countingOn, setCounting] = useState(false)
  return (
    <ScrollTrigger onEnter={()=>setCounting(true)}>
        
    <div>
          <h2>Lorem ipsum</h2>
          <h1>{ countingOn && <CountUp end={total} duration={2} delay={0.8}/>}+</h1>
          <h2>Lorem ipsum</h2>
          <p>{matter}</p>
        </div>
    </ScrollTrigger>
  )
}

export default SingleTestimonial