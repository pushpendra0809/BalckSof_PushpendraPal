import React from 'react'
import style from "../Footer/Footer.module.css"
import Logo from "../Media/Logo_2.png"
import Image from "../Media/Footer.png"
const Footer = () => {
  return (
    <>
     <div className={style.Footer}>
        <img className={style.LogoImage}src={Image} alt="" />
        <div className={style.mainContainer}>
          <div className={style.Card1}>
            <div className={style.logo}>
                <img src={Logo} alt="" />
            </div>
            <div className={style.list}>
                <li className={style.iteam}> Product</li>
                <li className={style.iteam}> Software Services</li>
                <li className={style.iteam}> Follow Us</li>
            </div>
           </div>
           <div className={style.Card2}>
            <div className={style.termContion}>
                <p>Privacy Policy </p>
                <span>|</span>
                <p>Terms & Conditions</p>
                <span>|</span>
                <p>Cookie Policy</p>
            </div>
           </div>
        </div> 
    </div> 
    </>
  )
}

export default Footer
