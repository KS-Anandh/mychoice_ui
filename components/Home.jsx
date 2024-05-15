import React from 'react'
import Banner from './Banner'
import Menu from './Menu'
import ListItems from './ListItems'
const Home = () => {
  return (
    <div className='home'>
    <Banner/>
     <Menu/>
     <ListItems/>
    </div>
  )
}

export default Home