import React,{memo} from "react";
import './services.css';
import { useState } from "react";
import { useEffect } from "react";
import ModalExample from '../Account/Account'
function Services(){
    const [activeModal, setActiveModal] = useState(0)
    
    return(
        <section className="services" id='services'>
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Web Designer</h3>
                    </div>
                    
                    <span onClick={()=>setActiveModal(1)} className="services__button">View More{" "}
                    <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={(activeModal===1)?"services__modal active-modal":"services__modal"}>
                        <div className="services__modal-content">
                          
                            <i onClick={()=>setActiveModal(0)} className="uil uil-times services__modal-close">    
                            </i>
                     
                            <h3 className="services__modal-title">Web Designer</h3>
                            <p className="services__modal-description">
                                I offer this and more personalized services ,
                                please reach out to learn more. I always put clients first.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    
                                    <p className="services__modal-info"><i className="uil uil-check-circle services__modal-icon"></i>{" "}I develop user interface systems</p>
                                </li>
                                <li className="services__modal-service">
                                    
                                    <p className="services__modal-info"><i className="uil uil-check-circle services__modal-icon"></i>{" "}Web Page Development</p>
                                </li>
                                <li className="services__modal-service">
                                    
                                    <p className="services__modal-info"><i className="uil uil-check-circle services__modal-icon"></i>{" "}Small and Large scale React js development</p>
                                </li>
                                <li className="services__modal-service">
                                    
                                    <p className="services__modal-info"><i className="uil uil-check-circle services__modal-icon"></i>{" "}I create ux element interactions</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Android Developer</h3>
                    </div>
                    <span onClick={()=>setActiveModal(2)} className="services__button">View More{" "}
                    <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={(activeModal===2)?"services__modal active-modal":"services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={()=>setActiveModal(0)} className="uil uil-times services__modal-close">    
                            </i>
                            <h3 className="services__modal-title">Android Developer</h3>
                            <p className="services__modal-description">
                                I offer this and more personalized services ,
                                please reach out to learn more. I always put clients first.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    
                                    <p className="services__modal-info"><i className="uil uil-check-circle services__modal-icon"></i>{" "}I develop user interface systems</p>
                                </li>
                                <li className="services__modal-service">
                                  
                                    <p className="services__modal-info"><i className="uil uil-check-circle services__modal-icon"></i>{" "}Android and Ios Development</p>
                                </li>
                                <li className="services__modal-service">
                                  
                                    <p className="services__modal-info"><i className="uil uil-check-circle services__modal-icon"></i>{" "}Small and Large scale React js development</p>
                                </li>
                                <li className="services__modal-service">
                                  
                                    <p className="services__modal-info"><i className="uil uil-check-circle services__modal-icon"></i>{" "}I create seemless ui/ux element interactions</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Graphics Designer</h3>
                    </div>
                    <span onClick={()=>setActiveModal(3)} className="services__button">View More{" "}
                    <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={(activeModal===3)?"services__modal active-modal":"services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={()=>setActiveModal(0)} className="uil uil-times services__modal-close">    
                            </i>
                            <h3 className="services__modal-title">Graphics Designer</h3>
                            <p className="services__modal-description">
                                I offer this and more personalized services ,
                                please reach out to learn more. I always put clients first.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    
                                    <p className="services__modal-info"><i className="uil uil-check-circle services__modal-icon"></i>{" "}I create advertisement banners</p>
                                </li>
                                <li className="services__modal-service">
                                    <p className="services__modal-info"><i className="uil uil-check-circle services__modal-icon"></i>{" "}Icon and Business cards</p>
                                </li>
                                <li className="services__modal-service">

                                    <p className="services__modal-info"><i className="uil uil-check-circle services__modal-icon"></i>{" "}Creative Ai art</p>
                                </li>
                                <li className="services__modal-service">
                               
                                    <p className="services__modal-info"><i className="uil uil-check-circle services__modal-icon"></i>{" "}Any other Canva Design😁</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </section>
    )
}

export default memo(Services)