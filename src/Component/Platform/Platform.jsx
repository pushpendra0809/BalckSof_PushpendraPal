import React from 'react'
import style from "../Platform/Platform.module.css"
import Image from "../Media/Platform.png"
const Platform = () => {
  return (
    <>
      <div className={style.Platform}>
        <div className={style.mainheading}>
            <p>The paltform assists city manegers </p>
            <p>on multiple fronts</p>
        </div>
        <div className={style.Card1}>
            <div className={style.section1}>
                <div className={style.ImageCard}>
                    <img src={Image} alt="" />
                </div>
                <div className={style.cardDetails}>
                    <p>Saves on power consumption & related costs</p>
                </div>
            </div>
            <div className={style.section2}>
               <div className={style.ImageCard}>
                    <img src={Image} alt="" />
                </div>
                <div className={style.cardDetails}>
                    <p>Lowers </p>
                    <p> Downtimes</p>
                </div>
            </div>
        </div>
        <div className={style.Card2}>
            <div className={style.section1}>
                <div className={style.ImageCard}>
                    <img src={Image} alt="" />
                </div>
                <div className={style.cardDetails}>
                    <p>Detects power thefts.</p>
                </div>
            </div>
            <div className={style.section2}>
               <div className={style.ImageCard}>
                    <img src={Image} alt="" />
                </div>
                <div className={style.cardDetails}>
                    <p>Ensures smart monitoring and control of the street light infrastructure. </p>
                </div>
            </div>
        </div>
        <div className={style.Card3}>
            <div className={style.section1}>
                <div className={style.ImageCard}>
                    <img src={Image} alt="" />
                </div>
                <div className={style.cardDetails}>
                    <p>Ensure real-time actionable analytics on power failures, 
                        lamp malfunctions, voltage failures, etc.</p>
                </div>
            </div>
            <div className={style.section2}>
               <div className={style.ImageCard}>
                    <img src={Image} alt="" />
                </div>
                <div className={style.cardDetails}>
                    <p>Ensures security in the neighborhood. </p>
                </div>
            </div>
        </div>

      </div>
    </>
  )
}

export default Platform
