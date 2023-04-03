import React,{useState, useEffect} from "react";
import { Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createAbout, getAbout, updateAbout } from "../../redux-store/features/AboutSlice";
import {BeatLoader} from 'react-spinners'
import {BuildingAdd} from 'react-bootstrap-icons'
import { useParams } from "react-router-dom";
import { store } from "../../redux-store/store";
const ToastDiv = ({error,setError})=>{
    return(
        <Toast style={{backgroundColor:'#ffd9d9'}} onClose={()=>{setError("")}}>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className='rounded me-2' alt="" />
                <strong className="me-auto">About</strong>
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
                <strong className="me-auto">About</strong>
                <small>Now</small>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>

        </Toast>
    )
}
export default function EditModal({user}){
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
    
    const {token} = useSelector(state=>state.auth)
    const [input, setInputs] = useState([
        ''
    ])
    
    const [lengthAbout, setLength] = useState(200)
    const dispatch = useDispatch()
    function handleProfession(index,e){
        const values = [...input]
        values[index] = e.target.value
        setInputs(values)
        
    }
    function handleRemove(index){
        const list = [...input];
        list.splice(index, 1)
        setInputs(list)
    }
    useEffect(()=>{
        setProjects(about?.projects)
        setImage(about?.image)
        setInputs(about?.profession)
        setAbout(about?.about)
        setId(about?._id)
        setExperience(about?.experience)
    },[about])
    useEffect(()=>{
        setLength(200-(aboutstat.length))
        
    },[aboutstat])
    useEffect(() => {
        if(!image){
            setPreview(null)
            return
        }
       if(about?.image){
            setPreview(null)
            return
       }else{
            const objectUrl = URL.createObjectURL(image)
            setPreview(objectUrl)
            return ()=>URL.revokeObjectURL(objectUrl)
       }
        
        
    }, [image])
    useEffect(()=>{
        
        if(message){
            setMsg(message)
            dispatch(getAbout(user?.userid))
        }else{
            setMsg(null)
        }
        
    },[message])
    useEffect(()=>{
        
        if(error){
            setError(error)
        }else{
            setError('')
        }
        
    },[error])
    const onSelectImage = e=>{
        if(!e.target.files || !e.target.files.length === 0){
            setImage(null)
            return
        }
        if(e.target.files[0].type === 'image/jpeg' || e.target.files[0].type === 'image/jpg' || e.target.files[0].type === 'image/png'){
            setImage(e.target.files[0])
            setError(null)
        }else{
            setError('Enter a valid Image!')
        }
        
        
    }
    function select(state){
        return state.about.about
    }
    let currentValue
    function handleChange() {
        let previousValue = currentValue
        currentValue = select(store.getState())
        if(previousValue !== currentValue){
            console.log(
                'Some deep nested property changed from',
                previousValue,
                'to',
                currentValue
            )
        }
    }
    function handleAbout(){
        
        const formdata = new FormData()
        let profession = new Array()
        let about = aboutstat
        formdata.append('about', aboutstat)
        formdata.append('projects',projects)
        formdata.append('experience', experience)
        formdata.append('image', image)
        input.map((inp)=>{
            formdata.append('profession', inp)
        })
        setLoading(true)
       
        
        fetch(`http://localhost:5050/api/v1/about/info/${id}`,{
            method:'PUT',
            headers:{
                'Authorization':'Bearer '+token
            },
            body:formdata
        }).then((res)=>res.json()).then((data)=>{
            setLoading(false)
            if(data.error){
                setError(data.error)
                setMsg(null)
            }else if(data.about || data.message){
                setImage(data.about.image)
                setMsg(data.message)
                dispatch(getAbout(user?.userid))
                console.log('This is it')
                setError(null)
            }
        })
        
        
        
            
       
    }
    return (
        <>
            <div className="about__modal-form">
                {
                    (errorStatus)?(
                        <div style={{marginBottom:'20px'}}>
                            <ToastDiv error={errorStatus} setError={setError}/>
                        </div>
                    ):(
                        <></>
                    )
                    
                }
                {
                    (msgStatus)?(
                        <div style={{marginBottom:'20px'}}>
                            <ToastDivMessage message={msgStatus} setMsg={setMsg}/>
                        </div>
                        
                    ):(
                        <></>
                    )
                }
                <div className="form-content">
                
                    <div className='field input-field'>
                        <textarea maxLength={200} value={aboutstat} onChange={(e)=>setAbout(e.target.value)} type="text" placeholder="Tell us About What You Do... " className="about__modal-input" id="" />
                        <small className="text-length">{lengthAbout}</small>
                    </div>
                    <div className="about__modal-image">
                        <i className="uil uil-upload upload__icon"></i>
                        {
                            preview?(
                                <img src={preview} alt="" />
                            ):(
                                <img src={about?.image} alt="" />
                            )
                        }
                        <input type="file" onChange={onSelectImage}  style={{marginRight:'40%',position:'absolute',opacity:0}} id="" />
                    </div>
                    <div className="about__modal-group">
                        <div className="">
                        <label htmlFor='Experience'>Experience: </label>
                        <input type="number" value={experience} onChange={(e)=>setExperience(e.target.value)} placeholder="eg. 4" className="about__modal-input" id="Experience" />
                        </div>
                        <div className="">
                            <label htmlFor='projects'>Projects: </label>
                        <input type="number" value={projects} onChange={(e)=>setProjects(e.target.value)} placeholder="eg. 40" className="about__modal-input" id="projects" />
                        </div>
                    </div>
                    {input.map((inp,index)=>(
                    <div key={index}>
                        <div  className="field input-field">
                        
                        <input name="profession" type="text" value={inp} onChange={(e)=>handleProfession(index, e)} placeholder="Profession" className="about__modal-input" id="" />
                    
                    </div>
               
                        
                            <div 
                                style={{
                                    display:'flex',
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}
                            >
                                {(index===0)?(
                                    <div 
                                    style={{
                                        display:'flex',
                                        alignItems:'center',
                                        justifyContent:'center',
                                        margin:'5px', 
                                    
                                        width:'40px', 
                                        height:'40px', 
                                        borderRadius:'50%',
                                        cursor:'pointer'
                                        
                                    }}>
                                    <i className="uil uil-plus-circle" style={{fontWeight:'800',justifySelf:'center', fontSize:'25px'}} onClick={()=>setInputs([...input,''])}></i>
                                </div>
                                ):(
                                    <></>
                                )}
                                
                            {(index === 0)?(
                                <></>
                            ):(
                                <div
                                style={{
                                    display:'flex',
                                    alignItems:'center',
                                    justifyContent:'center',
                                    margin:'5px', 
                                    
                                    width:'40px', 
                                    height:'40px', 
                                    borderRadius:'50%',
                                    cursor:'pointer'
                                    
                                }}
                            >
                                <i className="uil uil-minus-circle" onClick={()=>handleRemove(index)} style={{fontWeight:'700', fontSize:'25px'}}></i>
                            </div>
                            )}
                    </div>
                        
                    </div>
                ))}
                {
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
                }
                    <button onClick={handleAbout} className="button button--flex about__modal-btn">{
                        (loading)?
                        (
                            <BeatLoader color="white"/>
                        ):(
                            "Save"
                        )
                    }</button>
                </div>
                
            </div>
        </>
    )
}