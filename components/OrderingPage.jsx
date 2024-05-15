import React from 'react'

const OrderingPage = () => {
  return (
    <div className='orderingPage'>
        <div className="order-addr">
            <h2>Delivery Inforamtion</h2>
                <div className="two">
                    <input type="text" placeholder='First name'/>
                    <input type="text" placeholder='Secound name'/>

                </div>
                <div className="one">
                    <input type="mail" placeholder='Enter Mail'/>
                </div>
                <div className="one">
                <input type="text" placeholder='Complete Address'/>
                </div>
                <div className="two">
                 <input type="text" placeholder='City/Town' />
                 <input type="number" placeholder='pincode'/>
                </div>
                <div className="one">
                  <input type="number" placeholder='Phone No'/>
                </div>
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
            <button>Proceed To Order</button>
        </div>
        </div>
    </div>
  )
}

export default OrderingPage