import React, { useState } from 'react'
import { useEffect } from 'react';
import {Toast} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { loginUser } from '../../redux-store/auth/AuthSlice';
import { useDispatch,useSelector } from 'react-redux';
import {FadeLoader} from 'react-spinners';
import BeatLoader from 'react-spinners/BeatLoader';
const ToastDiv = ({error,setError})=>{
    return(
        <Toast style={{backgroundColor:'#ffd9d9'}} onClose={()=>{setError("")}}>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className='rounded me-2' alt="" />
                <strong className="me-auto">Login</strong>
                <small>Now</small>
            </Toast.Header>
            <Toast.Body>{error}</Toast.Body>
        </Toast>
    )
}
const ToastDivSuccess = ({msg,setMsg})=>{
    return(
        <Toast style={{backgroundColor:'#26b999'}} onClose={()=>{setMsg("")}}>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className='rounded me-2' alt="" />
                <strong className="me-auto">Message</strong>
                <small>Now</small>
            </Toast.Header>
            <Toast.Body>{msg}</Toast.Body>
        </Toast>
    )
}

export default function Login({setLogin}) {
    const {errorLogin,message,loading} = useSelector(state=>state.auth)
    const dispatch = useDispatch();
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('')
    const [errorStatus, setError] = useState('')
    const [msgStatus, setMsg] = useState('')
    const [close, setClose] = useState(false)
    const [see, setSee] = useState(false)
    function handleLogin(){
        if(errorLogin){
            setError(errorLogin)
        }else{
            setError(null)
        }
        
        const logindata = {email,password}
        dispatch(loginUser(logindata))
        
    }
    useEffect(()=>{
        if(errorLogin){
            setError(errorLogin)
        }
        if(message){
            setMsg(message)
            setError(null)
        }
        
    },[errorLogin,message])
  return (
    <div className='account'>
        <div className="form login">
        
            <div className='form-content'>
              <h2 className="account__title">Login To Account</h2>
                
            
                <div className="field input-field">
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email' className="input" />
                </div>
                <div className="field input-field">
                    <input type={see?"text":"password"} value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' className="password" />
                    {(see)?(
                        <i onClick={()=>setSee(false)} className='uil uil-eye-slash view-psd' ></i>
                    ):(
                        <i onClick={()=>{setSee(true)}} className='uil uil-eye view-psd' ></i>    
                    )}
                </div>
            
                
            
                <div className="form-link">
                    <small className='forgot-password'>Forgot Password?</small>
                </div>
                {
                    errorStatus?(
                        <small style={{color:'#b92e34',fontWeight:'800'}}>{errorStatus}</small>
                    ):(
                        <></>
                    )
                }
                {
                    msgStatus?(
                        <small style={{color:'lightseagreen'}}>{msgStatus}</small>
                    ):(
                        <></>
                    )
                }
                <button onClick={handleLogin} className='account__button button button--flex'>{loading?<BeatLoader aria-setsize="10" color='mistyrose' loading={loading}/>:'Login'}</button>
                <div className="form-link">
                    <small className='register'>Dont Have An Account? <span className='account__change' onClick={()=>{setLogin(false)}}>Register</span></small>
                </div>
            </div>
            
            
            
        </div>
        
    </div>
  )
}
