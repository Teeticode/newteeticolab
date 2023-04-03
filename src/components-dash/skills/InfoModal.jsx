import React,{useState, useEffect} from "react";
import { Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createAbout, getAbout } from "../../redux-store/features/AboutSlice";
import {BeatLoader} from 'react-spinners'
import {BuildingAdd} from 'react-bootstrap-icons'
import Accordion from 'react-bootstrap/Accordion';
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
export default function InfoModal({user}){
    const [about, setAbout] = useState('')
    const [brief, setBrief] = useState('')
    const [projects, setProjects]=useState('')
    const [experience,setExperience] = useState('')
    const [image, setImage] = useState()
    const [preview, setPreview] = useState('')
    const [errorStatus, setError] = useState('')
    const [msgStatus, setMsg] = useState('')
    const {error,loading,message} = useSelector(state=>state.about)
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
        setLength(200-(about.length))
    },[about])
    useEffect(() => {
        if(!image){
            setPreview(null)
            return
        }
       
        const objectUrl = URL.createObjectURL(image)
        setPreview(objectUrl)
        return ()=>URL.revokeObjectURL(objectUrl)
        
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
    function handleAbout(){
        
        
        if(image){
            if(!error){
                setError('')
            }else{
                setError(error)
            }
            const form = new FormData()
        form.append('about', about)
        form.append('projects',projects)
        form.append('experience', experience)
        form.append('image', image)
        form.append('brief', brief)
        input.map((inp)=>{
            form.append('profession', inp)
        })
        
        dispatch(createAbout(form))
        dispatch(getAbout(user?.userid))
        }else{
            setError('Upload an Image')
        }
        
        
        
            
       
    }
    return (
        <>
            <div className="about__modal-form" >
                {
                    (errorStatus)?(
                        <ToastDiv error={errorStatus} setError={setError}/>
                    ):(
                        <></>
                    )
                    
                }
                {
                    (msgStatus)?(
                        <ToastDivMessage message={msgStatus} setMsg={setMsg}/>
                    ):(
                        <></>
                    )
                }
            <div style={{padding:'20px'}}>
            <Accordion  defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Skill 2</Accordion.Header>
                    <Accordion.Body>
                    
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
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </div>
                
            </div>
        </>
    )
}