import React, { useState } from 'react'
import search from '../src/assets/Images/search.png'
import logo from '../src/assets/Images/user.webp'
import cart from '../src/assets/Images/cart.webp'
import cross from '../src/assets/Images/cross.png'
import { Link, redirect ,useNavigate} from 'react-router-dom'

const NavBar = () => {
    const [nav ,setNav]=useState('home');
    const navigate=useNavigate();
    const login=()=>{
            const btn=document.getElementById('login')
            btn.classList.add('active') 
            const body=document.getElementById('body')
            body.classList.add('active') 
    }
    const loginClose=()=>{
            const btn=document.getElementById('login')
            btn.classList.remove('active')    
    }
    const PageDirect=()=>{
        const value=document.getElementById("select").value;
        if(value==='login'){
            login()}
        navigate(`/${value}`);}
   
  return (
    <div className='navBar'>
        <div className="left-navBar">
            <h1>MyChoice.</h1>
        </div>
        <div className="center-navBar">
            <ul>
            {nav==='home'?<li style={{color:'orangered'}}><Link to="/">Home</Link></li>:<li onClick={()=>{setNav('home')}}><Link to="/">Home</Link></li>}
            {nav==='Orders'?<li style={{color:'orangered'}}><Link to="/carts">My Cart</Link></li>:<li onClick={()=>{setNav('Orders')}}><Link to="/carts">My Cart</Link></li>}
            {nav==='Contact'?<li style={{color:'orangered'}}><Link to="/orders">My Orders</Link></li>:<li onClick={()=>{setNav('Contact')}}><Link to="/orders">My Orders</Link></li>}
            {nav==='About'?<li style={{color:'orangered'}}>About Us</li>:<li onClick={()=>{setNav('About')}}>About Us</li>}
            </ul>
            <select className='navBar-2' onChange={PageDirect} id="select" >
                <option value="">Home</option>
                <option value="carts">My Carts</option>
                <option value="orders">My Orders</option>
                <option value="login" >Login</option>
                <option value="about">About Us</option>
            </select>
        </div>
        <div className="right-navBar">
            <img src={search}/>
            <img src={cart}/>
            <p onClick={login}>Sign in</p>
        </div>
        <div className="loginForm" id='login'>
            <div className='login-header'>
                <h2>Login</h2>
                <img src={cross} onClick={loginClose} />
            </div>
            <div className='login-form'>
                <form>
                <input type="mail" placeholder='Your mail' required/><br/>
                <input type="password" placeholder='password' required/><br/>
                <input type='submit' value={'Login'}/>
                <input type='checkbox'/> I Agree to terms of use and private policy
                <p>Create a new account ? <span className='color'>Click here</span></p>
                </form>

            </div>
        
        </div>
    </div>
  )
}

export default NavBar