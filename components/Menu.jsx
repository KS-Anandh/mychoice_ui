import React from 'react'
import cake from '../src/assets/Images/category/cake.jpg'
import juce from '../src/assets/Images/category/juce.jpg'
import pizza from '../src/assets/Images/category/pizza.jpg'
import ice from '../src/assets/Images/category/ice.jpg'
import tee from '../src/assets/Images/category/tee.jpg'

const Menu = () => {
    return (
        <div className='menu'>
            <div className="menu-about">
                <h2>Explore our menu</h2>
                <p>Greet the customers as soon as they walk through the door, say hello once they sit at the
                    table, get drinks to them quickly, check on the customers within two minutes of delivering food, make sure to refill drinks </p>
            </div>
            <div className="menu-list">

                <div className="item">
                    <img src={cake}/>
                    <p>Cake</p>
                </div>
                <div className="item">
                    <img src={juce}/>
                    <p>juce</p>
                </div>
                <div className="item">
                    <img src={pizza}/>
                    <p>pizza</p>
                </div>
                <div className="item">
                    <img src={ice}/>
                    <p>ice</p>
                </div>
                <div className="item">
                    <img src={tee}/>
                    <p>tee</p>
                </div>

            </div>
            <hr/>
        </div>
    )
}

export default Menu