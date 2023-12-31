import React from 'react'
import clock from "../assets/clock.svg"

const ExamDetails = ({date, exams}) => {
  return (
    <div className='details'>
        <img src={clock} alt='clock'/>
        <div>
            <h2>{date}</h2>
            {exams.map((exam, index) =><p key={index}>{exam}</p>)}
        </div>
    </div>
  )
}

export default ExamDetails