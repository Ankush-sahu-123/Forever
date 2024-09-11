import React from 'react'
import './NewsletterBox.css'

const NewsletterBox = () => {

    const onSubmitHandler = (event)=>{
        event.preventDefault();
    }

  return (
    <div className='newsletter'>
        <p>Subscribe now & get 20% off</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, itaque!</p>
        <form>
            <input type="email" placeholder='Enter your email'/>
            <button type='submit'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox