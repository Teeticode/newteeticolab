import React,{memo,useEffect, useState} from 'react'
import {About, HeaderDash, HomeView, Services, Skills} from '../components-dash'
import '../App.css'
import { getUser } from '../redux-store/auth/UserSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getAbout, getPing } from '../redux-store/features/AboutSlice'
import { BarLoader, DotLoader } from 'react-spinners'
import { logout } from '../redux-store/auth/AuthSlice'
import { Avatar } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import { addToken } from '../redux-store/auth/AuthSlice'
import './vendor.css'

function Dash({}) {
  const dispatch = useDispatch()
  const [isDark, setIsDark] = useState(true)
  const {user,errorUser,loadingUser} = useSelector(state=>state.user)
  const {about, error, loading} = useSelector(state=>state.about)
  useEffect(()=>{
    
    dispatch(addToken())
    dispatch(getUser())
  },[])
  useEffect(()=>{
    if(isDark){
      document.body.classList.remove('dark')
      localStorage.setItem('isDark',isDark)
    }else{
      document.body.classList.add('dark')
      localStorage.setItem('isDark',isDark)
    }
  })
  useEffect(()=>{
    dispatch(getAbout(user?.userid))
  },[user])
  
  return (
    <div 
      style={{
        width:'100%!important'
      }}
    >
      {user?
      (
          <>
            {
      (loadingUser )?(
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
          width:'100% !important'
        }}>
          
      
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
        
          
          <HeaderDash isDark={isDark} setIsDark={setIsDark}/>
          <main className="main">
            <HomeView user={user} /> 
            <About user={user}/> 
            <Skills/>
            <Services/>
          </main>
        </div>

        
  
        </>
        
        )
      }
          </>
      ):(
        <div className="vendor_404"
                            
        >
            
            <p>{errorUser} !</p>
            <a href='#' onClick={()=>{dispatch(logout())}} style={{marginTop:'20px'}} className="button button--flex">Logout</a>
        </div>
      )  
    }
    </div>
  )
}

export default memo(Dash)