import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-component1'>
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error similique cum magnam commodi! Doloribus sapiente quia tempora quam id accusamus.</p>
            </div>

            <div className='footer-component2'>
                <p>COMPANY</p>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className='footer-component3'>
                <p>GET IN TOUCH</p>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@foreveryou.com</li>
                </ul>
            </div>
        </div>
        
        <div className='bottom-line'>
            <hr />
            <p>Copyright 2024@forever.com - All Rights Reserved.</p>
        </div>
        
    </div>
  )
}

export default Footer