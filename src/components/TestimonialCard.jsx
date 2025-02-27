import React from 'react'

const TestimonialCard = ({name,feedback}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{feedback}</h3>
    </div>
  )
}

export default TestimonialCard