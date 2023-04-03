import React,{memo} from "react";
import './about.css';
import '../../App.css';
import Info from "./Info";
import { useSelector } from "react-redux";
import AddInfo from "./AddInfo";
import EditModal from "../home/EditModal";


function About(){
    const {about} = useSelector(state=>state.about)
    return(
        <section className="section about" id='#about'>
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>
        
            <div className="section__subtitle" style={{display:'flex', alignItems:'center', justifyContent:'center', margin:'auto'}}>
                {about?(
                    <AddInfo about={about}/>
                ):(
                    <AddInfo about={about}/>
                )}
                
            </div>

        </section>
    )
}

export default memo(About)