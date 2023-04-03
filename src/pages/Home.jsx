import React,{memo, useState,useEffect} from 'react'
import {About, Header, HomeView, Qualifications, Services, Skills} from '../components'
import '../App.css'
import { Avatar, createStyles, makeStyles } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BarLoader, PuffLoader } from 'react-spinners'
import { getUser } from '../redux-store/auth/UserSlice'
import { getAbout } from '../redux-store/features/AboutSlice'
import Footer from '../components/footer/Footer'
import "./vendor.css"
function Home() {
  const dispatch = useDispatch()
  
  const [isDark, setIsDark] = useState(localStorage.getItem('isDark'))
    const id = useParams()
    const {loading,about} = useSelector(state=>state.about)
    const [userid,setId] = useState(id?.userId)
  useEffect(()=>{
    dispatch(getUser())
    setIsDark(localStorage.getItem('isDark'))
  },[])
  
  useEffect(()=>{
      dispatch(getAbout(userid))
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
  return (
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
      <main className="main">
        <HomeView/> 
        <About/> 
        <Skills/>
        <Services/>
        <Footer/>
      </main>
      
        </>
      )
    }
      

      
    </>
  )
}



export default memo(Home)