import React from 'react'
import './Title.css'

const Title = ({text1,text2}) => {
  return (
    <div className='title-text'>
        <p>{text1}</p>
        <p>{text2}</p>
        <p></p>
    </div>
  )
}

export default Title