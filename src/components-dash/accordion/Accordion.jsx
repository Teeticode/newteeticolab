import React,{memo, useState,useEffect,useRef} from 'react';
import './accordion.css';
import Chevron from './Chevron';
import { PuffLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { getAbout } from '../../redux-store/features/AboutSlice';
function Accordion(props) {
    const [active, setActive] = useState("")
    const [height, setHeight] = useState("0px")
    const [rotate,setRotate] = useState('')
    const dispatch = useDispatch()
    const {user,loadingUser} = useSelector(state=>state.user)
    const {loading} = useSelector(state=>state.about)
    const content = useRef(null)
    
    
    function getAboutButton(){
        dispatch(getAbout(user?.userid))
    }
    function toggleAccordion (){
        dispatch(getAbout(user?.userid))
        setActive(active === ""?"active":"" )
        setHeight(active === ""?"0px":`500px`)
        setRotate(active === ''?'accordion__icon':'accordion__icon rotate')
        
            
    }
  return (
    <div className="accordion__section">
        <button className={`accordion ${active}`} onClick={toggleAccordion} >
            <p className="accordion__title">{props.title}</p>
            <></>
            <div className={`accordion__icon `} onClick={getAboutButton}>
            <Chevron loading={loading} loadingUser={loadingUser} className={`uil uil-sync`}  width={10} fill={'#777'}/>
            </div>
        </button>
        {
            (loading)?(
                <div
            style={{
                width:'20px',
                height:'20px',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                position:'absolute',
                marginRight:'3%'
            }}
            >
                <PuffLoader size={5} style={{width:"100%!important"}} color='#0077b5'/>
            </div>
            ):(
                <div ref={content} style={{maxHeight: `${height}`}} className="accordion__content">
            <div 
                className="accordion__text"
            >{props.content}</div>
        </div>
            )
        }
        
    </div>
  )
}

export default memo(Accordion)