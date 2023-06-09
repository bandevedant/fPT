import React from 'react'
import NavbarTop from '../components/NavbarTop'
import UrlBody from '../components/UrlBody'
import Footer from '../components/Footer'
import Cart from '../components/Cart'
const Home = () => {
  return (
    <div>
      <NavbarTop/>
      <UrlBody/>
      <Cart/>
      <div id="footer">
      <Footer/>
      </div>
      
    </div>
  )
}

export default Home
