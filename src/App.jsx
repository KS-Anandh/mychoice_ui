import React from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Menu from '../components/Menu'
import ListItems from '../components/ListItems'
import Footer from '../components/Footer'
import Cart from '../components/Cart'
import {Route,Routes,Router,BrowserRouter} from 'react-router-dom'
import Home from '../components/Home'
import OrderingPage from '../components/OrderingPage'
import Orders from '../components/Orders'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      <NavBar/>
      <Routes>
         <Route path="/mychoice_ui/" element={<Home/>}/>
         <Route path="/mychoice_ui/carts" element={<Cart/>}/>
         <Route path="/mychoice_ui/orderPage" element={<OrderingPage/>}/>
         <Route path="/mychoice_ui/orders" element={<Orders/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}
export default App