import React from 'react'
import './footer.css'

function Footer() {
  return (
    <section className="section footer" id="footer"
        style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            marginBottom:'20%!important'
        }}
    >
        <p>@Teeti<span style={{color:'#ffd9d9'}}>colab</span></p>
    </section>
  )
}

export default Footer