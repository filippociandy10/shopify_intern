import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../rocket.svg'

export default function Navbar(){
    return(
        <nav className='navbar'>
            <div className='nav-center'>
                <Link to='/'>
                <img src={logo} alt='Rocket Logo' className='logo' />
                </Link>
                <ul className='nav-links'>
                <li>
                    <Link to='/'>home</Link>
                </li>
                <li>
                    <Link to='/favorites'>Favorites</Link>
                </li>
                </ul>
            </div>   
        </nav>
    )

}