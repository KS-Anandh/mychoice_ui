import React from 'react'
import { Link } from 'react-router-dom'
const Banner = () => {
  return (
    <div className='banner'>
            <div className="info">
                <h1>Order your </h1><h1>favorite food here</h1>
                <p>A hotel app will provide a better platform to house your guest loyalty program by allowing the guests to collect points for different actions they take on the app. They can then go to a hub to see their progress and potentially cash in their rewards instantly.</p>
                <p className='btn'><Link to="/mychoice_ui/carts">View Cart</Link></p>
            </div>
    </div>
  )
}

export default Banner