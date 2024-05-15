import React from 'react'

const Orders = () => {
  return (
    <div className='orders'>
        <h2>My Orders</h2>
        <div className='order-container'>
            <div className='order'>
                <p className='logo'></p>
                <p>Pizza Special</p>
                <p>$ 96</p>
                <p>Items:2</p>
                <p><span style={{color:"green",fontSize:"22px"}}>*</span> Accepted</p>
                <p className='traceOrderBtn'>Trace Order</p>
            </div>
        </div>
    </div>
  )
}

export default Orders