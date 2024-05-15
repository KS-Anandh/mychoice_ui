import React from 'react'
import rating from '../src/assets/Images/rating.png'
import plus from '../src/assets/Images/plus.png'
import cake from '../src/assets/Images/category/cake.jpg'
import ice from '../src/assets/Images/category/ice.jpg'
import juce from '../src/assets/Images/category/juce.jpg'
import pizza from '../src/assets/Images/category/pizza.jpg'
const ListItems = () => {

  return (
    <div className='listItems'>
       <div className="info">
            <h2>Top Dishes Near You</h2>
       </div>
       <div className="items">

        <div className='item'>
            <div  className='img'>
                    <img  src={cake}/>
                    <img  className='addPlus' src={plus}/>
            </div>
            <div className='info'>
                 <div className='info-header'>
                 <h3>Name</h3>
                 <img src={rating}/>
                </div>
                <p>Greet the customers as soon as they walk through the door, say hello once they sit at the
                    table, get drinks to them quickly</p>
                <p className='price'>$ 90</p>
            </div>
        </div>

        <div className='item'>
            <div className='img'>
                    <img src={pizza}/>
                    <img  className='addPlus' src={plus}/>
            </div>
            <div className='info'>
                 <div className='info-header'>
                 <h3>Name</h3>
                 <img src={rating}/>
                </div>
                <p>Greet the customers as soon as they walk through the door, say hello once they sit at the
                    table, get drinks to them quickly</p>
                <p className='price'>$ 220</p>
            </div>
        </div>
        <div className='item'>
            <div  className='img'>
                    <img  src={juce}/>
                    <img  className='addPlus' src={plus}/>
            </div>
            <div className='info'>
                 <div className='info-header'>
                 <h3>Name</h3>
                 <img src={rating}/>
                </div>
                <p>Greet the customers as soon as they walk through the door, say hello once they sit at the
                    table, get drinks to them quickly</p>
                <p className='price'>$ 820</p>
            </div>
        </div>

        <div className='item'>
            <div className='img'>
                    <img src={ice}/>
                    <img  className='addPlus' src={plus}/>
            </div>
            <div className='info'>
                 <div className='info-header'>
                 <h3>Name</h3>
                 <img src={rating}/>
                </div>
                <p>Greet the customers as soon as they walk through the door, say hello once they sit at the
                    table, get drinks to them quickly</p>
                <p className='price'>$ 520</p>
            </div>
        </div>
        <div className='item'>
            <div  className='img'>
                    <img  src={cake}/>
                    <img  className='addPlus' src={plus}/>
            </div>
            <div className='info'>
                 <div className='info-header'>
                 <h3>Name</h3>
                 <img src={rating}/>
                </div>
                <p>Greet the customers as soon as they walk through the door, say hello once they sit at the
                    table, get drinks to them quickly</p>
                <p className='price'>$ 90</p>
            </div>
        </div>

        <div className='item'>
            <div className='img'>
                    <img src={pizza}/>
                    <img  className='addPlus' src={plus}/>
            </div>
            <div className='info'>
                 <div className='info-header'>
                 <h3>Name</h3>
                 <img src={rating}/>
                </div>
                <p>Greet the customers as soon as they walk through the door, say hello once they sit at the
                    table, get drinks to them quickly</p>
                <p className='price'>$ 220</p>
            </div>
        </div>
        <div className='item'>
            <div  className='img'>
                    <img  src={juce}/>
                    <img  className='addPlus' src={plus}/>
            </div>
            <div className='info'>
                 <div className='info-header'>
                 <h3>Name</h3>
                 <img src={rating}/>
                </div>
                <p>Greet the customers as soon as they walk through the door, say hello once they sit at the
                    table, get drinks to them quickly</p>
                <p className='price'>$ 820</p>
            </div>
        </div>

        <div className='item'>
            <div className='img'>
                    <img src={ice}/>
                    <img  className='addPlus' src={plus}/>
            </div>
            <div className='info'>
                 <div className='info-header'>
                 <h3>Name</h3>
                 <img src={rating}/>
                </div>
                <p>Greet the customers as soon as they walk through the door, say hello once they sit at the
                    table, get drinks to them quickly</p>
                <p className='price'>$ 520</p>
            </div>
        </div>



       </div>
    </div>
  )
}

export default ListItems