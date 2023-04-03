import React,{memo} from "react";
import './services.css';
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import InfoModal from "./InfoModal";
import AddInfo from "./AddInfo";

function Services(){
    const [activeModal, setActiveModal] = useState(0)
    const {about} = useSelector(state=>state.about)
    const {user} = useSelector(state=>state.user)
    return(
        <section className="services" style={{marginBottom:'90px'}}>
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            {
                about?(
                    <div className="section__subtitle">
                        <AddInfo about={about} user={user}/>
                    </div>
                ):(
                    <div className="section__subtitle">
                        <AddInfo about={about} user={user}/>
                    </div>
                )
            }
        </section>
    )
}

export default memo(Services)