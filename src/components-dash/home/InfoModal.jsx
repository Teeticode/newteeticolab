import React,{useState, useEffect} from "react";
import { Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createAbout, getAbout } from "../../redux-store/features/AboutSlice";
import {BeatLoader, ScaleLoader} from 'react-spinners'
import {BuildingAdd} from 'react-bootstrap-icons'
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
    const [imageUrl,setImageUrl] = useState()
    const [loadingImage,setLoadingImg] = useState(false)
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
        if(!imageUrl){
            setPreview(null)
            return
        }
        if(imageUrl){
            handleUpload()
            
        }
        if(image){
            console.log(image)
        }
        const objectUrl = URL.createObjectURL(imageUrl)
        setPreview(objectUrl)
        return ()=>URL.revokeObjectURL(objectUrl)
        
    }, [imageUrl])
    useEffect(()=>{
        
        if(message){
            setMsg(message)
            dispatch(getAbout(user?.userid))
        }else{
            setMsg(null)
        }
        
    },[message])
    
    const onSelectImage = e=>{
        if(!e.target.files || !e.target.files.length === 0){
            setImageUrl(null)
            return
        }
        if(e.target.files[0].type === 'image/jpeg' || e.target.files[0].type === 'image/jpg' || e.target.files[0].type === 'image/png'){
            setImageUrl(e.target.files[0])
            
            setError(null)
        }else{
            setError('Enter a valid Image!')
        }
        
        
        
    }
    const handleUpload =()=>{
        setLoadingImg(true)
        const dataform = new FormData()
        dataform.append('file', imageUrl)
        dataform.append('upload_preset', 'portfolio')
        dataform.append("cloud_name", "teeti254")
        fetch("https://api.cloudinary.com/v1_1/teeti254/image/upload",{
          method:'POST',
          body:dataform
        }).then(res=>res.json()).
        then((data)=>{
          setLoadingImg(false)
          console.log(data)
          setImage(data.secure_url)
        }
        ).catch(err=>console.log(err))
      }
    function handleAbout(){
        
        
        if(image){
            
            
                const form = new FormData()
                let profession = new Array()
                form.append('about', about)
                form.append('projects',projects)
                form.append('experience', experience)
                form.append('image', image)
                form.append('brief', brief)
                input.map((inp)=>{
                    profession.push(inp)
                })
                console.log({items:{about, projects,image,experience,projects,profession}})
                dispatch(createAbout({about, projects,image,experience,projects,profession}))
                dispatch(getAbout(user?.userid))
            
            
        }else{
            setError('Upload an Image')
        }
        
        
        
            
       
    }
    return (
        <>
            <div className="about__modal-form">
                
                <div className="form-content">
                
                    <div className='field input-field'>
                        <textarea maxLength={200} value={about} onChange={(e)=>setAbout(e.target.value)} type="text" placeholder="Tell us About What You Do... " className="about__modal-input" id="" />
                        <small className="text-length">{lengthAbout}</small>
                    </div>
                    
                        {
                            loadingImage?(
                                <>
                                <div className="about__modal-image">
                                <ScaleLoader color="black"/>
                                </div>
                                </>
                            ):(
                                <>
                                <div className="about__modal-image">
                                    <i className="uil uil-upload upload__icon"></i>
                                    {
                                        preview?(
                                            <img src={preview} alt="" />
                                        ):(
                                            <img src={require('../../assets/images/pexels3.jpg')} alt="" />
                                        )
                                    }
                                    <input type="file" onChange={onSelectImage}  style={{marginRight:'40%',position:'absolute',opacity:0}} id="" />
                                </div>
                                </>
                            )
                        }
                        
                        
                    <div className="about__modal-group">
                        <div className="">
                        <label htmlFor='Experience'>Experience: </label>
                        <input type="text" value={experience} onChange={(e)=>setExperience(e.target.value)} placeholder="eg. 4" className="about__modal-input" id="Experience" />
                        </div>
                        <div className="">
                            <label htmlFor='projects'>Projects: </label>
                        <input type="text" value={projects} onChange={(e)=>setProjects(e.target.value)} placeholder="eg. 40" className="about__modal-input" id="projects" />
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
                    (message)?(
                        <small style={{color:'#26b999', marginTop:'20px'}}>{message}</small>
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