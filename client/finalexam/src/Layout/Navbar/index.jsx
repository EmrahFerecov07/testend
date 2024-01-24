import React from 'react'
import "./index.scss"
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id='navbar'>
    <div className='navbox'>
    <div className='navleft'>
     <h2>....</h2>
    </div>
   <div className='navright'>
   <NavLink to={"/"}>Home</NavLink>
   <NavLink to={"/addpage"}>AddPage</NavLink>
   <NavLink to={"/wishlist"}>Wishlist</NavLink>
   <NavLink to={"/detail/:id"}>Detail</NavLink>
   <Link to={"/about"}>About</Link>
   <Link to={"/contact"}>Contact</Link>





   </div>




    </div>




    </nav>
  )
}

export default Navbar