import React,{memo} from "react";
import './skills.css';
import Frontend from "./Frontend";
import Backend from "./Backend";

function Skills(){
    return(
        <section className="section skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">This Are My Skills</span>
            <div className="skills__container container grid">
                <Frontend/>
                <Backend/>
                <Frontend/>
                <Backend/>
            </div>
        </section>
    )
}

export default memo(Skills)