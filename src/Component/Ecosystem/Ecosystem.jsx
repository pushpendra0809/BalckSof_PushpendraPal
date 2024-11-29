import React from 'react'
import style from "../Ecosystem/Ecosystem.module.css"
import image from "../Media/street_light_controler.png"
import image1 from "../Media/gateway_png.png"
import image2 from "../Media/cloud_based.png"
import image3 from "../Media/users_png.png"
import image4 from "../Media/evaluation_png.png"

const Ecosystem = () => {
  return (
    <div className={style.EcosystemContainer}>
      <div className={style.mainContainer}>
        <div className={style.heading}>
            <div className={style.mainName}>
                <p>Ecosystem</p>
            </div>
            <div className={style.details}>
                <p>How does a smart street</p>
                <p>light ecosystem work?</p>
            </div>
        </div>
        <div className={style.workingSystem}>
            <div className={style.iteam2}>
                <div className={style.card1}>
                    <div className={style.light1}>
                        <img src={image} alt="" />
                    </div>
                    <div className={style.light1}>
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className={style.card2}>
                    <h6>Street Light Controller</h6>
                    <p>Activates/deactivates in response to   motion/light sensing and controle   the brightness of the street lamp</p>
              
                </div>
            </div>
            <div className={style.line}></div>
            <div className={style.iteam}>
                <div className={style.card1}>
                    <div className={style.gateway}>
                        <img src={image1} alt="" />
                    </div>
                </div>
                <div className={style.card2}>
                    <h6>Gateway</h6>
                    <p>Employed for interfacing between a  Controller and  the  Light Management Software.</p>
                  
                </div> 
            </div>
            <div className={style.line}></div>
            <div className={style.iteam}>
                <div className={style.card1}>
                    <div className={style.gateway}>
                        <img src={image2} alt="" />
                    </div>
                </div>
                <div className={style.card2}>
                    <h6>Cloud-based management System.</h6>
                    <p>Collects information from multiple gateways. Collects information from multiple gateways</p>
                </div>
            </div>
            
        </div>
        <div className={style.line2}></div>
        <div className={style.line3}></div>

        <div className={style.workingSystem2}>
            
            <div className={style.iteam}>
                <div className={style.card1}>
                    <div className={style.gateway}>
                        <img src={image3} alt="" />
                    </div>
                </div>
                <div className={style.card2}>
                    <h6>Users</h6>
                    <p>Data from the Cloudis used to monitor </p>
                    <p>and controle street lights by the system managers</p>
                  
                </div> 
            </div>
            <div className={style.iteam}>
                <div className={style.card1}>
                    <div className={style.gateway}>
                        <img src={image4} alt="" />
                    </div>
                </div>
                <div className={style.card2}>
                    <h6>Evaluation</h6>
                    <p>Gathered insights are used to  </p>
                    <p>evalued the perfomance of the lighting systems.</p>

                </div>
            </div>
            
        </div>

      </div>
    </div>
  )
}

export default Ecosystem
