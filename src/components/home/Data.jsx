import React,{memo} from 'react';
import { useSelector } from 'react-redux';


function Data() {
  const {about, loading, error} = useSelector(state=>state.about)
  return(
    <div className="home__data">
        <h1 className='home__title'>{about?.user?.firstname} {about?.user?.lastname}</h1>
        <h3 className="home__subtitle">Full Stack Developer</h3>
        <p className="home__description">{about?.about}</p>
        <a href="#contact" className="button button--flex">
            Say Hello &nbsp; <i className="uil uil-message"></i>
        </a>
    </div>
   )
}
export default memo(Data)
