import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/OIG1.jpeg'
import cart_icon from '../Assets/shopping-cart.png'
import { Link } from 'react-router-dom'
import { CatalogueContext } from '../../Context/Catalogue'



const Navbar = () => {
  
  const [menu, setMenu] = useState("home")
  const {getTotalCartItems} = useContext(CatalogueContext)


  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" id="logo" />
        <h4>ThinkFORMAL!</h4>
      </div>
     
      <ul className="nav-menu">
        <li onClick={()=> {setMenu("home")}}><Link style={{textDecoration: 'none', color: 'black'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("catalogue")}}><Link style={{textDecoration: 'none', color: 'black'}} to='/catalogue'>Catalogue</Link>{menu==="catalogue"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("about")}}><Link style={{textDecoration: 'none', color: 'black'}} to='/about'>About Us</Link>{menu==="about"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("contact")}}><Link style={{textDecoration: 'none', color: 'black'}} to='/contact'>Contact Us</Link>{menu==="contact"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/signup'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="navbar-cart-counter">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
