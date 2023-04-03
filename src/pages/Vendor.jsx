import React, { useEffect } from "react"
import {About,Portfolio,Skills, Services, Testimonial, Contact, Experience, Header} from '../components-vendor/index'
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../redux-store/auth/UserSlice"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { getAbout } from "../redux-store/features/AboutSlice"
import { BarLoader } from "react-spinners"
import { addToken } from "../redux-store/auth/AuthSlice"
import { Avatar } from "@mui/material"
import { deepOrange } from "@mui/material/colors"

function Vendor({}){
    const dispatch = useDispatch()
    const id = useParams()
    const [userid,setId] = useState(id?.userId)
    const {token} = useSelector(state=>state.auth)
    const [isDark,setIsDark] = useState(true)
    const {about} = useSelector(state=>state.about)
    useEffect(()=>{
        dispatch(getUser())
    },[])
    useEffect(()=>{
        dispatch(getAbout(userid))
        dispatch(addToken())
    },[token])
    useEffect(()=>{
        if(isDark){
          document.body.classList.remove('dark')
          localStorage.setItem('isDark',isDark)
        }else{
          document.body.classList.add('dark')
          localStorage.setItem('isDark',isDark)
        }
      })
    const {loading} = useSelector(state=>state.about)
    return(
        <>
        {
            loading?(
                <div 
                className='loader_div'
                style={{
                  flexDirection:'column',
                  
                }}
              >   
              <div style={{fontWeight:'800'}}>
                <span style={{color:isDark?'white':'black'}}>Teeti</span><span style={{color:'#ffd9d9'}}>Colab</span>
              </div>
              <div 
                style={{width:'20px'}}
              >
              <BarLoader color='#ffd9d9'width='50%' style={{color:'#ffd9d9',width:'100%'}}/>
              </div>
              </div>
            ):(
                <>
                <div
        style={{
          display:'flex',
          alignItems:'center',
          justifyContent:'space-between'
        }}
        
      >
        <div style={{
          marginLeft:'3%',
          marginTop:'3%',
        }}
          className="header_avatar"
        >
        <Avatar
          alt="Remy Sharp"
          src={about?.image}
          sx={{ width: 50, height: 50,bgcolor: deepOrange[500] }}
        />
        </div>
        <div style={{marginRight:'2%',}}>
          {isDark?(<i onClick={()=>setIsDark(false)} className='uil uil-sun'></i>):(<i onClick={()=>setIsDark(true)} className='uil uil-moon'></i>)}
        </div>
      </div>
            <Header isDark={isDark} setIsDark={setIsDark}/>
            <About/>
            
            <Services/>
            <Testimonial/>
            <Skills/>
            <Contact/>
        </>
            )
        }
        
        </>
    )
}
export default Vendor