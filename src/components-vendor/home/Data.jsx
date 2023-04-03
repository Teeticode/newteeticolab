import React,{memo} from 'react';


function Data() {
  return(
    <div className="home__data">
        <h1 className='home__title'>Dennis Kateeti</h1>
        <h3 className="home__subtitle">Full Stack Developer</h3>
        <p className="home__description">I'm a creative Designer based in Nairobi, Kenya
        and am very passionate and dedicated to my work and products.</p>
        <a href="#contact" className="button button--flex">
            Say Hello &nbsp; <i className="uil uil-message"></i>
        </a>
    </div>
   )
}
export default memo(Data)
