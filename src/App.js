import React,{useEffect,useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { addToken } from './redux-store/auth/AuthSlice';
import './App.css'
import {Home,Dash} from './pages';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './redux-store/auth/UserSlice';
import Vendor from './pages/Vendor';
function BaseComponent({token, isDark,setIsDark}){
  
  return(
    <>
    {
      token?
      (
        <Dash isDark={isDark} setIsDark={setIsDark}/>
      )
      :(
        <Vendor isDark={isDark} setIsDark={setIsDark}/>
      )
    }
    </>
  )
}
function App() {
  const dispatch = useDispatch()
  const {token} = useSelector(state=>state.auth)
  const [isDark, setIsDark] = useState(true)
  useEffect(()=>{
    dispatch(addToken())
    
  },[])
  return (
    <>
        
       <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<BaseComponent isDark={isDark} token={token} setIsDark={setIsDark}/>} />
          <Route exact path='/:userId' element={<Home/>} />
        </Routes>
       </BrowserRouter> 
        
    </>
    
  );
}

export default App;
