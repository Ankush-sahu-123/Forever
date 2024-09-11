import React from 'react'
import { assets } from '../../assets/assets'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero-container'>
            <div className='hero-text-section'>
                <div className="hero-text-box">
                <div className='text1'>
                    <p className='line'></p>
                    <p className="first">OUR BESTSELLERS</p>
                </div>
                <p className="second">Latest Arrivals</p>
                <div className='text1'>
                    <p className="first">SHOP NOW</p>
                    <p className='line'></p>
                </div>
                </div>
                
            </div>
            <div className='hero-img'>
                <img src={assets.hero_img} alt="" />
            </div>
        </div>
    )
}

export default Hero