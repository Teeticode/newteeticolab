import React from 'react'
import './accordion.css'
import { PuffLoader, SyncLoader } from 'react-spinners'
import { memo } from 'react'
import { useSelector } from 'react-redux'

function Chevron(props) {
    const {loading} = useSelector(state=>state.about)
  return (
    <>
        {loading ?(
            <div
            style={{
                width:'20px',
                height:'20px',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                position:'absolute',
                marginRight:'5%'
            }}
            >
                <PuffLoader size={5} style={{width:"100%!important"}} color='#ccc'/>
            </div>
        ):(
            <div
                style={{width:'20px',height:'20px'}}
            >
                <i style={{fontSize:'20px'}} className={props.className}></i>
            </div>
            ) }
    </>
    
  )
}

export default memo(Chevron)