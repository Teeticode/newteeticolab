import React,{memo,useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import AddInfo from './AddInfo';

function Data({user}) {
    const {about} = useSelector(state=>state?.about)
  const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = about?.profession
    const [text,setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random()*100)
    const period = 2000;
    useEffect(()=>{
      
    },[about])
    useEffect(()=>{
      
        let ticker = setInterval(()=>{
            tick()
        }, delta)
        return ()=>{clearInterval(ticker)}
    },[text,about])
    const tick = ()=>{
        let i = loopNum % toRotate?.length;
        let fullText = toRotate?toRotate[i]:'No Text'
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta=>prevDelta/2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }
  return(
    <div className="home__data">
        {
            (user)?(
                <h1 className='home__title'>DashBoard</h1>
            ):(
                <h1 className='home__title'>Sorry</h1>
            )
        }
        {(about)?
        (
            <>
                <h3 className="home__subtitle">{text}</h3>
            <p className="home__description">{about?.about}</p>
            <AddInfo about={about} user={user}/>
            </>
        ):(
            <div style={{margin:'50px',display:'flex', alignItems:'center', justifyContent:'center'}}>
                <AddInfo about={about} user={user}/>
            </div>
        )
        }
        
        
    </div>
   )
}
export default memo(Data)
