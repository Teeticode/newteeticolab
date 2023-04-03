import React,{useState, useEffect} from "react";
import { Toast } from "react-bootstrap";
import { Alert, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createAbout, getAbout, updateAbout } from "../../redux-store/features/AboutSlice";
import {BeatLoader} from 'react-spinners'
import {BuildingAdd} from 'react-bootstrap-icons'
import { useParams } from "react-router-dom";
import { store } from "../../redux-store/store";
import './services.css'


const ToastDiv = ({error,setError})=>{
    return(
        <Toast style={{backgroundColor:'#ffd9d9'}} onClose={()=>{setError("")}}>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className='rounded me-2' alt="" />
                <strong className="me-auto">TeetiColab</strong>
                <small>Now</small>
            </Toast.Header>
            <Toast.Body>{error}</Toast.Body>
        </Toast>
    )
}
const ToastDivMessage = ({message,setMsg})=>{
    return(
        <Toast style={{backgroundColor:'#26b999'}} onClose={()=>{setMsg("")}}>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className='rounded me-2' alt="" />
                <strong className="me-auto">TeetiColab</strong>
                <small>Now</small>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>

        </Toast>
    )
}
export default function Verify({user}){
    const [aboutstat, setAbout] = useState('')
    const [brief, setBrief] = useState('')
    const [projects, setProjects]=useState('')
    const [experience,setExperience] = useState('')
    const [image, setImage] = useState()
    const [preview, setPreview] = useState('')
    const [errorStatus, setError] = useState('')
    const [msgStatus, setMsg] = useState('')
    const [id, setId] = useState()
    const {error,message,about} = useSelector(state=>state.about)
    const [loading, setLoading] = useState(false)
    const [reason, setReason] = useState('')
    const [phone, setPhone] = useState(254)
    const [otpstate, setOtpState] = useState(false)
    const [otp, setOtp] = useState(new Array(4).fill(""))
    const {token} = useSelector(state=>state.auth)
    
    const [input, setInputs] = useState([
        ''
    ])
    
    const [lengthAbout, setLength] = useState(200)
    const dispatch = useDispatch()
    useEffect(()=>{
        
    },[])
    function payMpesa(){
        let headers = new Headers();
        
        let tokenData = btoa('2GZ0f1v6HMDk4ETBVUSqb97veRvbL8f3:Ac5jvl1phCpc8T5t')
        console.log(tokenData)
        headers.append('Authorization', "Bearer "+tokenData)
        fetch("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",{
            method:'GET',
            headers:headers
        }).then(response=>response.text())
        .then(result => console.log(result))
        .catch(error=>console.log(error))
    }
    function handleVerification(){
        Alert('Verify')
    }
    function handleOtp(element, index){
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d,idx)=> (idx ==index)? element.value: d)])
        if(element.nextSibling){
            element.nextSibling.focus();
        }
    }
    function handleSendOtp(){
        if(phone.startsWith('2547') || phone.startsWith('2541')){
            setError(null)
            if(phone.length >= 12 && phone.length == 12 ){
                setOtpState(true)
                
            }else{
                setError('Wrong Number')
            }
            console.log(phone)
        }else{
            setError('eg +2547 or +2541 ')
            setMsg(null)
            console.log(phone)
        }
    }
    
    
    return (
        
            <div className="about__modal-form">
                {
                    (errorStatus)?(
                        <div style={{marginBottom:'20px',width:'90%'}}>
                            <ToastDiv error={errorStatus} setError={setError}/>
                        </div>
                    ):(
                        <></>
                    )
                    
                }
                {
                    (msgStatus)?(
                        <div style={{marginBottom:'20px',width:'90%'}}>
                            <ToastDivMessage message={msgStatus} setMsg={setMsg}/>
                        </div>
                        
                    ):(
                        <></>
                    )
                }
                <div className="form-content">
                    
                    {otpstate?(
                        <>
                        <div className='sign-in-button'></div>
                            <div className="col text-center">
                                <p>Enter the OTP sent to your mobile number</p>
                                    <div
                                        style={{
                                            display:'flex',
                                            alignItems:'center',
                                            justifyContent:'space-evenly',
                                            
                                        }}
                                    className="otp">
                                    {
                                        otp.map((data,index)=>{
                                            return(
                                                <input
                                                    
                                                    key={index}
                                                    className="otp-field"
                                                    type="text"
                                                    name="otp"
                                                    maxLength="1"
                                                    onChange={(e)=>{handleOtp(e.target, index)}}
                                                    value={data}
                                                    onFocus={(e)=>e.target.select}
                                                />
                                            )
                                        })
                                    }
                                    </div>
                                
                                
                            </div>
                            <small style={{marginTop:'20px', color:'skyblue',fontSize:'10px', cursor:'pointer'}} onClick={()=>{
                                setOtpState(false)
                            }}>Change number</small>
                        </>
                    ):(
                    <>
                        <TextField value={phone} onChange={(e)=>setPhone(e.target.value)} id="outlined-basic" type='number' label="+254" variant="outlined" />
                    </>
                    )}
                    
                        
                    {/** 
                    (msgStatus)?(
                        <small style={{color:'#26b999', marginTop:'20px'}}>{msgStatus}</small>
                    ):(
                        <></>
                    )
                    }
                    {
                        (errorStatus)?(
                            <small style={{color:'red', marginTop:'20px'}}>{errorStatus}</small>
                        ):(
                            <></>
                        )
                    */}
                    {
                        otpstate?(
                            <button onClick={handleVerification} style={{margin:"20px"}} className="button button--flex about__modal-btn">{
                        (loading)?
                        (
                            <BeatLoader color="white"/>
                        ):(
                            "Verify OTP"
                        )
                    }</button>
                        ):(
                            <button onClick={payMpesa} style={{margin:"20px"}} className="button button--flex about__modal-btn">{
                        (loading)?
                        (
                            <BeatLoader color="white"/>
                        ):(
                            "Send OTP"
                        )
                    }</button>
                        )
                    }
                </div>
                
            </div>
     
    )
}