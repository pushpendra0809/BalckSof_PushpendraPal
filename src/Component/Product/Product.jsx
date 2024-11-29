import React from 'react'
import style from "../Product/Product.module.css"
import image from "../Media/streetlight.png"
// import image1 from "../Media/Arrow1.png"
import image2 from "../Media/icon_png.png"
const Product = () => {
  return (
    <>
     <div className={style.Product}>
        <div className={style.mainContainer}>
        <div className={style.heading}>
            <div className={style.mainName}>
                <p>Product</p>
            </div>
            <div className={style.details}>
                <p><span>Cutting-edge hardware,</span> offerings</p>
                <p>helping cities optimize resources and</p>
                <p>achieve smart development goals</p>
            </div>
            <div className={style.Category}>
                <button className={style.btn1}>Centralized Controle & Monitoring System</button>
                <button className={style.btn2}> NEMA-Mounted VOLC 1160</button>
                <button className={style.btn2}>Retrofit Street Light Controller VOLC 2160</button>
                <button className={style.btn2}>Retrofit Street Light Controller VOLC 2180</button>
                <button className={style.btn2}>Retrofit Street Light Controller VOLC 4180</button>
            </div>
            <div className={style.mainProduct}>
                <div className={style.section1}>
                    <img src={image} alt="" />
                    <div className={style.sideButton}>
                        <button>&lt;</button>
                    </div>
                </div>
                <div className={style.section2}>
                    <div className={style.allDetailes}>
                        <div className={style.Pname}> 
                            <p>Product 1/5</p>
                        </div>
                        <div className={style.PHeading}> 
                            <h3>Centralized Controle & Monitoring System</h3>
                        </div>
                        <div className={style.discription}> 
                            <p>Designed indigenously for street light projects,
                                the CCMS offers acomplete feederpanel a
                                group of 30-50 street light.
                            </p>
                        </div>
                        <div className={style.morebtn}>
                            <p>Know more</p>
                            <div className={style.morebtnImage}>
                            <img src={image2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={style.sideButton2}>
                        <button>&gt;</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div> 
    </>
  )
}

export default Product
