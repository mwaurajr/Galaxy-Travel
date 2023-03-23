import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {
  return (
    <div  className='header'>
        <Link to='/'><h1>GLX-TVL</h1></Link> 
        <ul className='nav-menu'>
            <li>
                <Link to='/'>Home</Link>
            </li>

            <li>
                <Link to='/pricing'>Pricing</Link>
            </li>

            <li>
                <Link to='/training'>Training</Link>
            </li>

            <li>
                <Link to='/contact'>Contact</Link>
            </li>

        </ul>

        <div className='hamburger'> 
       
        <FaBars size={20} style={{color: '#fff'}} />
       
        </div>
        

        </div>
  )
}

export default Navbar