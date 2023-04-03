import React,{memo} from "react"
import './home.css';
import '../../App.css'
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown.jsx";
function HomeView(){
    return(
        <section className="section home" id="home">
            <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
        </section>
    )
}

export default memo(HomeView)