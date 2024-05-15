import React from 'react'
import cake from '../src/assets/Images/category/cake.jpg'
import ice from '../src/assets/Images/category/ice.jpg'
import cross from '../src/assets/Images/cross.png'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div className='cart'>
         <h2 style={{padding:"0px 0px 20px 0px"}}>Carts:</h2>
        <div className="cart-table">
           
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Tittle</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img className='table-item-img' src={cake}/></td>
                        <td>Tittle</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Total</td>
                        <td><img className='table-item-remove' src={cross}/></td>
                    </tr>
                    <tr>
                        <td><img className='table-item-img' src={ice}/></td>
                        <td>Tittle</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Total</td>
                        <td><img className='table-item-remove' src={cross}/></td>
                    </tr>
                </tbody>
            </table>

        </div>
        <div className="cart-info">
            <div className='amount-info'>
            <div className='sub-total'>
                <p>Sub Total</p>
                <p>$ 70</p>
            </div>
            <hr/>
            <div className='delivery-fee'>
            <p>Delivery Fee</p>
            <p>$ 30</p>
            </div>
            <hr/>
            <div className='total'>
                <p>Total</p>
                <p>$ 100</p>
            </div>
          <button> <Link to="/mychoice_ui/orderPage">Proceed To Order</Link></button> 
        </div>
        <div className="promo-code">
            <p>If You Have Promo Code ,Enter it Here</p>
            <div className='input-box'>
                <input type='text' placeholder='Enter Prome Code'/>
                <p>Submit</p>
            </div>
        </div>

        </div>
            <h2></h2>

    </div>
  )
}

export default Cart