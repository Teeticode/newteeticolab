import React,{memo} from "react";
import './skills.css';
import Frontend from "./Frontend";
import Backend from "./Backend";
import AddInfo from './AddInfo';
import { useSelector } from "react-redux";

function Skills(){
    const {about} = useSelector(state=>state.about)
    const {skill} = useSelector(state=>state.skill)
    const {user} = useSelector(state=>state.user)
    return(
        <section className="section skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">This Are My Skills</span>
            
                <div className="section__subtitle">
                    {
                        (skill)?(
                            <AddInfo skill={skill} user={user}/>
                        ):(
                            <AddInfo skill={skill} user={user}/>
                        )
                    }
                </div>
           
        </section>
    )
}

export default memo(Skills)