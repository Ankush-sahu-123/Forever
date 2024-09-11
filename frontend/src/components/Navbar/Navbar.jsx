import React, { useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import {NavLink, Link} from 'react-router-dom'

const Navbar = () => {

    const [usermenu,setUsermenu]=useState(false);
    const [menu,setMenu]=useState(false);

  return (
    <div className='navbar'>
        <Link to={"/"}>
        <img className='logo' src={assets.logo} alt="" />
        </Link>
        <ul className='nav-list'>
            <NavLink to="/" className='navlink' >
                <p>HOME</p>
                <hr />
            </NavLink>
            <NavLink to="/collection" className='navlink' >
                <p>COLLECTION</p>
                <hr />
            </NavLink>
            <NavLink to="/about" className='navlink' >
                <p>ABOUT</p>
                <hr />
            </NavLink>
            <NavLink to="/contact" className='navlink' >
                <p>CONTACT</p>
                <hr />
            </NavLink>
        </ul>
        <div className="nav-icons">
            <img src={assets.search_icon} alt="" />
            <div onClick={()=>setUsermenu(prev=>!prev)} className="user-icon">
                <img src={assets.profile_icon} alt="" />
                <div className={usermenu ? "user-option active" : "user-option"}>
                    <p>My Profile</p>
                    <p>Orders</p>
                    <p>Logout</p>
                </div>
            </div>
            <Link to="/cart" className='cart'>
            <img src={assets.cart_icon} alt="" />
            <p>10</p>
            </Link>
            <img onClick={()=>setMenu(prev=>!prev)} className='menu-icon' src={assets.menu_icon} alt="" />
        </div>
        <div className={menu ? "sidebar active" : "sidebar "}>
        <ul className='sidebar-list'>
            <div onClick={()=>setMenu(false)} className="back">
                <img src={assets.dropdown_icon} alt="" />
                <p>Back</p>
            </div>
                <hr />
            <NavLink onClick={()=>setMenu(false)} to="/" className='side-link' >
                <p>HOME</p>
                <hr />
            </NavLink>
            <NavLink onClick={()=>setMenu(false)} to="/collection" className='side-link' >
                <p>COLLECTION</p>
                <hr />
            </NavLink>
            <NavLink onClick={()=>setMenu(false)} to="/about" className='side-link' >
                <p>ABOUT</p>
                <hr />
            </NavLink>
            <NavLink onClick={()=>setMenu(false)} to="/contact" className='side-link' >
                <p>CONTACT</p>
                <hr />
            </NavLink>
        </ul>
        </div>
    </div>
  )
}

export default Navbar