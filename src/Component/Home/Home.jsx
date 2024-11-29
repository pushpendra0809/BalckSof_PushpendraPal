import React from 'react'
import style from "../Home/Home.module.css"
import Image from "../Media/Hero_section.png"
import Ecosystem from '../Ecosystem/Ecosystem'
import Product from '../Product/Product'
import Platform from '../Platform/Platform'
import Footer from '../Footer/Footer'
const Home = () => {
  return (
    <>
     <div className={style.heroContainer}>
      <div className={style.container}>
        <img src={Image} alt="" />
        <div className={style.tagline}>
          <p>Smart Lighting Solution</p>
          <h3>Bringing A New Perspective To Street Lights</h3>
          <h3>And The cities Of Tommorow.</h3>
          <div className={style.btnf}>
            <button> Login</button>
          </div>
        </div>
        </div>
    </div> 
    <Ecosystem />
    <Product />
    <Platform />
    <Footer />
    </>
  )
}

export default Home
