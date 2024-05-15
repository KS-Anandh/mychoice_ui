import React from 'react'
import facebook from '../src/assets/Images/facebook.png'
import linkedin from '../src/assets/Images/linkedin.png'
import twitter from '../src/assets/Images/twitter.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>

       <div className="info">
        <div className='info-links'>
            <h2>MyChoice</h2>
            <p>Greet the customers as soon as they walk through the door, say hello once they sit at the
                    table, get drinks to them quickly</p>
            <div className="links">
                <img src={facebook}/>
                <img src={linkedin}/>
                <img src={twitter}/>
            </div>
        </div>

        <div className='company'> 
            <h2>Company</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/carts">My cart</Link></li>
                <li><Link to="/orders">My Orders</Link></li>
                <li><Link to="/">About us</Link></li>
            </ul>
        </div>

        <div className='contact'> 
            <h2>GET IN TOUCH</h2>
            <p>+91 9676906525<a href="tel:9676906525">: Click To Call</a></p>
            <p>Send email:<a href="mailto:nandhaanandh1432@gmail.com"> Click</a></p>
        </div>

       </div>
    </div>
  )
}

export default Footer