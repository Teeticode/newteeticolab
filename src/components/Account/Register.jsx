import React from 'react'
import { signupUser } from '../../redux-store/auth/AuthSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import { Toast } from 'react-bootstrap';
import BeatLoader from 'react-spinners/BeatLoader';

const ToastDiv = ({error,setError2})=>{
  return(
      <Toast style={{backgroundColor:'#ffd9d9'}} onClose={()=>{setError2("")}}>
          <Toast.Header>
              <img src="holder.js/20x20?text=%20" className='rounded me-2' alt="" />
              <strong className="me-auto">Register</strong>
              <small>Now</small>
          </Toast.Header>
          <Toast.Body>{error}</Toast.Body>
      </Toast>
  )
}
const ToastDivSuccess = ({message,setMsg})=>{
  return(
      <Toast style={{backgroundColor:'#26b999'}} onClose={()=>{setMsg("")}}>
          <Toast.Header>
              <img src="holder.js/20x20?text=%20" className='rounded me-2' alt="" />
              <strong className="me-auto">Register</strong>
              <small>Now</small>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
      </Toast>
  )
}

export default function Register({setLogin}) {
  const [email, setEmail] = useState('')
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [password, setPsd] = useState('')
  const [confirm, setPsdConfirm] = useState('')
  const [errorStatus, setError2] = useState('')
  const [messageStatus, setMsg] = useState('')
  const {errorReg, loading, message} = useSelector(state=>state.auth)
  const [see, setSee] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    if(errorReg){
      setError2(errorReg)
    }else{
      setError2(null)
    }
    
    
    if(message){
      setError2(message)
      setLogin(true)
    }
  }, [errorReg,message,password, confirm])
  function handleRegister(){
    if(errorReg){
      setError2(errorReg)
    }
    if(password !== confirm){
      setError2('Passwords should match')
    }
      dispatch(signupUser({email, firstname, lastname, password,confirm}))
    
  }
  return (
    <div>
    <div className="account">
        
        <div className="form login">
        
            <div className='form-content'>
              <h2 className="account__title">Create New Account</h2>
                <div className='field input-field'>
                  <input type="text" value={firstname} onChange={(e)=>setFirstName(e.target.value)} placeholder='First Name' className="account__input" />
                </div>
                <div className='field input-field'>
                  <input type="text" value={lastname} onChange={(e)=>setLastName(e.target.value)} placeholder='Last Name' className="account__input" />
                </div>
               <div className="field input-field">
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email' className="input" />
                </div>
                <div className="field input-field">
                    <input type={see?"text":"password"} value={password} onChange={(e)=>setPsd(e.target.value)} placeholder='Password' className="password" />
                    {(see)?(
                        <i onClick={()=>setSee(false)} className='uil uil-eye-slash view-psd' ></i>
                    ):(
                        <i onClick={()=>{setSee(true)}} className='uil uil-eye view-psd' ></i>    
                    )}
                </div>
                <div className="field input-field">
                    <input type={see?"text":"password"} value={confirm} onChange={(e)=>setPsdConfirm(e.target.value)} placeholder='Password' className="password" />
                    
                </div>
            
                
            
                <div className="form-link">
                    <small className='forgot-password'>Forgot Password?</small>
                </div>
                {
                    errorStatus?(
                        <small style={{color:'#b92e34', fontWeight:'800'}}>{errorStatus}</small>
                    ):(
                        <></>
                    )
                }
                
                <button onClick={handleRegister} className='account__button button button--flex'>{loading?<BeatLoader aria-setsize="10" color='white' loading={loading}/>:'Register'}</button>
                <div className="form-link">
                    <small className='register'>Already Have An Account? <span className='account__change' onClick={()=>{setLogin(true)}}>Login</span></small>
                </div>
            </div>
            
            
            
        </div>
       
    </div>
    
</div>
  )
}
