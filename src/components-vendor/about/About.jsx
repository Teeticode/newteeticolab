import React,{memo} from "react";
import './about.css';
import '../../App.css';
import Info from "./Info";


function About(){
    return(
        <section className="section about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>
        
            <h1 class="text-3xl font-bold underline">
                Hello world!
            </h1>

        </section>
    )
}

export default memo(About)